import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/variable.module.scss";
import footerStyle from "./footer.module.scss";
import NavigationCard from "./NavigationCard";
import OwnerCard from "./OwnerCard";

export default function Footer() {
  return (
    <div className="container-fluid text-light p-0">
      {/* <div
        className="row"
        style={{ color: "green", backgroundColor: "red", height: "35px" }}
      >
        <div className="col-6 d-flex justify-content-center align-items-center">
          About us
        </div>
        <div className="col-6 d-flex justify-content-center align-items-center">
          Contact us
        </div>
      </div> */}
      <div className="d-flex justify-content-center align-items-center br-dark">
        <div
          className={footerStyle.showMap}
          style={{
            width: 400,
            marginTop: 10,
            height: 300,
            marginLeft: 10,
            marginRight: 10,
            overflow: "hidden",
          }}
        >
          <div className={footerStyle.mapouter}>
            <div className={footerStyle.gmap_canvas}>
              <iframe
                className={footerStyle.gmap_iframe}
                width="100%"
                src="https://maps.google.com/maps?width=300&amp;height=300&amp;hl=en&amp;q=shimoga airport&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
              <a href="https://connectionsgame.org/">Connections NYT</a>
            </div>
          </div>
        </div>
      </div>

      <div className={`container-fluid p-0 m-0 ${styles.footer_nav}`}>
        <div className={`row  p-0 m-0`}>
          <div
            className={`col-7  container-fluid`}
            style={{ paddingLeft: 100 }}
          >
            <div
              style={{
                width: 400,
                marginTop: 10,
                height: 300,
                marginLeft: 10,
                marginRight: 10,

                overflow: "hidden",
              }}
            >
              <div className={footerStyle.mapouter}>
                <div className={footerStyle.gmap_canvas}>
                  <iframe
                    className={footerStyle.gmap_iframe}
                    width="100%"
                    // frameBorder="0"
                    // scrolling="no"
                    // marginHeight="0"
                    // marginWidth="0"
                    src="https://maps.google.com/maps?width=300&amp;height=300&amp;hl=en&amp;q=shimoga airport&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe>
                  <a href="https://connectionsgame.org/">Connections NYT</a>
                </div>
              </div>
            </div>
            {/* <NavigationCard /> */}
          </div>
          <div className={`col container-fluid`}>
            <OwnerCard />
          </div>
        </div>
      </div>
      {/* footer bottom completed */}
      <div className={`${styles.footer_bottom}`}>
        <div className="row p-0 m-0">
          <div className={`col-lg-6`}>© 2023 Government of Karnataka</div>
          <div className={`col`}>
            <div className={`row`}>
              <div className={`col`}>
                <nobr>
                  <Link className={footerStyle.link} href={"/privacy-policy"}>
                    Privacy Policy
                  </Link>
                </nobr>
              </div>
              <div className={`col`}>
                <nobr>
                  <Link className={footerStyle.link} href={"/disclaimer"}>
                    Legal Disclaimer
                  </Link>
                </nobr>
              </div>
              <div className={`col`}>
                <nobr>
                  <Link
                    className={footerStyle.link}
                    href={"/terms-and-conditions"}
                  >
                    Terms & Conditions
                  </Link>
                </nobr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
