import React from 'react'
import style from '../styles/Style.module.scss'
import Link from 'next/link';
import { IoMdEye } from "react-icons/io";
import Image from 'next/image';
import { AiFillEye } from "react-icons/ai"
import  Seo  from '../Component/Seo/Seo';
import { RWebShare } from "react-web-share";
import { BsFillShareFill } from "react-icons/bs"
const ipl2024dream11predictions = (props) => {
  const imageLoader = ({ src, width, height, quality }) => {
    const l ="https://www.g11fantasy.com"
        return (`${l}${src}?w=${width}&h=${height}&q=${quality || 100}`)
    }
  function modifystr(str) {

    str = str?.replace(/[^a-zA-Z0-9/ ]/g, "-");
    str = str?.trim().replaceAll(' ', "-");
    let a = 0;
    while (a < 1) {
        if (str?.includes("--")) {
            str = str?.replaceAll("--", "-")
        } else if (str?.includes("//")) {
            str = str?.replaceAll("//", "/")
        } else if (str?.includes("//")) {
            str = str?.replaceAll("-/", "/")
        } else if (str?.includes("//")) {
            str = str?.replaceAll("/-", "/")
        } else {
            a++
        }
    }

    return str?.toLowerCase()
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
          <div className={style.newcardwrapper}>
            {
              props?.breakingData?.data.map((items , index)=>{
               console.log(items)

                 return   <div className={style.newcard}  key={index}>
                                              <div className={`${"col"}`}>
                                                  <RWebShare  data={{
                                                          // url: `http://weedx.site/cricket-breaking-news/${modifystr(breakingnews?.urlslug !== null ? breakingnews?.urlslug?.toLowerCase() : breakingnews?.Title || breakingnews?.title)}/${breakingnews.id}`
                                                  }}  onClick={() => console.log("shared successfully!")}  >
                                                      <button className={style.ShareButton}>
                                                          <BsFillShareFill  color='#c2121c'></BsFillShareFill>
                                                      </button>
                                                  </RWebShare>

                                              </div>
                                              <Link className={`${style.hovereffect}`} href={`/ipl-2024-dream11-predictions/${items?.urlslug !== (null || undefined) ? modifystr(items?.urlslug) : modifystr(items?.Title ||  items?.title)}/${items.id}`} >
                                                  <Image className={style.News_image} loader={imageLoader} src={items?.Image} height={10} width={100} alt="news_image" quality={100} />
                                                  <div className={style.News_image_title}>
                                                      <h2 className={`card-text  ${style.card_text}`}>{items?.Title}</h2>
                                                  </div>
                                              </Link>
                                              <div className={`col-12 ${style.viewCount}`}>
                                                   <div className={style.view_counttext}>
                                                     <IoMdEye  size={18} color='#c2121c'/> {items?.ViewCount}
                                                   </div>
                                                  <div className={style.ViewCountDate}>
                                                      <p >{items?.created?.slice(0, 10)}</p>
                                                  </div>
                                              </div>
                          </div>
                    
              })
            }
           
          </div>
       </div>
    </div>
    </>
  )
}

export default ipl2024dream11predictions;

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