"use client";

import React, { useState } from "react";
import useFetch from "@/hooks/useFetch";
import { endpoints } from "@/data/endpoints";
import AuthGuard from "@/components/AuthGuard";
import Wrapper from "@/components/common/Wrapper";
import { useDropzone, Accept } from "react-dropzone";
import axios from "axios";
import Modal from "../../../../src/components/common/Modal";
import { ImCloudUpload } from "react-icons/im";
import Image from "next/image";
import { toast } from "react-toastify";
import Loader from "@/components/common/Loader";

const Upload: React.FC = () => {
  const { data, loading, error } = useFetch(endpoints["Contact"].fetchAll);
  const updatedData = data?.data.result;

  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]); // Store actual files
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number[]>([]);

  // Maximum total size allowed for all images
  const allowedSize = 20;
  const maxTotalSize = allowedSize * 1024 * 1024;

  const acceptedFileTypes = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/jpg",
    "image/svg+xml",
  ];

  // Calculate the total size of the currently selected images
  const calculateTotalSize = (files: File[]): number => {
    return files.reduce((total, file) => total + file.size, 0);
  };

  const onDrop = (acceptedFiles: File[]) => {
    // Calculate the current total size of images including the new ones
    const currentTotalSize = calculateTotalSize([
      ...imageFiles,
      ...acceptedFiles,
    ]);

    if (currentTotalSize > maxTotalSize) {
      toast.warning(
        `Total image size exceeds the limit. Please choose smaller images.`
      );
      return; // Prevent adding files if total size exceeds the limit
    }

    const validImages: File[] = [];
    acceptedFiles.forEach((file) => {
      if (!acceptedFileTypes.includes(file.type)) {
        setErrorMessage("Only JPG, JPEG, PNG, GIF, and SVG files are allowed.");
        toast.warning("Only JPG, JPEG, PNG, GIF, and SVG files are allowed.");
        return;
      }

      if (file.size > 10 * 1024 * 1024) {
        setErrorMessage("File size must be less than 10MB.");
        toast.warning("File size must be less than 10MB.");
        return;
      }

      validImages.push(file);
    });

    if (validImages.length > 0) {
      // Add valid files to the list
      setImageFiles((prevFiles) => [...prevFiles, ...validImages]);

      const newImagePreviews: string[] = [];
      validImages.forEach((file) => {
        const reader = new FileReader();

        reader.onloadend = () => {
          newImagePreviews.push(reader.result as string);
          setImagePreviews((prevState) => [
            ...prevState,
            reader.result as string,
          ]);
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
    if (
      selectedImageIndex !== null &&
      selectedImageIndex < imagePreviews.length - 1
    ) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const cancelSelection = () => {
    setImagePreviews([]);
    setImageFiles([]);
    setSelectedImageIndex(null);
  };

  const uploadImages = async () => {
    if (imageFiles.length === 0) {
      toast.warning("Please select an image");
      return; // Exit the function early if no images are selected
    }
    setIsUploading(true);
    setUploadProgress(Array(imagePreviews.length).fill(0)); // Initialize progress bar

    try {
      const formData = new FormData();
      imageFiles.forEach((file, index) => {
        formData.append("images[]", file, `image-${index}.jpg`);
      });

      // Initialize progress tracking for each image
      const uploadPromises = imageFiles.map((file, index) => {
        return new Promise<void>((resolve, reject) => {
          const config = {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            onUploadProgress: (progressEvent: any) => {
              // Calculate the upload progress as a percentage
              const progress = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );

              // Update the progress for the specific image
              setUploadProgress((prev) => {
                const newProgress = [...prev];
                newProgress[index] = progress;
                return newProgress;
              });
            },
          };

          // Simulating upload via actual endpoint (use axios or fetch for real request)
          axios
            .post("API_ENDPOINT_HERE", formData, config)
            .then(() => {
              setUploadProgress((prev) => {
                const newProgress = [...prev];
                newProgress[index] = 100; // Mark this image as fully uploaded
                return newProgress;
              });
              resolve();
            })
            .catch((error) => {
              console.error("Upload failed for image", index, error);
              reject(error);
            });
        });
      });

      // Wait for all uploads to finish (in real-life, the uploads happen concurrently)
      await Promise.all(uploadPromises);

      // Show success message after all images are uploaded
      toast.success("Images uploaded successfully!");
    } catch (error) {
      console.error("Upload failed:", error);

      toast.error("Please Try Later!");
    } finally {
      setIsUploading(false);
    }
  };

  const saveAsDraft = async () => {
    if (imageFiles.length === 0) {
      toast.warning("Please select an image");
      return; // Exit the function early if no images are selected
    }
    try {
      // Create FormData to hold the images for submission
      const formData = new FormData();

      // Append all selected image files to the FormData
      imageFiles.forEach((file, index) => {
        formData.append("images[]", file, `image-${index}.jpg`);
      });

      // Send the form data to your API endpoint using axios (change the URL as needed)
      const response = await axios.post("YOUR_API_ENDPOINT_HERE", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // If the response is successful, show a success toast
      if (response.status === 200) {
        toast.success("Draft saved successfully!");
      }
    } catch (error) {
      console.error("Error saving draft:", error);
      toast.error(
        "An error occurred while saving the draft. Please try again later."
      );
    }
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
                <h2 className="text-black-400 font-bold">
                  Files Types we Accept
                </h2>
                <p className="text-gray-600 text-sm">
                  JPG, JPEG, PNG, GIF, SVG (Max file size: 10MB)
                </p>
                <ImCloudUpload className="text-gray-500 text-4xl mx-auto" />
                <p className="text-gray-600 text-sm">
                  Click to upload or Browse
                </p>
              </div>
            </div>
            {errorMessage && (
              <p className="text-red-500 text-center">{errorMessage}</p>
            )}
          </div>

          {imagePreviews.length > 0 && (
  <div className="bg-white p-6 mb-8">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5 mt-4">
      {imagePreviews.map((preview, index) => (
        <div key={index} className="relative group">
          <Image
            src={preview}
            alt={`Image Preview ${index}`}
            width={500}
            height={192}
            className={`w-full h-48 object-cover rounded-lg transition-opacity duration-300 ease-in-out group-hover:opacity-80 ${isUploading ? 'opacity-50' : ''}`} // Add opacity-50 when uploading
          />
          {/* Circular Progress */}
          {isUploading && (
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
              <svg
                className="w-16 h-16 transform" // Rotate to make progress start from the top
                viewBox="0 0 120 120"
              >
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  stroke="#4d90fe"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray="339.292" // Circumference of the circle
                  style={{
                    strokeDashoffset:
                      (1 - uploadProgress[index] / 100) * 339.292,
                  }}
                  strokeLinecap="round"
                  className="transition-all duration-300 ease-in-out"
                />
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dy=".3em"
                  fill="white"
                  fontSize="25"
                  fontWeight="bold"
                >
                  {uploadProgress[index]}%
                </text>
              </svg>
            </div>
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
              const newFiles = [...imageFiles];
              newPreviews.splice(index, 1);
              newFiles.splice(index, 1);
              setImagePreviews(newPreviews);
              setImageFiles(newFiles);
            }}
            className="absolute text-3xl top-0 right-0 -mt-2 -mr-2 bg-red-400 w-8 h-8 pb-2 text-white rounded-full flex items-center justify-center"
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
            {/* <button
              onClick={() => alert("Drafts saved!")}
              className="bg-gray-500 text-white py-1 px-4 rounded-lg hover:bg-gray-600 focus:outline-none transition-all duration-200"
            >
              Save as Draft
            </button> */}

            <button
              onClick={saveAsDraft} // Call saveAsDraft function
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
        <Modal
          isVisible={selectedImageIndex !== null}
          onClose={() => setSelectedImageIndex(null)}
        >
          <div className="flex justify-center items-center relative overflow-hidden">
            {/* Left Slider Button */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 p-3 rounded-full shadow-lg hover:bg-gray-600 focus:outline-none"
            >
              &lt;
            </button>

            {/* Image Display */}
            <div className="w-full max-w-4xl h-[500px] flex justify-center items-center bg-gray-100 rounded-lg shadow-md overflow-hidden">
              <Image
                src={imagePreviews[selectedImageIndex]}
                alt={`Image Preview ${selectedImageIndex}`}
                width={500}
                height={500}
                className="object-contain w-full h-full" // Maintain aspect ratio
              />
            </div>

            {/* Right Slider Button */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 p-3 rounded-full shadow-lg hover:bg-gray-600 focus:outline-none"
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
