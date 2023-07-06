import Link from "next/link";
import footerStyle from "./footer.module.scss";
export default function NavigationCard() {
  //

  return (
    <div className="container ">
      <div className="row" style={{ textAlign: "left", color: "black" }}>
        <div className="col">
          <div className={`${footerStyle.linkTitle}`}>Travellers</div>
          <div className={`${footerStyle.container}`}>
            <div>
              <Link className={footerStyle.linkGray} href={"/flight-status"}>
                Flights
              </Link>
            </div>
            <div>
              <Link className={footerStyle.linkGray} href={"/shop-and-dine"}>
                Shop & Dine
              </Link>
            </div>
            <div>
              <Link className={footerStyle.linkGray} href={"/transport"}>
                Transport
              </Link>
            </div>
            <div>
              <Link className={footerStyle.linkGray} href={"/service"}>
                Airport Services
              </Link>
            </div>
            <div>
              <Link className={footerStyle.linkGray} href={"/passenger-guide"}>
                Passenger Guide
              </Link>
            </div>
            <div>
              <Link className={footerStyle.linkGray} href={"/downloads"}>
                Downloads
              </Link>
            </div>
            <div>
              <Link className={footerStyle.linkGray} href={"/faq"}>
                FAQ's
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`${footerStyle.linkTitle}`}>Business</div>
          <div className={`${footerStyle.container}`}>
            <div>
              <Link
                className={footerStyle.linkGray}
                href={"/business/airline-partnership"}
              >
                Airline Partnership
              </Link>
            </div>
            <div>
              <Link
                className={footerStyle.linkGray}
                href={"/business/commercials"}
              >
                Commercials
              </Link>
            </div>
            <div>
              <Link className={footerStyle.linkGray} href={"/business/cargo"}>
                Cargo
              </Link>
            </div>
            <div>
              <Link className={footerStyle.linkGray} href={"/business/tenders"}>
                Tenders
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`${footerStyle.linkTitle}`}>Corporate</div>
          <div className={`${footerStyle.container}`}>
            <div>
              <Link
                className={footerStyle.linkGray}
                href={"/corporate/about-us"}
              >
                About Us
              </Link>
            </div>
            <div>
              <Link
                className={footerStyle.linkGray}
                href={"/corporate/sustainability"}
              >
                Sustainability
              </Link>
            </div>
            <div>
              <Link className={footerStyle.linkGray} href={"/corporate/career"}>
                Career
              </Link>
            </div>
            <div>
              <Link
                className={footerStyle.linkGray}
                href={"/corporate/contact-us"}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
