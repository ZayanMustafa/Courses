'use client';

import { useState } from 'react';
import Button from '../component/button';
import Input from '../component/input';
import Dropdown from '../component/dropdown';
import Certificate from '../component/certificate';

export default function CertificateManager() {
  const courseOptions = ['Faizan E Namaz', 'Character Building'];
  const [name, setName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [course, setCourse] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [message, setMessage] = useState('');
  const [showCertificate, setShowCertificate] = useState(false);

  // Validate input
  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset message and hide certificate
    setMessage('');
    setShowCertificate(false);

    // Validation rules

    // If all fields are valid, show the certificate
    setShowCertificate(true);
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-50">
      <div className="w-full bg-white rounded-lg shadow border border-gray-200 max-w-md p-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
          Fill this to generate Certificate
        </h1>
        <form className="space-y-4 md:space-y-6 mt-4" onSubmit={handleSubmit}>
          <Input
            label="Participant Name"
            type="text"
            name="participantName"
            id="participantName"
            placeholder="Enter Participant Name"
            required={true}
            value={name}
            onChange={(value) => setName(value)} // Pass the value to setName
          />
          <Input
            label="Father's Name"
            type="text"
            name="fatherName"
            id="fatherName"
            placeholder="Enter Father's Name"
            required={true}
            value={fatherName}
            onChange={(value) => setFatherName(value)} // Pass the value to setFatherName
          />
          <Input
            label="Mobile Number"
            type="tel"
            name="mobileNumber"
            id="mobileNumber"
            placeholder="Enter Mobile Number"
            required={true}
            value={mobileNumber}
            onChange={(value) => setMobileNumber(value)} 
          />
          <Dropdown
            options={courseOptions}
            onSelect={(selectedCourse) => setCourse(selectedCourse)} 
          />
          <Button type="submit">Generate Certificate</Button>
        </form>
        {message && <p className="mt-4 w-full text-sm text-center text-red-600">{message}</p>}
      </div>

      {/* Display Certificate */}
      {showCertificate && (
        <Certificate
          name={name}
          fatherName={fatherName}
          course={course}
          date="12-03-2025" // Hardcoded date
          location="Korangi District" // Hardcoded location
        />
      )}
    </section>
  );
}