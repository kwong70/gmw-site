"use client";
import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import banner from "../../assets/banner.jpeg";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import Calendar from "@/components/Calendar";
import Card from "@/components/Card";
import FormSubmission from "@/components/FormSubmission";

export default function Home() {
  const [stage, setStage] = useState(0);
  const [doctor, setDoctor] = useState(-1);
  const [time, setTime] = useState("");
  const [day, setDay] = useState("");
  const [message, setMessage] = useState({
    firstName: "", 
    lastName: "", 
    email: "",
    doctorName: "", 
    time: "", 
    day: ""
  })
  const doctorInfo = [
    {
      imageSrc: image1,
      name: "Samantha Butterfield, M.D.",
    },
    {
      imageSrc: image2,
      name: "Shane Griffin, M.D.",
    },
    {
      imageSrc: image3,
      name: "Grant Wong, M.D.",
    },
  ];
  const handleSubmission = (firstName: any, lastName: any, email: any, doctorName: any, time: any, day: any) => {
    setMessage({firstName, lastName, email, doctorName, time, day})
    setStage(3);
  };
  return (
    <main className="flex min-h-screen flex-col items-center">
      <nav className="flex items-center justify-between flex-wrap w-full px-16 pb-16 pt-8">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-xl tracking-tight text-black">
            Health Systems Inc
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-200 hover:text-white mr-4">
              Meet your doctor
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-200 hover:text-white mr-4"
            >
              Examples
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-200 hover:text-white"
            >
              Contact Us
            </a>
          </div>
          <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Hello Grant!
            </a>
          </div>
        </div>
      </nav>
      <div className="mx-16 mb-16">
        {stage === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <p className="mb-4">Lets start booking your appointment with us!</p>
            <h2 className="text-4xl font-bold mb-4">Select your physician</h2>
            <div className="flex w-full justify-between">
              {doctorInfo.map((e, i) => (
                <a
                  onClick={() => {
                    setDoctor(i);
                    setStage(1);
                  }}
                  className="flex flex-col justify-center items-center w-1/3 hover:bg-blue-200 cursor-pointer p-8 mx-4"
                  key={i}
                >
                  <Card imageSrc={e.imageSrc} name={e.name} />
                </a>
              ))}
            </div>
          </div>
        ) : stage === 1 ? (
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold mb-8">
              Schedule your appointment
            </h2>
            <div className="flex w-full justify-between">
              {doctor && (
                <Card
                  imageSrc={doctorInfo[doctor].imageSrc}
                  name={doctorInfo[doctor].name}
                />
              )}
              <Calendar
                handleClick={(time: { day: React.SetStateAction<string>; time: React.SetStateAction<string>; }) => {
                  setStage(2);
                  setDay(time.day);
                  setTime(time.time);
                }}
              />
            </div>
          </div>
        ) : stage == 2 ? (
          <div className="flex flex-col w-full items-center">
            <h2 className="text-4xl font-bold mb-8">Book the appointment!</h2>
            <div className="flex w-full justify-between">
              {doctor && (
                <div className="mr-16">
                  <Card
                    imageSrc={doctorInfo[doctor].imageSrc}
                    name={doctorInfo[doctor].name}
                  />
                </div>
              )}
              {doctor && (
                <div className="w-1/2">
                  <FormSubmission
                    time={time}
                    day={day}
                    doctorName={doctorInfo[doctor].name}
                    handleSubmission={handleSubmission}
                  />
                </div>
              )}
            </div>
          </div>
        ) : (
          <div> 
            <h1 className="text-3xl text-bold">Success! See you {message.firstName} {message.lastName} @ {message.day}, {message.time}</h1>
            <p className="mt-8">A confirmation email was sent to {message.email} and {message.doctorName} and their team have been notified</p>
          </div>
        )}
      </div>

      {/* <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  );
}
