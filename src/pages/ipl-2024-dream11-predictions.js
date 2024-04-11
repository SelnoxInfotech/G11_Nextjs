import useSWR from 'swr';
import React,{ useState } from 'react'
import style from '../styles/Style.module.scss'
import Seo from '../Component/Seo/Seo';
import Cardskeleton from '../Component/skeleton/cardskeleton'
import { useRouter } from 'next/router'
// import Newcard from "../Component/card/NewCard"
import dynamic from 'next/dynamic'

const NewCard = dynamic(() => import('../Component/card/NewCard'), { ssr: true,  });

const Accodien = dynamic(() => import('../Component/card/Accodien'), { ssr: true,  });

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};



const Ipl2024dream11predictions = (props) => {
  const router = useRouter()
  const [height, Setheight] = useState(true)
const faq=[
  {
    question:"Which is the best Dream11 prediction site?    ",
    answer:'At g11 Prediction, we pride ourselves on being one of the top Dream11 prediction sites. Our expert analysis and accurate predictions set us apart, helping fantasy cricket enthusiasts make informed decisions for their Dream11 teams.',
  },
  {
    question:"How can I predict my Dream11?",
    answer:'Predicting your Dream11 team requires a combination of factors such as player form, pitch conditions, team dynamics, and match insights. Our platform offers comprehensive analysis and strategic tips to guide you in making the best possible predictions for your Dream11 team.',
  },
  {
    question:"How to win Dream11 1st rank?",
    answer:'Winning the 1st rank on Dream11 requires strategic planning, thorough analysis, and a bit of luck. Our platform provides expert insights, player statistics, and match previews to help you build winning strategies for your Dream11 team, increasing your chances of achieving the coveted 1st rank.',
  },
  {
    question:"What strategies can I use to improve my Dream11 performance? ",
    answer:'To enhance your Dream11 performance, consider factors such as player consistency, recent form, pitch conditions, and match dynamics. Our platform offers valuable tips and strategies to help you make informed decisions and maximize your chances of success in Dream11 contests.',
  },
]
  const data1 = props?.breakingData?.data
  const { data: fetchedData, error } = useSWR(`https://g11fantasy.com/NewsSection/FilterbySubCategory/11`,fetcher,{ data1 } );




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

  return (
    <>
      <Seo
        image={"https://www.g11fantasy.com/image/images/download/media/Static/favicon.jpg"}
        title="Dream11 Prediction & Today Match prediction for IPL 2024"
        description={"Get expert Dream11 predictions and today match prediction for IPL 2024. Stay ahead with our comprehensive analysis, player insights, and strategic tips to build winning teams"}
        keywords={"Breaking News, Cricket news, G11 Fantasy Cricket Prediction, Dream11 prediction, Cricket News Today, Live Cricket News, Online Cricket News, Cricket News Today Match, world cup 2023 cricket news,"}
        canonical={"https://g11prediction.com/ipl-2024-dream11-predictions/"}
      />
      <div className='container'>
           <div className={`${style.Fantasycrickettip} `} >
                <div className='row' >
                    <div className={`${'col-12'} ${style.box}`} style={{ background: false && "linear-gradient(180deg, rgba(255,255,255,1) 26%, rgba(194, 18, 28, 1) 228%)" }}>
                        <div className='col-11 mt-3 mx-auto' style={{ overflow: "hidden" }}>
                            <p className={style.slug}><span>Home</span><span>{">"}</span><span>ipl-2024-dream11-predictions</span></p>
                            <h1>Dream11 Prediction for IPL 2024</h1>
                            <p>{`Welcome to our Dream11 Prediction hub, where cricket fans look into the exhilarating world of IPL 2024 dream11 cricket prediction. At g11 Prediction, we're dedicated to providing you with expert insights, today match predictions, and winning strategies to elevate your Dream11 experience to new heights.`}</p>
                            <div style={{ display: height ? "none" : "block",}}>
                            <p className={style.heading}>Get Success In Dream11</p>

                            <p>{`Dream11 Prediction for IPL 2024 isn't just about picking players; it's about crafting winning strategies backed by thorough analysis and strategic thinking. Our platform serves as your ultimate companion, offering comprehensive analysis, player insights, and strategic tips to help you build winning teams.`}</p>
                        
                            <p className={style.heading}>{`Expert Analysis, Strategic Tips For Every Dream11 Cricket Match`}</p>
                            <p>{`Our team of experts meticulously analyzes every aspect of the game, from player performance to pitch conditions, to deliver accurate predictions and valuable insights. Whether you're aiming for the top spot in your fantasy league or simply looking to enhance your cricket knowledge, our expert analysis will guide you every step of the way.`}</p>
                            <p className={style.heading}>Stay Ahead in the Game</p>
                            <p>{`With our Dream11 predictions, you'll stay ahead of the competition by making informed decisions based on real-time analysis and strategic tips. From probable XI selections to player stats and match previews, our comprehensive approach ensures that you're well-equipped to navigate the dynamic world of IPL 2024 fantasy cricket.`}</p>
                            <p className={style.heading}>Join Us on the Journey
</p>
                            <p>{`Whether you're a pro or just starting out, g11 Prediction is your ultimate Dream11 destination. Join us as we decode IPL 2024, empowering you with expert analysis to conquer fantasy cricket.`}</p>
                            </div>
                        </div>
                        <div className='col justify-content-end d-flex'><p className={style.LoadMOre} onClick={() => Setheight((height) => !height)}>Read More</p></div>
                    </div>
                </div>
            </div>
        <div className='row'>
          {/* <h1 className={style.newcardwrappermainHeading}> Dream11 Prediction for IPL 2024</h1> */}
          {/* <p style={{color:"#c2121c" , display:"flex" ,gap:"15px"}}><span style={{cursor: "pointer"  }} onClick={() => router.push("/")}>Home</span>{">"}<span>{"Dream11 Prediction for IPL 2024"}</span></p> */}
          {/* <div className={style.newcardwrapper}>
            {
              fetchedData.data.map((items, index) => {


                return <div className={style.newcard} key={index}>
                  <div className={`${"col"}`}>
                    <RWebShare data={{
                      // url: `http://weedx.site/cricket-breaking-news/${modifystr(breakingnews?.urlslug !== null ? breakingnews?.urlslug?.toLowerCase() : breakingnews?.Title || breakingnews?.title)}/${breakingnews.id}`
                    }} onClick={() => console.log("shared successfully!")}  >
                      <button className={style.ShareButton}>
                        <BsFillShareFill color='#c2121c'></BsFillShareFill>
                      </button>
                    </RWebShare>

                  </div>
                  <Link className={`${style.hovereffect}`} href={`/ipl-2024-dream11-predictions/${items?.urlslug !== (null || undefined) ? modifystr(items?.urlslug) : modifystr(items?.Title || items?.title)}/${items.id}`} >
                    <Image className={style.News_image} loader={imageLoader} src={items?.Image} height={10} width={100} alt="news_image" quality={100} />
                    <div className={style.News_image_title}>
                      <h2 className={`card-text  ${style.card_text}`}>{items?.Title}</h2>
                    </div>
                  </Link>
                  <div className={`col-12 ${style.viewCount}`}>
                    <div className={style.view_counttext}>
                      <IoMdEye size={18} color='#c2121c' /> {items?.ViewCount}
                    </div>
                    <div className={style.ViewCountDate}>
                      <p >{items?.created?.slice(0, 10)}</p>
                    </div>
                  </div>
                </div>
              })
            }
          </div> */}


          <NewCard props={fetchedData} link={'/ipl-2024-dream11-predictions'}></NewCard>
        </div>
        <div className='row'>
        <div className='col-12  d-none'>
                <div className={style.faqheading}><p>{`FAQ’s of Fantasy Cricket Tips`}</p></div>
                <Accodien/>
            </div>
        </div>
      </div>
    </>
  )
}

export default Ipl2024dream11predictions;

export async function getStaticProps() {
  try {
    const topNewsRes = await fetch('https://g11fantasy.com/NewsSection/FilterbySubCategory/11');
    const topNews = await topNewsRes.json();
    return {
      props: {
        breakingData: topNews,
      },
      revalidate: 60 , 
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