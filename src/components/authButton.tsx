"use client";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineGithub } from "react-icons/ai";

export function GoogleSigninButton() {
  function handleClick() {
    signIn("google");
  }

  return (
    <button
      onClick={handleClick}
      className="w-full p-3 mb-3 flex items-center justify-center gap-x-3 rounded-md border-none bg-slate-200"
    >
      <FcGoogle />
      <span className="text-lg font-semibold">Continue with Google</span>
    </button>
  );
}

export function GithubSigninButton() {
  function handleClick() {
    signIn("github");
  }

  return (
    <button
      onClick={handleClick}
      className="w-full p-3 flex items-center justify-center gap-x-3 rounded-md border-none bg-slate-200"
    >
      <AiOutlineGithub />
      <span className="text-lg font-semibold">Continue with Github</span>
    </button>
  );
}
