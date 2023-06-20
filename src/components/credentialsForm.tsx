"use client";

import { FormEvent, useRef, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function CredentialsForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<String | null>(null);
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    const signInResponse = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (signInResponse && !signInResponse.error) {
      router.push("/dashboard");
    } else {
      console.log("Error", signInResponse?.error);
      setError("Your email or password is wrong!");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col gap-y-4 [&>input]:p-3 [&>input]:bg-slate-100 [&>input]:rounded-md"
    >
      {error && (
        <span className="w-full p-2 text-lg font-medium bg-red-500 text-white">
          {error}
        </span>
      )}

      <input
        ref={emailRef}
        type="text"
        name="email"
        required
        placeholder="Email"
        className="focus:outline-none"
      />
      <input
        ref={passwordRef}
        type="password"
        name="password"
        required
        placeholder="Password"
        className="focus:outline-none mb-2"
      />

      <button
        type="submit"
        className="p-2 rounded-md text-base font-medium text-white bg-blue-500"
      >
        Login
      </button>
    </form>
  );
}
