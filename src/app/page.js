import Image from "next/image";
import "../styles/global.module.scss";
import imageStyle from "@/styles/image.module.scss";
export default function page() {
  const mountains =
    "https://www.adani.com/-/media/Project/MangaloreAirport/Traveller/Home/NewBanners/Mangaluru--Envisaging-a-touch-less-travel-min.webp";
  return (
    <div className="bg-white page">
      <div style={{ height: "700px", position: "relative" }}>
        <Image
          alt="Mountains"
          src={mountains}
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          style={{
            // zIndex: -1,
            objectFit: "cover", // cover, contain, none
          }}
        />
      </div>
      <div>agjdsghagsdj</div>
      <div>agjdsghagsdj</div> <div>agjdsghagsdj</div> <div>agjdsghagsdj</div>{" "}
      <div>agjdsghagsdj</div> <div>agjdsghagsdj</div> <div>agjdsghagsdj</div>{" "}
      <div>agjdsghagsdj</div> <div>agjdsghagsdj</div>
    </div>
  );
}
