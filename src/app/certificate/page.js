'use client'; 
import { useState } from 'react';
// import Link from 'next/link';
import Button from '../component/button';
import Input from '../component/input';
import Dropdown from '../component/dropdown';

export default function CertificateManager() {
  const courseOptions = ['Faizan E Namaz', 'Character Building'];
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [message, setMessage] = useState('');

    // Validate input
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Check which field is empty
        let emptyField = '';
        switch (true) {
          case !name:
            emptyField = 'Participant Name';
            break;
          case !course:
            emptyField = 'Course';
            break;
          case !mobileNumber:
            emptyField = 'Mobile Number';
            break;
          default:
            emptyField = '';
        }
    
        if (emptyField) {
          setMessage(`${emptyField} is required!`);
          return;
        }
        setMessage('');

        try {
      const response = await fetch('/api/saveCertificate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, course, mobileNumber }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        // Clear form fields
        setName('');
        setCourse('');
        setMobileNumber('');
      } else {
        setMessage(data.message || 'Failed to save data');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
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
            placeholder="Enter Participant Name"
            required={true}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Dropdown
            options={courseOptions}
            onSelect={(selectedCourse) => setCourse(selectedCourse)}
          />
          <Input
            label="Mobile Number"
            type="tel"
            name="mobileNumber"
            placeholder="Enter Mobile Number"
            required={true}
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <Button type="submit">Generate Certificate</Button>
        </form>
        {message && <p className="mt-4 w-full text-sm text-center text-red-600">{message}</p>}
      </div>
    </section>
  );
}