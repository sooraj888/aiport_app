"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavigationCard from "../NavigationCard";

export default function SideMenuOptions({}) {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div>
      <div className="col">
        {/* travellers start */}
        <div
          className={``}
          onClick={() => {
            if (selectedOption == "travellers") {
              setSelectedOption(null);
            } else {
              setSelectedOption("travellers");
            }
          }}
        >
          Travellers
        </div>
        <div
          className={``}
          style={{ display: selectedOption == "travellers" ? "block" : "none" }}
        >
          <div>
            <Link className={""} href={"/flight-status"}>
              Flights
            </Link>
          </div>
          <div>
            <Link className={""} href={"/shop-and-dine"}>
              Shop & Dine
            </Link>
          </div>
          <div>
            <Link className={""} href={"/transport"}>
              Transport
            </Link>
          </div>
          <div>
            <Link className={""} href={"/service"}>
              Airport Services
            </Link>
          </div>
          <div>
            <Link className={""} href={"/passenger-guide"}>
              Passenger Guide
            </Link>
          </div>
          <div>
            <Link className={""} href={"/downloads"}>
              Downloads
            </Link>
          </div>
          <div>
            <Link className={""} href={"/faq"}>
              FAQ's
            </Link>
          </div>
        </div>
        {/* travellers end */}

        {/* business start */}
        <div
          className={``}
          onClick={() => {
            if (selectedOption == "business") {
              setSelectedOption(null);
            } else {
              setSelectedOption("business");
            }
          }}
        >
          Business
        </div>
        <div
          className={``}
          style={{ display: selectedOption == "business" ? "block" : "none" }}
        >
          <div>
            <Link className={""} href={"/flight-status"}>
              Flights
            </Link>
          </div>
          <div>
            <Link className={""} href={"/shop-and-dine"}>
              Shop & Dine
            </Link>
          </div>
          <div>
            <Link className={""} href={"/transport"}>
              Transport
            </Link>
          </div>
          <div>
            <Link className={""} href={"/service"}>
              Airport Services
            </Link>
          </div>
          <div>
            <Link className={""} href={"/passenger-guide"}>
              Passenger Guide
            </Link>
          </div>
          <div>
            <Link className={""} href={"/downloads"}>
              Downloads
            </Link>
          </div>
          <div>
            <Link className={""} href={"/faq"}>
              FAQ's
            </Link>
          </div>
        </div>
        {/* business end */}
        {/* Corporate start */}
        <div
          className={``}
          onClick={() => {
            if (selectedOption == "corporate") {
              setSelectedOption(null);
            } else {
              setSelectedOption("corporate");
            }
          }}
        >
          Corporate
        </div>
        <div
          className={``}
          style={{ display: selectedOption == "corporate" ? "block" : "none" }}
        >
          <div>
            <Link className={""} href={"/flight-status"}>
              Flights
            </Link>
          </div>
          <div>
            <Link className={""} href={"/shop-and-dine"}>
              Shop & Dine
            </Link>
          </div>
          <div>
            <Link className={""} href={"/transport"}>
              Transport
            </Link>
          </div>
          <div>
            <Link className={""} href={"/service"}>
              Airport Services
            </Link>
          </div>
          <div>
            <Link className={""} href={"/passenger-guide"}>
              Passenger Guide
            </Link>
          </div>
          <div>
            <Link className={""} href={"/downloads"}>
              Downloads
            </Link>
          </div>
          <div>
            <Link className={""} href={"/faq"}>
              FAQ's
            </Link>
          </div>
        </div>
        {/* Corporate end */}
      </div>
    </div>
  );
}
