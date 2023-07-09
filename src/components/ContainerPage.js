"use client";

import React from "react";
import { useEffect } from "react";
import { headerMainRef } from "./sideBar/SideMenu";
import { headerRef } from "./Header";
import { isSolidHeaderRef } from "./sideBar/SideMenu";
export default function ContainerPage() {
  useEffect(() => {
    headerMainRef.current.style.backgroundColor = "white";
    headerRef.current.style.color = "black";
    headerRef.current.style.boxShadow = "0px 1px 5px 0px rgba(0, 0, 0, 0.4)";
    isSolidHeaderRef.current = true;
    return () => {
      isSolidHeaderRef.current = false;
      headerMainRef.current.style.backgroundColor = "transparent";
    };
  }, []);
  return <div>airline partnership</div>;
}
