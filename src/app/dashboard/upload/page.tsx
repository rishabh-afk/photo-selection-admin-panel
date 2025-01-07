"use client";

import React, { useState } from "react";
import useFetch from "@/hooks/useFetch";
import { endpoints } from "@/data/endpoints";
import AuthGuard from "@/components/AuthGuard";
import Wrapper from "@/components/common/Wrapper";
import { useDropzone, Accept } from "react-dropzone";

import Modal from "../../../../src/components/common/Modal";
import { ImCloudUpload } from "react-icons/im";
import Image from 'next/image';
import { toast } from "react-toastify";
import Loader from "@/components/common/Loader";

const Upload: React.FC = () => {
    const { data, loading, error } = useFetch(endpoints["Contact"].fetchAll);
    const updatedData = data?.data.result;

    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState<number[]>([]);

    const acceptedFileTypes = ["image/jpeg", "image/png", "image/gif", "image/jpg", "image/svg+xml"];

    const onDrop = (acceptedFiles: File[]) => {
        const validImages: File[] = [];
        let totalSize = 0;

        acceptedFiles.forEach((file) => {
            if (!acceptedFileTypes.includes(file.type)) {
                setErrorMessage("Only JPG, JPEG, PNG, GIF, and SVG files are allowed.");
                return;
            }

            if (file.size > 10 * 1024 * 1024) {
                setErrorMessage("File size must be less than 10MB.");
                return;
            }

            validImages.push(file);
            totalSize += file.size;
        });

        if (validImages.length > 0) {
            const newImagePreviews: string[] = [];
            validImages.forEach((file) => {
                const reader = new FileReader();

                reader.onloadend = () => {
                    newImagePreviews.push(reader.result as string);
                    setImagePreviews((prevState) => [...prevState, reader.result as string]);
                };

                reader.readAsDataURL(file);
            });

            setErrorMessage(null);
        }
    };

    const accept: Accept = {
        "image/*": [],
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept,
        multiple: true,
    });

    if (loading && !updatedData && !error) return <Loader />;

    const prevImage = () => {
        if (selectedImageIndex !== null && selectedImageIndex > 0) {
            setSelectedImageIndex(selectedImageIndex - 1);
        }
    };

    const nextImage = () => {
        if (selectedImageIndex !== null && selectedImageIndex < imagePreviews.length - 1) {
            setSelectedImageIndex(selectedImageIndex + 1);
        }
    };

    const cancelSelection = () => {
        setImagePreviews([]);
        setSelectedImageIndex(null);
    };

    // Handle the upload process
    const uploadImages = async () => {
        setIsUploading(true);
        setUploadProgress(Array(imagePreviews.length).fill(0)); // Initialize progress bar

        try {
            const formData = new FormData();
            imagePreviews.forEach((preview, index) => {
                const imageBlob = dataURLtoBlob(preview);
                formData.append("images[]", imageBlob, `image-${index}.jpg`);
            });

            // Simulate upload progress (fake endpoint)
            for (let i = 0; i < imagePreviews.length; i++) {
                await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate 1 second per image
                setUploadProgress((prev) => {
                    const newProgress = [...prev];
                    newProgress[i] = 100; // Simulate 100% upload
                    return newProgress;
                });
            }

            // Here we would make an actual API call, e.g.:
            // await fetch('your-upload-endpoint', {
            //     method: 'POST',
            //     body: formData,
            // });

            // Show success message
            toast.success("Images uploaded successfully!");

        } catch (error) {
            console.error("Upload failed:", error);
            setErrorMessage("Upload failed.");
            toast.error("Upload failed.");
        } finally {
            setIsUploading(false);
        }
    };

    // Convert a data URL to a Blob object for uploading
    const dataURLtoBlob = (dataURL: string): Blob => {
        const [header, base64Data] = dataURL.split(",");
        const byteCharacters = atob(base64Data);
        const byteArrays = [];
        for (let offset = 0; offset < byteCharacters.length; offset += 1024) {
            const slice = byteCharacters.slice(offset, offset + 1024);
            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            byteArrays.push(new Uint8Array(byteNumbers));
        }
        return new Blob(byteArrays, { type: "image/jpeg" });
    };

    return (
        <AuthGuard>
            <Wrapper>
                <div className="bg-white p-6 mb-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
                        Upload Your Images
                    </h2>

                    <div className="space-y-4">
                        <div
                            {...getRootProps()}
                            className="border-2 border-dashed border-gray-300 p-6 rounded-md text-center cursor-pointer hover:bg-gray-100"
                        >
                            <input {...getInputProps()} />
                            <div>
                                <h2 className="text-black-400 font-bold">Files Types we Accept</h2>
                                <p className="text-gray-600 text-sm">
                                    JPG, JPEG, PNG, GIF, SVG (Max file size: 10MB)
                                </p>
                                {/* <FontAwesomeIcon icon={faCloudArrowUp} className="text-gray-500 text-4xl" />
                                 */}
                                 <ImCloudUpload className="text-gray-500 text-4xl mx-auto"  />
                                <p className="text-gray-600 text-sm">Click to upload or Browse</p>
                            </div>
                        </div>

                        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
                    </div>

                    {imagePreviews.length > 0 && (
                        <div className="bg-white p-6 mb-8">
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 mt-4">
                                {imagePreviews.map((preview, index) => (
                                    <div key={index} className="relative group">
                                        <Image
                                            src={preview}
                                            alt={`Image Preview ${index}`}
                                            width={500}
                                            height={192}
                                            className="w-full h-48 object-cover rounded-lg shadow-lg transition-opacity duration-300 ease-in-out group-hover:opacity-80"
                                        />
                                        {/* Show loader if uploading */}
                                        {isUploading && uploadProgress[index] < 100 && (
                                            <div
                                                className="absolute bottom-0 left-0 w-full bg-white"
                                                style={{
                                                    height: `${100 - uploadProgress[index]}%`,
                                                    transition: "height 1s ease-out",
                                                }}
                                            ></div>
                                        )}
                                        {/* Hover effect */}
                                        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <button
                                                onClick={() => setSelectedImageIndex(index)} // Set the selected image index for modal
                                                className="bg-gray-700 text-white px-4 py-2 rounded-lg"
                                            >
                                                Preview
                                            </button>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                const newPreviews = [...imagePreviews];
                                                newPreviews.splice(index, 1);
                                                setImagePreviews(newPreviews);
                                            }}
                                            className="absolute top-0 right-0 -mt-2 -mr-2 bg-gray-600 w-10 p-2 text-white rounded-full flex items-center justify-center"
                                        >
                                            &times;
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="flex justify-end space-x-4 mt-4">
                        <button
                            onClick={cancelSelection}
                            className="bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-600 focus:outline-none transition-all duration-200"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => alert("Drafts saved!")}
                            className="bg-gray-500 text-white py-1 px-4 rounded-lg hover:bg-gray-600 focus:outline-none transition-all duration-200"
                        >
                            Save as Draft
                        </button>
                        <button
                            onClick={uploadImages}
                            className="bg-primary text-white py-1 px-4 rounded-lg hover:bg-primary-dark focus:outline-none transition-all duration-200"
                            disabled={isUploading}
                        >
                            {isUploading ? "Uploading..." : "Upload"}
                        </button>
                    </div>
                </div>
            </Wrapper>

            {selectedImageIndex !== null && (
                <Modal isVisible={selectedImageIndex !== null} onClose={() => setSelectedImageIndex(null)}>
                    <div className="flex justify-center items-center relative">
                        <button
                            onClick={prevImage}
                            className="absolute left-0 text-white bg-gray-600 p-2 rounded-full"
                        >
                            &lt;
                        </button>
                        <Image
                            src={imagePreviews[selectedImageIndex]}
                            alt={`Image Preview ${selectedImageIndex}`}
                            width={500}
                            height={500}
                            className="w-auto h-auto object-cover"
                        />
                        <button
                            onClick={nextImage}
                            className="absolute right-0 text-white bg-gray-600 p-2 rounded-full"
                        >
                            &gt;
                        </button>
                    </div>
                </Modal>
            )}
        </AuthGuard>
    );
};

export default Upload;
