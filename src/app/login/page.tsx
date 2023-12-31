import {
  GithubSigninButton,
  GoogleSigninButton,
} from "@/components/authButton";
import CredentialsForm from "@/components/credentialsForm";

export default async function Home() {
  return (
    <div className="w-full min-h-screen p-5 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <div className=" max-w-[25rem] mt-[15vh] mx-auto flex flex-col items-center">
        <h1 className="w-full text-center text-3xl font-semibold text-white py-5">
          Sign In
        </h1>
        <div className="w-full flex flex-col">
          <GoogleSigninButton />
          <GithubSigninButton />
        </div>
        <div className="w-full text-center py-5 text-2xl font-semibold text-slate-200">
          Or
        </div>
        <CredentialsForm />
      </div>
    </div>
  );
}
