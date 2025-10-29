import React from 'react'
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";


export const Auth = () => {
  return (
    <>  
    <div className="backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-md mx-auto mt-20 bg-white/30  ">
      <h1>Welcome to the Home Page</h1>
      <p>This is the main landing page of the application.</p>
      <p>Explore our features and get started!</p>
      

    </div>
    <div className="text-center mt-10">
      <LoginLink className="bg-amber-400">Sign in</LoginLink>
    </div>

    <div className="text-center mt-10">
      <RegisterLink className="bg-emerald-400">Sign up</RegisterLink>
    </div>
    </>
  )
}
