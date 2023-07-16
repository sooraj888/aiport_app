import styles from "./impotentNoticeCard.module.scss";
import { BiSolidRightArrow } from "react-icons/bi";
export default function ImpotentNoticeCard() {
  const text =
    "A team of experts from Airports Authority of India (AAI) visited the two identified suitable sites, at Sogane near Shimoga and Nagarabavi near Ayanur on 4 April 2006. Of the two sites inspected by the AAI team, the one at Sogane was found most suitable, due to its wind direction and velocity conditions. The only concern was that the land was uneven and needed to be levelled. The other site near Ayanur was found inadequate in width for the runway of the proposed airport";
  const text2 =
    "Nineteen companies had shown interest in developing the airport when the Government had called for an Expression of Interest (EoI) to develop airports in Kalaburagi, Bijapur and Shivamogga.[6] The project was awarded to a consortium of Maytas Infra Ltd.[7]), NCC Infrastructure Holdings Ltd. (NCC) and VIE India Project Development and Holding, on 15 November 2007, on a BOT basis. Concession period was to be 30 years, to be extended for a further period of 30 years by Mutual Agreement.";
  const text3 =
    "Shivamogga Airport Developers Pvt Ltd (SADPL), a Special Purpose Company, was established to sign the Project Development Agreement (PDA) with the Infrastructure Development Department (IDD) of the Government of Karnataka. The Shareholding pattern of Maytas Infra, NCC and VIE was 37%, 37% and 26% respectively in SADPL. The project development agreement was signed on 2 April 2008";
  const text4 =
    "The foundation stone for the Phase I of construction was laid by former Chief Minister of Karnataka, B. S. Yeddyurappa, on 20 June 2008.[10] Due to a change in the project shareholding ratio, a Supplementary Development Agreement was signed on 21 December 2010. Bengaluru-based company, Regional Airport-Holdings International Limited (RAHI), acquired 22% in the project and overall management and financial control";
  const data = [
    { text: text },
    { text: text2 },
    { text: text3 },
    { text: text4 },
  ];

  return (
    <div className={`${styles.screenIN}`}>
      <div className={`${styles.heading}`}>
        <h5 style={{ padding: 0, margin: 0 }}>Important Notices</h5>
      </div>
      <div className={`${styles.card}`}>
        {data?.map((item, key) => {
          return (
            <div key={key} style={{ paddingBottom: 10 }}>
              <BiSolidRightArrow
                size={15}
                style={{ marginBottom: 5, marginRight: 10 }}
              />
              {item?.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}
