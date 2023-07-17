"use client";
import React from "react";
import styles from "@/styles/carousel.module.scss";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
export default function MyCarousel() {
  const mountains =
    "https://www.adani.com/-/media/Project/MangaloreAirport/Traveller/Home/NewBanners/Mangaluru--Gateway-to-Goodness-min.jpg";
  const mountains2 =
    "https://www.adani.com/-/media/Project/MangaloreAirport/Home/Gateway-to-goodness-min.webp";

  const images = [
    {
      landscapeImage:
        "https://c4.wallpaperflare.com/wallpaper/105/484/965/towards-the-sunset-white-airplane-wallpaper-preview.jpg",
      portraitImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ43J2C7DiSwS8lXqvLNQxRpmlfkbG_3aOrplrjUWJLbXyeqkgxenCnyJApkYfHpy1GihY&usqp=CAU",
    },
    {
      landscapeImage:
        "https://english.cdn.zeenews.com/sites/default/files/2023/02/27/1160016-shivamogga-airport.jpg",
      portraitImage:
        "https://gumlet.assettype.com/bloombergquint/2023-02/a7f30d86-7edf-4fb3-a771-61d479c191cf/Fp9iFz_WYAE5JcL.jpg",
    },
    {
      landscapeImage:
        "https://e1.pxfuel.com/desktop-wallpaper/660/631/desktop-wallpaper-12-grand-waterfalls-in-karnataka-that-will-leave-you-in-awe-of-nature-jog-falls.jpg",
      portraitImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Jog_Falls_2k21.jpg/1200px-Jog_Falls_2k21.jpg",
    },
  ];

  return (
    <Carousel
      autoPlay={true}
      emulateTouch={true}
      infiniteLoop={true}
      interval={6000}
      dynamicHeight={true}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      // className={styles.carouselImageView}
    >
      {images.map((imageItem, key) => {
        return (
          <div
            style={{
              marginBottom: "14ch",
              overflow: "hidden",
            }}
            key={key}
            // className={styles.carouselImageView}
          >
            <picture>
              <source
                quality={100}
                media="(min-width:765px)"
                srcSet={imageItem.landscapeImage}
              />
              <source
                quality={100}
                media="(max-width:765px)"
                srcSet={imageItem.portraitImage}
                // style={{ maxHeight: "100vh", height: "10px" }}
              />
              <img
                quality={100}
                alt="Flowers"
                className={`img-fluid ${styles.carouselImageView}`}
                // style={{ objectFit: "cover", width: "100%" }}
              />
            </picture>
          </div>
        );
      })}
    </Carousel>
  );
}
