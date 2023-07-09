import Image from "next/image";
// import "../styles/global.module.scss";
import imageStyle from "@/styles/image.module.scss";
import TextImageCard from "@/components/Cards/TextImageCard";
import styles from "@/styles/home.module.scss";
export default function page() {
  const mountains =
    "https://www.adani.com/-/media/Project/MangaloreAirport/Traveller/Home/NewBanners/Mangaluru--Gateway-to-Goodness-min.jpg";

  const Image2 =
    "https://www.adani.com/-/media/Project/MangaloreAirport/Home/Mangalorean/Web/Banner-home-page.jpg?la=en&hash=4E66543B9F9E7D0F7B351563E31B3528";
  const cardData = {
    imageUrl:
      "https://www.adani.com/-/media/Project/Adani/State-wise-regulation/Covid-19-Information_-Web.png",
    title: "Covid-19 Information",
    text: "The global COVID-19 pandemic has had a significant impact on the way we live our lives, including how we travel by air.",
    button: "Know More",
  };

  const cardData2 = {
    imageUrl:
      "https://www.adani.com/-/media/Project/Adani/State-wise-regulation/State-Wise-Regulation_-Web.png",
    title: "State Wise Regulation",
    text: "The global COVID-19 pandemic has had a significant impact on the way we live our lives, including how we travel by air.",
    button: "Know More",
  };
  return (
    <div className=" page " style={{ overflow: "hidden" }}>
      <div
        className={`${styles.imageHeader}`}
        style={{
          // height: "100vh",
          // width: "100vw",
          // marginBottom: "14ch",
          marginBottom: 100,
          position: "relative",
        }}
      >
        <Image
          alt="Mountains"
          src={mountains}
          fill
          quality={100}
          sizes="(min-width: 808px) 50vw, 100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <div
        className={`${styles.image}`}
        style={{
          position: "relative",
        }}
      >
        <Image
          alt="Mountains"
          src={Image2}
          fill
          quality={100}
          sizes="(min-width: 808px) 50vw, 100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div
        className={`${styles.screen} row`}
        style={{
          marginBottom: "10ch",
          marginTop: "10ch",
          // margin: "6ch",
        }}
      >
        <div
          className="col-lg-6"
          style={{
            height: "100%",
            // height: 250,
          }}
        >
          <TextImageCard cardData={cardData} />
        </div>
        <div
          className="col"
          style={{
            height: "100%",

            borderRadius: 2,
            // height: 250,
          }}
        >
          <TextImageCard cardData={cardData2} />
        </div>
      </div>

      <div style={{}}>
        <div
          className={`${styles.screen} ${styles.image}`}
          style={{
            // height: "80vh",
            position: "relative",
            marginBottom: "5ch",
            marginTop: "0ch",
            // backgroundColor: "red",
          }}
        >
          <Image
            alt="Mountains"
            src={
              "https://www.adani.com/-/media/Project/TrivandrumAirport/Indias-Celebration-Starter/WebHomePageBanner.jfif?la=en&hash=648F53F3D8E1FC6CA3367706A53583F6"
            }
            fill
            quality={100}
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
}
