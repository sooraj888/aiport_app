"use client";

import { headerMainRef } from "@/components/sideBar/SideMenu";

import styles from "@/styles/global.module.scss";
import { useEffect } from "react";
export default function page() {
  useEffect(() => {
    headerMainRef.current.style.backgroundColor = "white";
    return () => {
      headerMainRef.current.style.backgroundColor = "transparent";
    };
  }, []);
  return <div className={`${styles.pageWithPadding}`}>airline partnership</div>;
}
