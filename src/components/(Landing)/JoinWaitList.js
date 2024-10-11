"use client";
import React, { useState } from "react";
import { BackgroundBeams } from "../ui/background-beams";
// import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Waitlist from "../Waitlist/Waitlist";

export function JoinWaitList() {
  // State to manage the visibility of the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle opening the modal
  const openModal = () => setIsModalOpen(true);

  // Function to handle closing the modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 flex flex-col items-center justify-center">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
        Not sure which plan to choose? Join our waitlist
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        you're not ready to commit to a Rookus plan just yet, don't worry! By joining our waitlist, you'll stay up-to-date with the latest features, new models, exclusive offers, and product updates. It's the perfect way to keep yourself informed and explore all that Rookus has to offer without any immediate obligation.
        Sign up now and be the first to know when we release exciting new updates!
        </p>
        {/* <Input
          type="email"
          placeholder="sh20raj@gmail.com"
          className="w-full relative z-10 mt-4 text-center"
        /> */}
        {/* Button to open the waitlist modal */}
        <Button
          onClick={openModal}
          className="mt-4 relative z-10"
        >
          Join Waitlist
        </Button>
      </div>

      {/* Modal for the waitlist */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-md p-6 relative max-w-lg w-full mx-4">
            <button
              className="absolute top-2 right-2 text-gray-600 text-2xl focus:outline-none"
              onClick={closeModal}
            >
              &times;
            </button>
            {/* Waitlist component inside the modal */}
            <Waitlist />
          </div>
        </div>
      )}

      <BackgroundBeams />
    </div>
  );
}
