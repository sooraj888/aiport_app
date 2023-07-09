"use client";

import styles from "@/styles/sidemenu.module.scss";

import Link from "next/link";
import { createRef, useEffect, useRef, useState } from "react";
import Footer from "../Footer";
import { AiOutlineMenu } from "react-icons/ai";
import { HiOutlineXMark } from "react-icons/hi2";
import { HiChatAlt2 } from "react-icons/hi";
import { MdSupport } from "react-icons/md";
import Header, { headerRef } from "../Header";

import SideMenuOptions from "./SideMenuOptions";

import { usePathname, useSearchParams } from "next/navigation";
export const headerMainRef = createRef();
export let isSolidHeaderRef = createRef(false);
isSolidHeaderRef.current = false;
export default function SideMenu({ children }) {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const sideMenueRef = useRef();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const headerMiddleRef = useRef();

  useEffect(() => {
    // headerMainRef.current.style.backgroundColor = "white";
  }, []);

  useEffect(() => {
    // closeSideMenue();
    const url = `${pathname}?${searchParams}`;
    // alert(pathname);
    if (pathname == "/") {
      headerRef.current.style.backgroundColor = "transparent";
      headerRef.current.style.color = "white";
      headerRef.current.style.boxShadow = "0px 0px 0px #F4AAB9";
    }
    // You can now use the current URL
    // ...
  }, [pathname, searchParams]);

  const closeSideMenue = () => {
    setIsSideMenuOpen(false);
  };

  //start
  useEffect(() => {
    headerRef.current.style.color = "white";
    headerRef.current.style.boxShadow = "0px 0px 0px #F4AAB9";
    const handleScroll = () => {
      // setScrollY(window.scrollY);

      if (
        window.scrollY < 100 &&
        isSolidHeaderRef.current == false &&
        !isSideMenuOpen
      ) {
        headerRef.current.style.backgroundColor = "transparent";
        headerRef.current.style.color = "white";
        headerRef.current.style.boxShadow = "0px 0px 0px #F4AAB9";
      } else {
        headerRef.current.style.backgroundColor = "white";
        headerRef.current.style.color = "black";
        headerRef.current.style.boxShadow =
          "0px 1px 5px 0px rgba(0, 0, 0, 0.4)";
      }
    };

    // just trigger this so that the initial state
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    // handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSideMenuOpen]);

  useEffect(() => {
    if (!isSideMenuOpen) {
      // alert(window.scrollY);
      if (window.scrollY < 100 && isSolidHeaderRef.current == false) {
        headerRef.current.style.color = "white";
        headerRef.current.style.backgroundColor = "transparent";
      } else {
        headerRef.current.style.color = "black";
      }
    } else {
      headerRef.current.style.color = "black";
    }
  }, [isSideMenuOpen]);
  //end

  return (
    <div>
      <div
        onClick={() => {
          closeSideMenue();
        }}
        style={{
          display: isSideMenuOpen ? "flex" : "none",
          flex: 1,
          backgroundColor: "rgb(0,0,0,0.5)",
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          zIndex: 2,
        }}
      ></div>
      <div
        id="mySidenav"
        ref={sideMenueRef}
        className={`${styles.sidenav} ${
          !isSideMenuOpen ? styles.hideSidenav : "khsja"
        }`}
      >
        <div
          className={`${styles.closebtn}`}
          onClick={() => {
            closeSideMenue();
          }}
        >
          &times;
        </div>
        <SideMenuOptions closeSideMenue={closeSideMenue} />
      </div>
      <div
        ref={headerMainRef}
        className={
          isSideMenuOpen
            ? styles.headerBackground
            : styles.headerBackgroundTransparent
        }
        style={{ zIndex: 4 }}
      >
        <div
          ref={headerMiddleRef}
          className={
            isSideMenuOpen
              ? styles.headerBackground
              : styles.headerBackgroundTransparent
          }
        >
          <Header closeSideMenue={closeSideMenue}>
            <div
              className={`${styles.headerMenu}`}
              onClick={() => {
                setIsSideMenuOpen(true);
              }}
            >
              <AiOutlineMenu
                onClick={() => {
                  setIsSideMenuOpen(true);
                  // headerRef.current.style.backgroundColor = "white";
                }}
                scale={20}
                size={36}
                color="black"
              />
            </div>
          </Header>
        </div>
      </div>
      <div className={``} style={{ zIndex: 1 }}>
        {children}
      </div>
      <Footer />
      <div className={`${styles.footerPadding}`} style={{ zIndex: 4 }}></div>
      <div className={`${styles.footerBottom}`} style={{ zIndex: 100 }}>
        <div>
          <MdSupport style={{ marginBottom: 5 }}></MdSupport>
          <Link
            href={"/"}
            className={`${styles.link}`}
            onClick={() => {
              closeSideMenue();
            }}
          >
            Service
          </Link>
        </div>
        <div>
          <HiChatAlt2 style={{ marginBottom: 5 }}></HiChatAlt2>{" "}
          <Link
            href={"/corporate/contact-us"}
            onClick={() => {
              closeSideMenue();
            }}
            className={`${styles.link}`}
          >
            Feedback
          </Link>
        </div>
        <div>
          {isSideMenuOpen ? (
            <HiOutlineXMark
              onClick={() => {
                setIsSideMenuOpen((prev) => !prev);
              }}
              scale={20}
              size={40}
              // color="gray"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => {
                setIsSideMenuOpen((prev) => !prev);
              }}
              scale={20}
              size={40}
            />
          )}
        </div>
      </div>
    </div>
  );
}
