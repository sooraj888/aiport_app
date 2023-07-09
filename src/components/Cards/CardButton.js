"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "./card.module.scss";

export default function CardButton({ name, path }) {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        if (path) {
          router.push(path);
        }
      }}
      className={`${styles.button}`}
      style={{
        // backgroundColor: "white",
        height: 45,
        marginTop: 30,
        width: "100%",
        minWidth: 100,
        maxWidth: 290,
        borderRadius: 5,
        border: "2px solid rgba(23,158,150,0.5)",
      }}
      //   onClick={() => {}}
    >
      {name}
    </button>
  );
}
