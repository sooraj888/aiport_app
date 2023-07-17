import ContainerPage from "@/components/ContainerPage";
import { headerMainRef } from "@/components/sideBar/SideMenu";

import styles from "@/styles/global.module.scss";

import IMAGE from "../../../public/assets/IMG_20230717_120931_915.jpg";
import IMAGE2 from "../../../public/assets/IMG_20230717_120931_918.jpg";
import IMAGE3 from "../../../public/assets/IMG_20230717_120931_958.jpg";
import IMAGE4 from "../../../public/assets/IMG_20230717_120932_173.jpg";
import IMAGE5 from "../../../public/assets/IMG_20230717_120932_183.jpg";
import IMAGE6 from "../../../public/assets/IMG_20230717_120932_204.jpg";
import IMAGE7 from "../../../public/assets/IMG_20230717_120945_037.jpg";
import IMAGE8 from "../../../public/assets/IMG_20230717_120945_038.jpg";
import IMAGE9 from "../../../public/assets/IMG_20230717_120945_141.jpg";
import IMAGE10 from "../../../public/assets/IMG_20230717_120945_304.jpg";
import IMAGE11 from "../../../public/assets/IMG_20230717_120945_323.jpg";
import IMAGE12 from "../../../public/assets/IMG_20230717_120945_482.jpg";
import IMAGE13 from "../../../public/assets/IMG_20230717_120945_519.jpg";
import IMAGE14 from "../../../public/assets/IMG_20230717_120945_598.jpg";
import IMAGE1 from "../../../public/assets/IMG_20230717_120945_935.jpg";
import IMAGE15 from "../../../public/assets/IMG_20230717_120945_728.jpg";

// import second from 'first'

export default function page() {
  const imageData = [
    IMAGE1,
    IMAGE14,
    IMAGE8,
    IMAGE7,

    IMAGE,
    IMAGE6,

    IMAGE4,

    IMAGE5,
    IMAGE2,
    IMAGE3,
    // IMAGE9,
    IMAGE10,
    IMAGE11,

    IMAGE15,
    IMAGE12,

    // IMAGE15,
  ];
  return (
    <div className={`${styles.pageWithPadding}`}>
      <ContainerPage>
        <div
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {imageData.map((item, key) => {
            return (
              <img
                key={key}
                quality={100}
                alt="logo"
                src={item.src}
                style={{
                  objectFit: "cover",

                  border: "1px solid rgba(0,0,0,0.2)",
                }}
                className={`img-fluid ${styles.galleyImgMargin}`}
              />
            );
          })}
        </div>
      </ContainerPage>
    </div>
  );
}
