import styles from "./impotentNoticeCard.module.scss";
import { BiSolidRightArrow } from "react-icons/bi";
export default function ImpotentNoticeCard() {
  const text =
    "Jun-2023. India's MP for Shimoga Bookanakere Yeddyurappa Raghavendra reported Shimoga Airport will launch scheduled services on 11-Aug-2023, commencing with IndiGo launching Bangalore-Shimoga service. ";
  const text2 =
    "27-Feb-2023. India's Prime Minister Narendra Modi announced he inaugurated Shimoga Airport on 27-Feb-2023.";
  const text3 =
    "26-Feb-2023. India's Directorate General of Civil Aviation (DGCA) awarded an aerodrome licence to Shimoga Airport, authorising the airport to commence handling scheduled services.";
  const text4 =
    "Jan-2023. Karnataka's former Chief Minister B S Yediyurappa reported works to develop Shimoga Airport have been completed and India's Prime Minister Narendra Modi is tentatively scheduled to inaugurate the airport on 27-Feb-2023.";
  const data = [
    { text: text },
    { text: text2 },
    { text: text3 },
    { text: text4 },
    {
      text: "Apr-2022. Karnataka's former Chief Minister B S Yediyurappa reported works to develop Shimoga Airport are on track to be completed by Dec-2022.",
    },
    {
      text: "Feb-2022. India's Parliament member Bookanakere Yeddyurappa Raghavendra said Shivamogga Airport runway construction is expected to be completed in May/Jun-2022 and terminal construction in Jul-2022. Testing of the new airport facilities will be completed by the end of 2022. ",
    },
    {
      text: "Jun-2021. Karnataka's Chief Minister B S Yediyurappa reported works to develop Shimoga Airport are on track to be completed by Jun-2022.",
    },
    {
      text: "Mar-2021. Karnataka's Chief Minister B S Yediyurappa announced the state government allocated INR3.8 billion (USD51.9 million) to the Shivamogga Airport development project under its FY2021/2022 budget.",
    },
    {
      text: "Jun-2020. Karnataka's Chief Minister B S Yediyurappa reportedly laid the foundation stone for the Shivamogga Airport project on 15-Jun-2020. The project will require an estimated investment of INR2.2 billion (USD29 million) and the airport will be developed on a 662.4 acre site.",
    },
    {
      text: "Feb-2020. India's Minister of Civil Aviation Hardeep Singh Puri reportedly informed the Lok Sabha that the Ministry of Civil Aviation (MoCA) granted in principle approval for the development of Bangalore Vijayapura Airport, Shimoga Airport and Hassan Airport in Karnataka. Karnataka's Government will be required to finance the three airport development projects.",
    },
    {
      text: "Dec-2019. Karnataka's Chief Minister Bookanakere Siddalingappa Yediyurappa directed local government to expedite work at Shimoga Airport. Mr Yediyurappa promised additional funds for the INR400 million (USD5.6 million) project on the condition that local government will be held responsible if the project is not completed within six months.",
    },

    {
      text: "Aug-2019. Karnataka's Chief Minister B S Yediyurappa reported the state government plans to allocate INR500 million (USD7 million) for the resumption of works to develop Shimoga Airport in the near future.",
    },
    {
      text: "Oct-2016. Shimoga Airport's construction project received no bids aimed to attract investors to develop the airport. ",
    },
    {
      text: "Apr-2016. Karnataka's Government plans to issue a tender for the resumption of the Shimoga Airport project. The government aims to resume construction under a public-private partnership. The contract was originally awarded in Dec-2010 and cancelled in Jan-2015 after construction deadlines were not met. Remaining works include a compound wall, water facilities and runway construction.",
    },
    {
      text: "Jul-2015. India's Minister of State for Civil Aviation Dr Mahesh Sharma confirmed the government granted in principle approval for the development of 13 new airports at cities including Shimoga. The estimated project cost is INR389.1 million (USD6.1 million) in the initial phase.",
    },
    {
      text: "16-Jun-2015. Airports Authority of India (AAI) inspected the Shimoga Airport site in response to a proposal by Karnataka's Government for AAI to take over the project. The project was previously allocated to Regional Airport Holdings International, but work was suspended in 2013. Construction of the terminal and air traffic control facilities is yet to commence and 1740m of the 5300m runway is complete.",
    },
    {
      text: "08-Jun-2015. Karnataka's Government plans to issue a new tender for the Shimoga Airport project.",
    },
    {
      text: "Oct-2014. The Shimoga Airport project remains suspended due a dispute between partners in Regional Airport Holdings International (RAHI), the JV created to undertake the development. Some terrain levelling and runway construction works were reportedly completed before the project was suspended. There has been no progress on the project since Airports Authority of India (AAI) recommended removal or relocation of factory chimneys and power lines in the area following an inspection in Apr-2013. The project was reportedly launched in 2007 and construction commenced in Jun-2008.",
    },
    {
      text: "Jun-2014. The Minister of State for Civil Aviation G M Siddeshwar said the country's Ministry of Civil Aviation requested the Karnataka Government transfer the Shimoga Airport project to the Airports Authority of India (AAI) for completion. The project has been suspended due to conflicts with joint venture partners Rahi Aviation Holdings.",
    },
    {
      text: "Feb-2012. The Directorate General of Civil Aviation (DGCA) directed Shimoga city to remove a number of high-rise buildings and power lines before the newly constructed Shimoga Airport can commence operations. The cost of the removal is expected to be INR150-200 million (USD3.04-4.06 million) and will be funded by the Karnataka state government.",
    },
    {
      text: "Mar-2011. The airport project has been designated a PDA between State Government and Shimoga Airport Development Limited (SADL), entered into on 02-Apr-2008. Land to the extent of 662.38 acres has been acquired. Necessary clearances from Ministry of Environment and Forests have been obtained. The work on the project has been started in accordance with the Master Plan.",
    },
    {
      text: "Apr-2010. Karnataka Chief Minister, BS Yeddyurappa, announced construction of a proposed airport in Shimoga will commence on 15-May-2010. The airport will be located 10km from Sogane village.",
    },
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
