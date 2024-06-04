import React from 'react';
import style from "../../styles/Style.module.scss"
import Link from 'next/link';
import { IoMdEye } from "react-icons/io";
import Image from 'next/image';
import { AiFillEye } from "react-icons/ai"
import useSWR from 'swr';
import { RWebShare } from "react-web-share";
import { BsFillShareFill } from "react-icons/bs"
import Cardskeleton from '../../Component/skeleton/cardskeleton'

const fetcher = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  };
  
  


const NewCard = ({props , link , api}) => {

          

    const { data: fetchedData, error } = useSWR(`${api}`,fetcher,{ props } );
       let data =  fetchedData?.data

  const imagePerRow = 10
  const [next, setNext] = React.useState(imagePerRow);
    const imageLoader = ({ src, width, height, quality }) => {
        const l = "https://www.g11fantasy.com"
        return (`${l}${src}?w=${width}&h=${height}&q=${quality || 100}`)
      }
      const handleMoreImage = () => {
        setNext(next + imagePerRow);

    };
    const handlelessImage = () => {
        setNext(next - imagePerRow);
    };
     
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


      if (!data) {
        return (
          <div className='container '>
            <div className={style.Breaking_new}>
              <div className={style.Breaking_newCardWrapper}>
                {
                  [1, 5, 6, 6, 6, 6, 6, 6, 6, 6].map((e, i) => {
                 
                    return <React.Fragment key={i}>
                       < Cardskeleton ketprops={i} />
                    </React.Fragment>
                  })
                }
              </div>
            </div>
    
          </div>
        )
      }
      else{
        if(error){
            data = props 
        }
      }
    return (
      <React.Fragment>
        <div className={style.newcardwrapper}>
            {
               data?.slice(0, next)?.map((items, index) => {
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
                        <Link className={`${style.hovereffect}`} href={`${link}/${items?.urlslug !== (null || undefined) ? modifystr(items?.urlslug) : modifystr(items?.Title || items?.title)}/${items.id}`} >
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
             
        </div>
        <div className={`${'row'} ${style.BreakingButton}`}>
            <div className='col-12 d-flex gap-2 justify-content-center' id='Buttongap'>
                {next <= props?.length && (
                    <button className={style.loadmorebtm} onClick={handleMoreImage}
                    >
                        Load more
                    </button>
                )}
                {next > 10 && (
                    <button className={next <= 10 ? 'hidden' :style.loadmorebtm} onClick={handlelessImage}
                    >
                        Read Less
                    </button>
                )}
            </div>

        </div>
     </React.Fragment>
    );
};

export default NewCard;