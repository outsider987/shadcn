"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex flex-col m-auto overflow-hidden items-center max-w-[1920px] justify-center w-full bg-black">
      <h1>Hello World</h1>
    </main>
  );
}
