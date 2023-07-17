"use client";
import React from "react";
import styles from "./featuresCard.module.scss";

// import "react-multi-carousel/lib/styles.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const arr = [
  {
    title: "Dine",
    imageSrc:
      "https://www.adani.com/-/media/Project/MangaloreAirport/Home/Dine.jpg?h=416&la=en&w=290&hash=52B8F56C519482CF80511500B08AF69F.png",
  },
  {
    title: "Airport Service",
    imageSrc:
      "https://www.adani.com/-/media/Project/MangaloreAirport/Home/Airport-Services.jpg?h=416&la=en&w=290&hash=9A672A6E10465E0AA902BBB529A45AF5.png",
  },
  {
    title: "Passenger Guid",
    imageSrc:
      "https://www.adani.com/-/media/Project/MangaloreAirport/Home/departure.jpg?h=416&la=en&w=290&hash=1B3A6A48F48C1A9D6DB83A34DD331746.png",
  },
];

const newArr = new Array(5).fill(arr?.[0]);

export default function FeaturesCards() {
  return (
    <div className={`${styles.screen}`}>
      <Carousel responsive={responsive}>
        {arr.map((item, key) => {
          return (
            <div
              className={`${styles.carouselCard} img-fluid`}
              style={{
                backgroundImage: `url(${item.imageSrc})`,
                display: "flex",
              }}
              key={key}
            >
              <div
                style={{
                  //   justifySelf: "end",
                  alignSelf: "flex-end",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  textAlign: "center",
                  color: "white",
                  width: "100%",
                  //   backgroundColor: "green",
                }}
              >
                <div style={{ width: 20, height: 100 }}></div>
                <h4>{item.title}</h4>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
