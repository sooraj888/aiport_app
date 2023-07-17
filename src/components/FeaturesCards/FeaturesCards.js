"use client";
import React from "react";
import styles from "./featuresCard.module.scss";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useRouter } from "next/navigation";
import FOODIMAGE from "../../../public/assets/food.jpg";
import SERVICE_IMAGE from "../../../public/assets/service.jpg";
import FLIGHT_TOWER from "../../../public/assets/flights.jpg";

import GUIDE from "../../../public/assets/guide.jpg";
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
    href: "flight-status",
    title: "Flights",
    imageSrc: FLIGHT_TOWER.src,
  },
  {
    title: "Dine Out",
    imageSrc: FOODIMAGE.src,
  },
  {
    title: "Airport Services",
    imageSrc: SERVICE_IMAGE.src,
  },
  {
    title: "Passenger Guide",
    imageSrc: GUIDE.src,
  },
];

const newArr = new Array(5).fill(arr?.[0]);

export default function FeaturesCards() {
  const router = useRouter();
  return (
    <div className={`${styles.screen}`}>
      <Carousel
        responsive={responsive}
        style={{ zIndex: "1 !important" }}
        containerClass={`${styles.carouselZIndex}`}
      >
        {arr.map((item, key) => {
          return (
            <div
              onClick={() => {
                if (item.href) {
                  router.push(item.href);
                }
              }}
              className={`${styles.carouselCard} img-fluid`}
              style={{
                backgroundImage: `url(${item.imageSrc})`,
                display: "flex",
                cursor: item?.href ? "pointer" : "default",
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
                <h4 style={{ textShadow: "5px 5px 5px black" }}>
                  {item.title}
                </h4>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
