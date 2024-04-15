import React, { useState } from "react";
import Link from "next/link";
import axios from "axios"
import Head from 'next/head';
import Senglepage from "../../Component/MatchPriview/Senglepage";
import Accordion from '../../Component/card/Accodionitem';
import Seo from "../../Component/Seo/Seo";
import useSWR from 'swr';
import style from "../../styles/Style.module.scss"
// import Homeskeleton from "../../Component/skeleton/Homeskeleton";
import Cardskeleton from "../../Component/skeleton/cardskeleton";
const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};


export default function UpdateMatch({ initialData }) {
  const { data: fetchedData, error } = useSWR('/api/utils/latestmatch', fetcher,);
  const [height, Setheight] = useState(true)

  let data = fetchedData;

  // if (error) return <div>Error loading data</div>;
  if (!data) {
    return (
      <div className='container '>
        <div className={style.Breaking_new}>
          <div className={style.Breaking_newCardWrapper}>
            {
              [1, 5, 6, 6, 6, 6, 6, 6, 6, 6].map((e, i) => {
                return < Cardskeleton key={i} />
              })
            }
          </div>
        </div>

      </div>
    )
  }
  else {
    if (Boolean(error)) {

      data = initialData
    }
  }
  return (
    <>
      <Seo
        image={"https://www.g11fantasy.com/image/images/download/media/Static/favicon.jpg"}
        title={"Today Cricket Match Prediction & Dream11 Prediction - G11 prediction "}
        description={"G11 Prediction - Your trusted source for today's match prediction, Dream11  prediction, and expert updates. Get 100% free betting tips & accurate match predictions now! "}
        keywords={`dream 11 team today,cricket prediction,today dream 11 team,cricket betting tips,dream 11 prediction,dream11 team today,dream 11 today team,best team for dream11 today match,who will win today ipl match,today ipl match prediction,
                dream11 today team,dream11 update,dream11 prediction,today dream11 team,
                dream11 prediction today match,who will win today match,who win today ipl match,
                my 11 circle team prediction today,cricket tips,online cricket betting tips,cricket betting tips free,cricket jackpot tips,today cricket match prediction tips,Today Live Toss prediction,cricket match prediction,free cricket match prediction,who will win today  match,fantasy cricket prediction,best prediction site,best prediction website`}
        canonical={"https://g11prediction.com/cricket-match-predictions/"}
      ></Seo>
      <div className={`${style.Fantasycrickettip} container`}>
        <div className="row">
          <div
            className={`${"col-12"} ${style.box}`}
            style={{
              background:
                false &&
                "linear-gradient(180deg, rgba(255,255,255,1) 26%, rgba(194, 18, 28, 1) 228%)",
            }}
          >
            <div
              className="col-11 mt-3 mx-auto"
              style={{ overflow: "hidden" }}
            >
              <p className={style.slug}>
                <span>Home</span>
                <span>{">"}</span>
                <span>cricket match predictions</span>
              </p>
              <h1>{`Today Match Predictions - Cricket Betting Tips from Experts (100% Free)`}</h1>
              <p>
                {` At g11prediction.com, we understand the thrill and excitement of fantasy cricket, and we're here to enhance your experience every step of the way towards today match predictions. Our team of experts meticulously analyzes each match to provide you with accurate predictions and valuable insights that can make all the difference in your fantasy cricket journey.`}
              </p>
              <div style={{ display: height ? "none" : "block" }}>
                <p>
                  {` Whether you're looking for the best Dream11 prediction for today's match or seeking strategic advice to craft your winning fantasy cricket team, we've got the tools and expertise to help you succeed. From detailed Playing XI updates to in-depth Pitch Reports and timely Injury Updates, we cover all the bases to ensure that you have everything you need to excel in your fantasy leagues.`}
                </p>
                <p>
                  {` With our comprehensive coverage of all cricket formats, including the pulsating action of the IPL, the excitement of World Cups, and the drama of T20s, you'll never miss a beat. Whether you're a fan of Men's Cricket, Women's Cricket, or International Leagues, we've got you covered with the latest news, analysis, and predictions.`}
                </p>

                <p>
                  {` Our commitment to providing high-quality, reliable information sets us apart as a trusted source for cricket enthusiasts worldwide. So, whether you're a casual player looking to have some fun or a serious competitor aiming for the top spot, g11prediction.com is your go-to destination for all things fantasy cricket. Join us today and take your fantasy cricket game to the next level!`}
                </p>
              </div>
            </div>
            <div className="col justify-content-end d-flex">
              <p
                className={style.LoadMOre}
                onClick={() => Setheight((height) => !height)}
              >
                Read {height ? "More" : 'Less'}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Senglepage props={data} ></Senglepage>
      <div className="container">
        <div className='row'>
          <div className='col-12 '>
            <div className={style.faqheading}><p>{`Today Match Prediction FAQ’s Of G11 Prediction`}</p></div>
            <Accordion
              title="How reliable are your match predictions?"
              content=" <p>   Our match predictions are based on thorough analysis, statistical data, and expert insights, making them highly reliable. While we strive for accuracy, please remember that cricket is unpredictable, and outcomes may vary.  </p>"
            />
            <Accordion
              title=" Do you provide predictions for all cricket formats?
                        "
              content=" <p>   Yes, we cover all cricket formats, including IPL, World Cup, T20 leagues, Men's Cricket, Women's Cricket, and International Leagues. You can rely on us for predictions and tips for various matches across different formats. </p> "
            />
            <Accordion
              title="How can I use your predictions to enhance my fantasy cricket gameplay?
                        "
              content=" <p> Our predictions provide valuable insights into player performances, pitch conditions, and team strategies, helping you make informed decisions while selecting your fantasy cricket team. By incorporating our tips into your strategy, you can increase your chances of success.  </p> "
            />
            <Accordion
              title=" Are your predictions suitable for all fantasy cricket platforms?
                        "
              content=" <p>  Yes, our predictions are versatile and can be applied to popular fantasy cricket platforms like Dream11, My11Circle, MyFab11, and many others. Whether you're playing on a specific platform or multiple platforms, our tips are designed to help you excel.

                        </p>"
            />
            <Accordion
              title=" A How frequently are your predictions updated? "
              content=" <p>   We strive to keep our predictions up-to-date with the latest information available. Our team continuously monitors match developments, player form, and other factors to ensure that our predictions are as accurate and relevant as possible. </p>"
            />
          </div>
        </div>
      </div>
    </>

  );
}



export async function getServerSideProps() {
  try {
    const [topNewsRes] = await Promise.all([
      fetch('https://grand11.in/g11/all_matches_api.php'),
    ]);

    const [topNews] = await Promise.all([
      topNewsRes.json(),
    ]);


    const responseData = {
      breaking: topNews,
    };
    return {
      props: {
        initialData: responseData.breaking.reverse(),
      },
    };

  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        initialData: null,
        error: 'Failed to fetch data',
      },
    };
  }
}

