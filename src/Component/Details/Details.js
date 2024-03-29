
import React from 'react';
import { AiFillEye } from "react-icons/ai"
import Image from 'next/image';
import parse from 'html-react-parser';
import style from "../../styles/Style.module.scss"
import axios from 'axios';
function Details({ data , h}) {
    const imageLoader = ({ src, width, height, quality }) => {
    const l  =  h ==="cricket-news" ? 'https://grand11.in/g11/': "https://www.g11fantasy.com"
        return (`${l}${src}?w=${width}&h=${height}&q=${quality || 100}`)
    }


    // React.useEffect(() => {
        // axios.post(`https://www.g11fantasy.com/NewsSection/Update-ViewCounter/`,

        //     {
        //         "id": data.id

        //     }

        // ).then(response => {
        // })
    // }, [])

    return (
        <div className={style.detailspaget}>
            <div className="container " >
                <div className="row ">
                    <div className="col-12"> <h1 className={style.title_had}>{data.Title || data.title}</h1></div>
                    <div className="col-12 imag">
                        <div className={`col ${style.headeringImage}`}>
                            <Image className='w-100' loader={imageLoader} src={`${data?.Image || data.image}`} priority={false} alt="G11-Fantasy Cricket Prediction for Today's Match"
                                width={100} height={100} quality={100}
                                
                            />
                        <div className={style.headeringImagehover}></div>
                        </div>
                        <div className={style.detailspagecontent}>

                            {parse(data?.Description?.replace(<p>&nbsp;</p>, "") || data?.content.replace(<p>&nbsp;</p>, ""))}
                        </div>
                        <div className={`col-12 ${style.ViewCountDetailspage}`}>
                            <div className={`col-6 ${style.ViewCount}`}>
                            { data?.ViewCount &&   <>
                                <AiFillEye></AiFillEye>  <span>{data?.ViewCount + 1} view</span>
                            </>}
                            </div>
                            <div className={`col-6 ${style.ViewCountDate}`}>
                                <p >{data?.created?.slice(0, 10) || data.post_date}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;
