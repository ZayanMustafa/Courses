"use client";

import { useRef } from "react";
import { FaDownload } from "react-icons/fa";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Certificate({
  name = "Zayyan Mustafa",
  fatherName = "Aamir",
  course = "ML & AI",
  date = new Date().toLocaleDateString(),
  location = "Korangi District",
}) {
  const certificateRef = useRef(null);

  // Function to handle downloading the certificate as a PDF
  const handleDownload = () => {
    if (certificateRef.current) {
      html2canvas(certificateRef.current, {
        scale: 3, 
        useCORS: true, 
      })
        .then((canvas) => {
          const imgData = canvas.toDataURL("image/jpeg", 1.0);
          const pdf = new jsPDF("landscape", "mm", "a4");
          const imgWidth = 297;
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
          pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight);
          pdf.save(`${name}-certificate.pdf`);
        })
        .catch((error) => {
          console.error("Error generating PDF:", error);
          alert("Failed to generate PDF. Please try again.");
        });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div
        ref={certificateRef}
        className="relative w-full aspect-[1.414/1] bg-white border border-gray-200 shadow-lg overflow-hidden"
      >
        {/* Certificate Background Image */}
        <img
          src="/Certificate.jpg" // Replace with the path to your certificate image
          alt="Certificate Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay Text */}
        <div className="relative z-10 flex flex-col items-center justify-between h-full p-10">
          {/* Name and Father's Name */}
          <div className="absolute top-[48%] left-1/2 transform -translate-x-1/2 text-center">
            <p className="text-4xl font-bold text-black">{name}</p>
            {/* <p className="text-xl text-black mt-2">Son of {fatherName}</p> */}
          </div>

          {/* Course */}
          <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 text-center">
            <p className="text-xl text-black">{course}</p>
          </div>

          {/* Date */}
          {/* <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 text-center">
            <p className="text-lg text-black">{date}</p>
          </div> */}

          {/* Location */}
          <div className="absolute top-[70%] left-1/2 transform -translate-x-1/2 text-center">
            <p className="text-lg text-black">{location}</p>
          </div>
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