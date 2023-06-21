import { loginIsRequired } from "@/lib/auth";

export default async function Home({}) {
  await loginIsRequired();
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
