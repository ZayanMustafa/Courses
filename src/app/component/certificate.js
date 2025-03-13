"use client";

import { useRef } from "react";
import { FaDownload } from "react-icons/fa";
import html2canvas from "html2canvas"; 

export default function Certificate({
  name = "Zayyan Mustafa",
  fatherName = "Aamir",
  course = "ML & AI",
  date = "2023-10-01",
  location = "Harvard University",
}) {
  const certificateRef = useRef(null);

  // Function to handle downloading the certificate as an image
  const handleDownload = () => {
    if (certificateRef.current) {
      html2canvas(certificateRef.current).then((canvas) => {
        const link = document.createElement("a");
        link.download = `${name}-certificate.jpg`;
        link.href = canvas.toDataURL("image/jpg");
        link.click();
      });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div
        ref={certificateRef}
        className="relative w-full aspect-[1.414/1] bg-white border border-gray-200 shadow-lg overflow-hidden"
      >
        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
          <p className="text-4xl font-bold text-gray-400 transform -rotate-45">
            Madani Courses - Korangi Town
          </p>
        </div>

        {/* Blue diagonal corner */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-700 transform rotate-6 translate-x-10 translate-y-[-5%]"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-blue-700 transform rotate-6 translate-x-10 translate-y-[5%]"></div>

        <div className="relative z-10 flex flex-col items-center justify-between h-full p-10">
          <div className="flex w-full justify-between items-start">
          
            {/* Logo */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center border-4 border-dashed border-yellow-500">
                <div className="text-center p-2">
                  <p className="text-black font-bold">Korangi District</p>
                  <p className="text-black font-bold text-xl">Courses</p>
                  <p className="text-black text-sm">Department</p>
                </div>
              </div>
            </div>

            {/* Certificate Title */}
            <div className="text-right">
              <h1 className="text-5xl font-serif text-yellow-500 italic">Certificate</h1>
              <p className="text-2xl font-serif mt-1">of Participation</p>
            </div>
          </div>

          {/* Certificate Content */}
          <div className="flex flex-col items-center justify-center flex-grow text-center max-w-2xl">
            <p className="text-xl font-serif mb-10">This is to Certify That</p>
            
            <div className="w-full border-b-2 border-gray-400 mb-2 relative">
              <p className="text-3xl font-serif absolute top-[-30px] w-full text-center">
                {name} 
                {/* <br /> */}
                <span className="gap-2 text-2xl" /> son of {fatherName}
              </p>
            </div>
            
            <p className="text-xl font-serif">
              has successfully completed the {course}
              <br />
              with regular attendance in {location} on {date}
            </p>
          </div>

          {/* Signatures */}
          {/* <div className="flex justify-between w-full mt-8">
            <div className="text-center">
              <div className="w-48 border-t-2 border-gray-400"></div>
              <p className="font-serif mt-2">Course Instructor</p>
            </div>
            
            <div className="text-center">
              <div className="w-48 border-t-2 border-gray-400"></div>
              <p className="font-serif mt-2">Head of Department</p>
            </div>
          </div> */}
        </div>
      </div>

      {/* Download Button */}
      <div className="mt-6 flex justify-center">
        <button 
          onClick={handleDownload} 
          className="bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-800 transition-colors"
        >
          <FaDownload /> Download Certificate
        </button>
      </div>
    </div>
  );
}