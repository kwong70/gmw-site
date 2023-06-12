import React, { useState } from "react";

export default function FormSubmission({
  time,
  day,
  doctorName,
  handleSubmission,
}: any) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [clicked, setClicked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmission(firstName, lastName, email, doctorName, time, day);
  };

  return (
    <div className="flex flex-col items-center">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-row items-center">
          <label htmlFor="firstName" className="mr-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="border border-gray-300 px-2 py-1"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="flex flex-row items-center">
          <label htmlFor="lastName" className="mr-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="border border-gray-300 px-2 py-1"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="flex flex-row items-center">
          <label htmlFor="email" className="mr-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-gray-300 px-2 py-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-row items-center">
          <label htmlFor="physician" className="mr-2">
            Physician
          </label>
          <input
            type="text"
            id="physician"
            name="physician"
            value={doctorName}
            disabled
            className="border border-gray-300 px-2 py-1 bg-gray-100"
          />
        </div>

        <div className="flex flex-row items-center">
          <label htmlFor="dateTime" className="mr-2">
            Date/Time
          </label>
          <input
            type="text"
            id="dateTime"
            name="dateTime"
            value={`${day}, ${time}`}
            disabled
            className="border border-gray-300 px-2 py-1 bg-gray-100"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
