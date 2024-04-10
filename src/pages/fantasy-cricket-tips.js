import React, { useState } from 'react';
import style from "../styles/Style.module.scss"
import useSWR from 'swr';
import NewCard from '../Component/card/NewCard';
import Cardskeleton from '../Component/skeleton/cardskeleton';
import AccordionUsage from '../Component/card/Accodien';
import Accodien from '../Component/card/Accodien';
const fetcher = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
};



const Fantasycrickettip = (props) => {
    const [height, Setheight] = useState(true)

    const data1 = props?.breakingData
    const { data: fetchedData, error } = useSWR(`https://g11fantasy.com/NewsSection/FilterbySubCategory/12`, fetcher, { data1 });

    if (!fetchedData) {
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
        // fetchedData = data1
    }
    return (
        <div className='container'>
            <div className={`${style.Fantasycrickettip} container`} >
                <div className='row' >
                    <div className={`${'col-12'} ${style.box}`} style={{ background: false && "linear-gradient(180deg, rgba(255,255,255,1) 26%, rgba(194, 18, 28, 1) 228%)" }}>
                        <div className='col-11 mt-3 mx-auto' style={{ height: height ? "160px" : "100%", overflow: "hidden" }}>
                            <p className={style.slug}><span>Home</span><span>{">"}</span><span>Fantasy-Cricket-Tips</span></p>
                            <h1>Fantasy Cricket Tips</h1>
                            <p>Welcome to the G11 Prediction where cricket fans transcend from being mere spectators to strategic architects of their own fantasy cricket teams. At Fantasy Cricket Tips, we're here to be your guide, your coach, and your cheerleader throughout your fantasy cricket journey.</p>
                            <p className={style.heading}>Expert Analysis, Strategic Insights</p>
                            <p>Our platform is your gateway to a treasure trove of articles, blogs, and data meticulously crafted to enhance your fantasy cricket experience. With our in-depth match predictions, derived from rigorous analysis of past performances, team dynamics, and player statistics, you'll gain a competitive edge like never before</p>
                            <p>But we don't stop at predictions. We equip you with strategic insights, delving into captaincy picks, budget-friendly options, and everything in between. Our mission is to empower you to craft your dream team with confidence and precision.</p>
                            <p className={style.heading}>Your Ultimate Toolkit For Fantasy Prediction</p>
                            <p>Imagine having access to the ultimate toolkit for fantasy cricket. That's precisely what we offer. Our match previews feature updated playing elevens, cricket news, and pitch reports, providing you with a head start in shaping your winning strategy.</p>
                            <p>Whether you're a seasoned player seeking to dominate the leaderboard or a newcomer looking for some fun, our platform caters to all. We believe in simplicity and accessibility, ensuring that our tips are easy to comprehend and implement. No complex theories, just straightforward advice to help you thrive in fantasy cricket contests.</p>
                            <p className={style.heading}>Maximize Your Chances of Win Big In Fantasy Game</p>
                            <p>In the exhilarating universe of fantasy cricket, every decision matters. That's why our expert guidance coupled with live cricket scores arms you with the tools to make informed decisions and maximize your chances of success.</p>
                            <p>Whether you aspire to claim the top spot or simply enjoy the thrill of the game, g11 Prediction is your trusted companion. With our comprehensive resources and unwavering support, you'll be primed to conquer any challenge that comes your way.</p>
                            <p>Join us on this captivating journey where passion meets strategy, and together, let's redefine the essence of fantasy cricket. Let's embark on a quest where every match is an opportunity, and every decision shapes your destiny. Welcome to g11 Prediction - where fantasy cricket transcends imagination and emerges as reality.</p>
                        </div>
                        <div className='col'><p className={style.LoadMOre} onClick={() => Setheight((height) => !height)}>Read More</p></div>

                    </div>
                </div>
            </div>
            <div className='col-12 mt-2' >
                <div className={style.faqheading}> <p>News</p></div>
                <NewCard  props={fetchedData} link={'/fantasy-cricket-tips'}></NewCard>
            </div>
            <div className='col-12 '>
                <div className={style.faqheading}><p>FAQ’s of Fantasy Cricket Tips</p></div>
                <Accodien></Accodien>
            </div>
        </div>
    );
};

export default Fantasycrickettip;

export async function getStaticProps() {
    try {
        const topNewsRes = await fetch('https://g11fantasy.com/NewsSection/FilterbySubCategory/12');
        const topNews = await topNewsRes.json()
        return {
            props: {
                breakingData: topNews.data,
            },
            revalidate: 60,
        };

    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            props: {
                breakingData: null,
                error: 'Failed to fetch data',
            },
            revalidate: 60 * 5,
        };
    }
}