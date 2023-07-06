import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/variable.module.scss";
import footerStyle from "./footer.module.scss";
import NavigationCard from "./NavigationCard";
import OwnerCard from "./OwnerCard";

export default function Footer() {
  return (
    <div className="container-fluid text-light p-0">
      <div className={`container-fluid p-0 m-0 ${styles.footer_nav}`}>
        <div className={`row  p-0 m-0`}>
          <div
            className={`col-7  container-fluid`}
            style={{ paddingLeft: 100 }}
          >
            <NavigationCard />
          </div>
          <div className={`col container-fluid`}>
            <OwnerCard />
          </div>
        </div>
      </div>
      {/* footer bottom completed */}
      <div className={`${styles.footer_bottom}`}>
        <div className="row p-0 m-0">
          <div className={`col-lg-6`}>© 2020 Adani Group</div>
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
