import { JoinWaitList } from '@/components/(Landing)/JoinWaitList'
import { NavBar } from '@/components/NavBar'
import React from 'react'

export default function page() {
  return (
    <div>
      <NavBar />
      <div className="flex items-center justify-center h-screen ">
        <h1 className="text-4xl font-bold">Welcome to Rookus</h1>
      </div>
      <JoinWaitList />
    </div>
  )
}
