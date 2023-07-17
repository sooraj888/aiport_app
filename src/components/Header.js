"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/sidemenu.module.scss";

import React, { createRef } from "react";
import { useRouter } from "next/navigation";
import LOGO from "../../public/assets/logo.png";
import LOGO2 from "../../public/assets/logo2.jpg";
import { AiOutlineSearch } from "react-icons/ai";
import { TiWeatherCloudy } from "react-icons/ti";

export const headerRef = createRef();

export default function Header({ children, closeSideMenue }) {
  // const
  const router = useRouter();
  return (
    <div className={`${styles.header} container-flued row m-0`} ref={headerRef}>
      <div
        className="col  d-flex justify-content-start align-items-center "
        onClick={() => {
          closeSideMenue();
          router.push("/");
        }}
        // style={{ display: "flex", flexDirection: "row" }}
      >
        <div
          style={{
            marginRight: 15,
            marginTop: 2.5,

            width: 45,
            height: 45,
          }}
        >
          <img
            quality={100}
            alt="logo"
            src={LOGO.src}
            style={{ objectFit: "cover", width: "100px", borderRadius: 50 }}
            className={"img-fluid"}
          />
        </div>

        <div
          className={`${styles.headerTitle}`}
          style={{
            paddingLeft: 15,
            borderLeftWidth: 2,
            borderLeftStyle: "solid",
          }}
        >
          <div>
            <b>Shivamogga</b>
          </div>
          <div>
            <nobr>Domestic Airport</nobr>
          </div>
        </div>
      </div>
      <div className="col d-flex justify-content-end align-items-center">
        <div
          style={{
            // marginRight: 15,
            marginTop: 2.5,

            width: 90,
            height: 45,
            overflow: "hidden",
          }}
        >
          <img
            quality={100}
            alt="logo"
            src={LOGO2.src}
            style={{ objectFit: "cover", width: "100px", borderRadius: 0 }}
            className={"img-fluid"}
          />
        </div>
        {/* <div
          style={{
            marginRight: "10%",
          }}
        >
          <AiOutlineSearch size={30} onClick={() => {}}></AiOutlineSearch>
        </div>
        <div style={{ marginRight: "10%" }}>
          <TiWeatherCloudy size={30} onClick={() => {}}></TiWeatherCloudy>
        </div>
        {children} */}
      </div>
    </div>
  );
}
