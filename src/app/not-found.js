"use client";

import { useRouter } from "next/navigation";
export default function Notfound() {
  const router = useRouter();
  return (
    <div className="page" style={{ marginTop: 80, background: "red" }}>
      <button type="button" onClick={() => router.push("/")}>
        Dashboard
      </button>
    </div>
  );
}
