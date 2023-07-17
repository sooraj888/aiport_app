import React from "react";
import styles from "./gallerySlider.module.scss";

import Image from "../../../public/assets/IMG_20230717_120945_037.jpg";
import Link from "next/link";

export default function GallerySlider() {
  return (
    <div className={`${styles.gallery} `}>
      <div
        className={styles.bottomButton}
        style={{
          position: "absolute",
          left: 0,

          width: "100%",
          display: "flex",
          justifyItems: "center",
          justifyContent: "center",
        }}
      >
        <Link
          style={{
            color: "white",
            textShadow: "3px 2px 10px black",
            textDecoration: "none",
          }}
          href={"/gallery"}
        >
          <h3>{"Go To Gallery ->"}</h3>
        </Link>
      </div>
      <img
        src={Image.src}
        className="img-fluid"
        style={{ objectFit: "cover", border: "1px solid rgba(0,0,0,0.2)" }}
      ></img>
    </div>
  );
}
