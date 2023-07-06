"use client";

import Image from "next/image";
import styles from "@/styles/nav_list_button.module.scss";
import NavigationCard from "./NavigationCard";
import { useState } from "react";

export default function OwnerCard() {
  const [isSitemapOpen, setIsSitemapOpen] = useState(false);
  return (
    <div
      className={`text-center container-fluid `}
      // style={{ paddingLeft: "10%", paddingRight: "10%" }}
    >
      <div className={"d-flex justify-content-center row"}>
        <div style={{ maxWidth: 600, color: "black" }}>
          <div
            style={{
              position: "relative",
              display: "block",
              overflow: "hidden",
            }}
          >
            <Image
              alt="Mountains"
              src={
                "https://www.adani.com/-/media/EDEB0E192FB0482A87B6D53B412E8BF0.ashx"
              }
              width={300}
              height={100}
            />
          </div>
          <div style={{ margin: 20 }}>
            Mangaluru International Airport Bajpe Main Rd, Kenjar HC, Karnataka
            574142
          </div>
          <button
            className={`${styles.hide_button}`}
            onClick={() => {
              setIsSitemapOpen((prev) => !prev);
            }}
          >
            sitemap
          </button>
          <div className={`${styles.hide_site_map_card}`}>
            {isSitemapOpen && <NavigationCard />}
          </div>
        </div>
      </div>
    </div>
  );
}
