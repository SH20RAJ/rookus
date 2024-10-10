"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export function JoinWaitList() {
  return (
    (<div
      className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 flex flex-col items-center justify-center">
        <h1
          className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join the Rookus Waitlist
        </h1>
        <p></p>
        <p
          className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to Rookus, the future of fashion. Our AI-powered platform
          offers personalized custom clothing experiences, connecting designers,
          vendors, and customers globally. Be the first to experience the
          revolution in fashion with Rookus.
        </p>
        <Input
          type="email"
          placeholder="sh20raj@gmail.com"
          className="w-full relative z-10 mt-4 text-center"
        />
        <Button className="w-1/3 relative z-10 mt-4">
          Join Waitlist
        </Button>
      </div>
      <BackgroundBeams />
    </div>)
  );
}
