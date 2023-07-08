"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavigationCard from "../NavigationCard";
import { BiSolidChevronDown } from "react-icons/bi";
export default function SideMenuOptions({ closeSideMenue }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const navList = [
    {
      title: "Travellers",
      name: "travellers",
      links: [
        { name: "Flights", path: "/flight-status" },
        { name: "Shop & Dine", path: "/shop-and-dine" },
        { name: "Transport", path: "/transport" },
        { name: "Airport Services", path: "/service" },
        { name: "Passenger Guide", path: "/passenger-guide" },
        { name: "Airport Services", path: "/service" },
        { name: "Downloads", path: "/downloads" },
        { name: "FAQ's", path: "/faq" },
      ],
    },
    {
      title: "Business",
      name: "business",
      links: [
        { name: "Airline Partnership", path: "/business/airline-partnership" },
        { name: "Commercials", path: "/business/commercials" },
        { name: "Cargo", path: "/business/cargo" },
        { name: "Tenders", path: "/business/tenders" },
      ],
    },
    {
      title: "Corporate",
      name: "corporate",
      links: [
        { name: "About Us", path: "/corporate/about-us" },
        { name: "Sustainability", path: "/corporate/sustainability" },
        { name: "Career", path: "/corporate/career" },
        { name: "Contact Us", path: "/corporate/contact-us" },
      ],
    },
  ];

  return (
    <div>
      <div className="col " style={{ cursor: "pointer" }}>
        {navList.map((item) => {
          return (
            <div
              style={{
                paddingBottom: 5,
                paddingTop: 10,
                color: "white",
                fontSize: "1.4rem",
                fontWeight: 600,
              }}
              onClick={() => {
                if (selectedOption == item.name) {
                  setSelectedOption(null);
                } else {
                  setSelectedOption(item.name);
                }
              }}
            >
              <div style={{ marginBottom: 5 }}>
                {item?.title}
                <BiSolidChevronDown style={{ marginLeft: 15 }} />
              </div>

              {selectedOption == item.name && (
                <div>
                  {item.links.map((option) => {
                    return (
                      <div>
                        {
                          <Link
                            href={option.path}
                            onClick={() => {
                              closeSideMenue();
                            }}
                          >
                            {option.name}
                          </Link>
                        }
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
