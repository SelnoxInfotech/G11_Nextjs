import React from 'react';
import style from "../../styles/Style.module.scss"
import Link from 'next/link';
import { IoMdEye } from "react-icons/io";
import Image from 'next/image';
import { AiFillEye } from "react-icons/ai"
// import Seo from '../Component/Seo/Seo';
import { RWebShare } from "react-web-share";
import { BsFillShareFill } from "react-icons/bs"
const NewCard = ({props , link}) => {
    const imageLoader = ({ src, width, height, quality }) => {
        const l = "https://www.g11fantasy.com"
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
        <div className={style.newcardwrapper}>
            {
                props.data.map((items, index) => {


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
    );
};

export default NewCard;