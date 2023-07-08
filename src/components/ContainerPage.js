"use client";

import React from "react";
import { useEffect } from "react";
import { headerMainRef } from "./sideBar/SideMenu";
export default function ContainerPage() {
  useEffect(() => {
    headerMainRef.current.style.backgroundColor = "white";
    return () => {
      headerMainRef.current.style.backgroundColor = "transparent";
    };
  }, []);
  return <div>airline partnership</div>;
}
