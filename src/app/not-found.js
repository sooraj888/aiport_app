"use client";

import { useRouter } from "next/navigation";
export default function Notfound() {
  const router = useRouter();
  return (
    <button type="button" onClick={() => router.push("/")}>
      Dashboard
    </button>
  );
}
