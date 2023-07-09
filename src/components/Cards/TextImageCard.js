import Image from "next/image";
import Link from "next/link";
import React from "react";
import CardButton from "./CardButton";

export default function TextImageCard({ cardData }) {
  return (
    <div
      style={{
        // border: "1px solid rgba(255,255,255,1)",
        width: "100%",
        height: "100%",
        padding: "1ch",
        justifyContent: "center",
        alignContent: "center",
        display: "flex",

        marginTop: 10,
        overflow: "hidden",
        // marginLeft: 10,
        // marginRight: 100,
      }}
    >
      <div
        className="row"
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          width: "100%",
          height: "100%",
          border: "1px solid rgba(0,0,0,0.2)",
          borderRadius: 5,
        }}
      >
        <div
          className="col-sm-6"
          style={{
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            paddingBottom: 10,
            paddingTop: 20,
          }}
        >
          <div
            className={"d-flex justify-content-center row "}
            style={{
              display: "block",
              overflow: "hidden",
              maxWidth: 400,
              minWidth: 200,
            }}
          >
            <img src={cardData?.imageUrl} className="img-fluid" alt="info" />
          </div>
        </div>

        <div
          className="col container-fluid"
          style={{
            alignItems: "center",
            // justifyContent: "flex-end",
            alignSelf: "center",
            paddingBottom: 10,
            paddingTop: 20,
          }}
        >
          <div>
            <h4>{cardData?.title}</h4>
          </div>
          <div>{cardData?.text}</div>
          <div>
            <CardButton name={cardData.button} path={"/"} />
          </div>
        </div>
      </div>
    </div>
  );
}
