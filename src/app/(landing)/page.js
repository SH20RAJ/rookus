import { HeroParallaxDemo } from '@/components/(Landing)/HeroSection'
import { JoinWaitList } from '@/components/(Landing)/JoinWaitList'
import { ParallaxScrollSecondDemo } from '@/components/(Landing)/Parallex'
import { NavBar } from '@/components/NavBar'
import React from 'react'

export default function page() {
  return (
    <div>
      <NavBar />
      <HeroParallaxDemo/>
      <div className="flex flex-col items-center justify-center h-screen gap-10 ">
        <h1 className="text-5xl font-extrabold text-center mt-16">
          Welcome to <span className="underline decoration-wavy decoration-blue-500">Rookus</span>
        </h1>
        <h2 className="text-xl font-medium text-center text-gray-600">
          Discover Our <span className="text-blue-600 font-semibold">AI-Generated Fashion</span>
        </h2>
        <ParallaxScrollSecondDemo/>
      </div>
      <JoinWaitList />


    </div>
  )
}
