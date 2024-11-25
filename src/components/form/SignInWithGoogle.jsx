"use client";
import { baseUrl } from "@/lib/api/baseUrl";
import React from "react";
import { FcGoogle } from "react-icons/fc";
function SignInWithGoogle() {
  const loginWithGoogle = () => {
    window.open(baseUrl + "/auth/google/callback", "_self");
  };
  
  return (
    <span className="flex items-center justify-center gap-2 mt-6">
      <button className="border flex items-center gap-2 rounded-md p-2 bg-white shadow" onClick={loginWithGoogle}>
        Sign in with Google
        <FcGoogle className="text-3xl" />
      </button>
    </span>
  );
}

export default SignInWithGoogle;
