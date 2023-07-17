"use client";

import Image from "next/image";
import styles from "@/styles/nav_list_button.module.scss";
import NavigationCard from "./NavigationCard";
import footerStyle from "./footer.module.scss";
import { useState } from "react";
import LOGO from "../../public/assets/logo.png";
import Link from "next/link";

export default function OwnerCard() {
  const [isSitemapOpen, setIsSitemapOpen] = useState(false);
  const socialMediaLinks = [
    {
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png",
      url: "",
    },
    {
      imageSrc: "https://cdn-icons-png.flaticon.com/128/2111/2111463.png",
      url: "",
    },
    {
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png",
      url: "",
    },
    {
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553",
      url: "",
    },
  ];
  return (
    <div
      className={`text-center container-fluid p-0`}
      // style={{ paddingLeft: "10%", paddingRight: "10%" }}
    >
      <div className={"d-flex justify-content-center row "}>
        <div
          style={{ maxWidth: 600, color: "black" }}
          className={"d-flex justify-content-center row "}
        >
          <div
            className={"d-flex justify-content-center row "}
            style={{
              display: "block",
              overflow: "hidden",
              maxWidth: 400,
            }}
          >
            <div
              style={{
                marginRight: 15,
                marginTop: 2.5,

                width: 100,
                height: 100,
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

            <div style={{ margin: 20 }}>
              Shivamogga Domestic Airport
              <br />
              Shivamogga, Karnataka 577302
            </div>
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              {socialMediaLinks.map((item, key) => {
                return (
                  <button
                    key={key}
                    className="btn"
                    style={{
                      margin: "10px 4px",
                      padding: 0,
                      borderRadius: 0,
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <img
                      src={item.imageSrc}
                      className="img-fluid"
                      style={{
                        width: 25,
                        height: 25,
                        objectFit: "cover",
                      }}
                    ></img>
                  </button>
                );
              })}
            </div>
          </div>
          <div
            style={{
              color: "gray",
              height: "35px",
              paddingTop: "30px",
              paddingBottom: "50px",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Link className={footerStyle.linkGray} href={"/"}>
              About Us
            </Link>
            <Link className={footerStyle.linkGray} href={"/"}>
              Contact Us
            </Link>
          </div>
          {/* <button
            className={`${styles.hide_button}`}
            onClick={() => {
              setIsSitemapOpen((prev) => !prev);
            }}
          >
            sitemap
          </button> */}
          {/* <div className={`${styles.hide_site_map_card}  p-0 `}>
            {isSitemapOpen && <NavigationCard />}
          </div> */}
        </div>
      </div>
    </div>
  );
}
