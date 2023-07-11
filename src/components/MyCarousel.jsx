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
        "https://www.adani.com/-/media/Project/MangaloreAirport/Traveller/Home/NewBanners/Mangaluru--Gateway-to-Goodness-min.jpg",
      portraitImage:
        "https://www.adani.com/-/media/Project/MangaloreAirport/Home/Gateway-to-goodness-min.webp",
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
      interval={3000}
      dynamicHeight={true}
      // style={{ maxHeight: "100vh" }}
    >
      {images.map((imageItem) => {
        return (
          <div
            style={{
              marginBottom: "14ch",
            }}
            className={styles.carouselImageView}
          >
            <picture>
              <source
                media="(min-width:765px)"
                srcSet={imageItem.landscapeImage}
              />
              <source
                quality={100}
                media="(max-width:765px)"
                srcSet={imageItem.portraitImage}
                style={{ maxHeight: "10vh", height: "10px" }}
              />
              <img
                quality={100}
                alt="Flowers"
                className={`img-fluid ${styles.carouselImageView}`}
                style={{ objectFit: "cover", width: "100%" }}
              />
            </picture>
          </div>
        );
      })}
    </Carousel>
  );
}
