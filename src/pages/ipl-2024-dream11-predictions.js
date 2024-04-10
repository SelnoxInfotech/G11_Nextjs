import useSWR from 'swr';
import React from 'react'
import style from '../styles/Style.module.scss'

import Seo from '../Component/Seo/Seo';

import Cardskeleton from '../Component/skeleton/cardskeleton'
import { useRouter } from 'next/router'
import Newcard from "../Component/card/NewCard"
const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};



const Ipl2024dream11predictions = (props) => {
  const router = useRouter()
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
        <div className='row'>
          <h1 className={style.newcardwrappermainHeading}> Dream11 Prediction for IPL 2024</h1>
          <p style={{color:"#c2121c" , display:"flex" ,gap:"15px"}}><span style={{cursor: "pointer"  }} onClick={() => router.push("/")}>Home</span>{">"}<span>{"Dream11 Prediction for IPL 2024"}</span></p>
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


          <Newcard props={fetchedData} link={'/ipl-2024-dream11-predictions'}></Newcard>
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