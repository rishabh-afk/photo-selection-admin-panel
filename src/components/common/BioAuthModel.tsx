"use client";

import AuthGuard from "@/components/AuthGuard";
import React, { useState } from "react";


const availableSkills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Tailwind CSS',
    'GraphQL',
    'Python',
    'Java',
    'Django',
    'C#',
    'Ruby',
    'Vue.js',
  ];
  
const Modal: React.FC = () => {
  // State hooks for form data
  const [bio, setBio] = useState("");
  // const [specializations, setSpecializations] = useState<string[]>([]);
  const [experience, setExperience] = useState<number | string>("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  

  
  // Handle change when a skill is selected or removed
  const handleSkillChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Get the newly selected skills
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);

    // Update selectedSkills array by adding only the new ones that are not already selected
    setSelectedSkills((prevSelected) => {
      const newSkills = selectedOptions.filter((skill) => !prevSelected.includes(skill));
      return [...prevSelected, ...newSkills]; // Add the new selections while preserving previous ones
    });
  };

  // Remove a skill from the selected skills
  const removeSkill = (skill: string) => {
    setSelectedSkills((prev) => prev.filter((item) => item !== skill));
  };

  // Handler for the "Continue" button
  const handleContinue = () => {
    // Logic to save data can go here (for now, just an alert)
    alert("Your details have been submitted!");
    // Close modal here if applicable (you can implement modal close logic based on your app setup)
  };

  return (
    <AuthGuard>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-lg w-[500px] shadow-lg">
          {" "}
          {/* Increased width to 500px */}
          {/* Modal Heading */}
          <h2 className="text-[#00B8A5] text-xl font-semibold mb-6">
            More Details
          </h2>
          {/* Bio Textarea */}
          <div className="mb-4">
            <label htmlFor="bio" className="font-medium mb-2 block">
              Bio
            </label>
            <textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00B8A5]"
              placeholder="Enter your bio"
              rows={4}
            />
          </div>
          {/* Specialization Multi-Select */}
          <div className="w-full ">
      <label htmlFor="skills" className="block text-lg font-medium text-gray-700">
        Select Skills
      </label>

     
      <select
        id="skills"
        multiple
        value={selectedSkills}
        onChange={handleSkillChange}
        className="mt-2 block w-full border  border-gray-300 rounded-lg py-2 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
   
     >
        {availableSkills.map((skill) => (
          <option key={skill} value={skill}>
            {skill}
          </option>
        ))}
      </select>

      <div className="mt-4">
        <h3 className="text-lg font-medium text-gray-700">Selected Skills:</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {selectedSkills.map((skill) => (
            <span
              key={skill}
              className="flex items-center px-3 py-1 text-sm font-medium text-white bg-primary rounded-full"
            >
              {skill}
              <button
                type="button"
                onClick={() => removeSkill(skill)}
                className="ml-2 text-xs font-semibold text-white"
              >
                &times;
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>
          {/* Experience Input */}
          <div className="mb-6">
            <label htmlFor="experience" className="font-medium mb-2 block">
              Experience (years)
            </label>
            <input
              id="experience"
              type="number"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00B8A5]"
              placeholder="Enter your experience in years"
            />
          </div>
          {/* Continue Button */}
          <div className="flex justify-end">
            <button
              onClick={handleContinue}
              className="bg-[#00B8A5] text-white px-8 py-3 rounded-lg w-full hover:bg-[#009b94] focus:outline-none"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
};

export default Modal;
