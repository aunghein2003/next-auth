import CredentialsForm from "@/components/credentialsForm";

export default function Home() {
  return (
    <div className="w-full min-h-screen p-5 flex justify-center items-center bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <div className="w-1/4 min-h-[50vh] flex flex-col items-center">
        <h1 className="w-full text-center text-3xl font-semibold text-white py-5">
          Sign In
        </h1>
        <div className="w-full text-center py-5 text-2xl font-semibold text-slate-200">
          Or
        </div>
        <CredentialsForm />
      </div>
    </div>
  );
}
