"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/sidemenu.module.scss";

import React, { createRef } from "react";
import { useRouter } from "next/navigation";

export const headerRef = createRef();

export default function Header({ children, closeSideMenue }) {
  // const
  const router = useRouter();
  return (
    <div className={`${styles.header} container-flued row m-0`} ref={headerRef}>
      {/* <div className="col d-flex justify-content-center align-item-center bg-dark">
        <Link href="/" className="col">
          <h1>Dashboard</h1>
        </Link>
        <div className="col">{children}</div>
      </div> */}
      <div
        className="col  d-flex justify-content-start align-items-center "
        onClick={() => {
          // alert("hii");
          closeSideMenue();
          router.push("/");
        }}
        // style={{ textDecoration: "none", color: "black" }}
        // href="/"
      >
        <div className={`${styles.headerTitle}`}>
          <div>
            <b>Shivamoga</b>
          </div>
          <div>
            <nobr>Domestic Airport</nobr>
          </div>
        </div>
      </div>
      <div className="col d-flex justify-content-end align-items-center">
        {children}
      </div>
    </div>
  );
}
