import React from "react";
import { AiFillEye } from "react-icons/ai";
import Image from "next/image";
import parse from "html-react-parser";
import style from "../../styles/Style.module.scss";
import axios from "axios";
import dynamic from 'next/dynamic';
// const Seo = dynamic(() => import('../../Component/Seo/Seo'), { ssr: false });
 
 function Details({ data, h }) {
  const imageLoader = ({ src, width, height, quality }) => {
    const l =
      h === "cricket-news"
        ? "https://grand11.in/g11/"
        : "https://www.g11fantasy.com";
    return `${l}${src}?w=${width}&h=${height}&q=${quality || 100}`;
  };

 
  const dateformatter = (date) => {
    function monthname(val) {
      switch (val) {
        case 1:
          return "JAN";
          break;
        case 2:
          return "FEB";
          break;
        case 3:
          return "MAR";
          break;
        case 4:
          return "APR";
          break;
        case 5:
          return "MAY";
          break;
        case 6:
          return "JUN";
          break;
        case 7:
          return "JUL";
          break;
        case 8:
          return "AUG";
          break;
        case 9:
          return "SEP";
          break;
        case 10:
          return "OCT";
          break;
        case 11:
          return "NOV";
          break;
        case 12:
          return "DEC";
          break;

        default:
        // code block
      }
    }
    date = new Date(date)
  
    let a = date.getDate() + "-" + monthname(date.getMonth() + 1) + "-" + date.getFullYear() + " " + date.getHours() +  ":" + date.getMinutes();
    return a;
  };

  return (
    <React.Fragment>

      <div className={style.detailspaget}>
          <div className="row ">
            <div className={style.newspageheader}>
              <h1 className={style.title_had}>{data.Title || data.title}</h1>
      
              <h3 className={style.posttiming}>{`Published - ${dateformatter(data.created || data.post_date)} IST | Updated - ${dateformatter(data.updated || data.post_date)} IST`}</h3>
            </div>
            <div className="col-12 imag">
              <div className={`col ${style.headeringImage}`}>
                <Image
                  className="w-100 mb-4"
                  loader={imageLoader}
                  src={`${data?.Image || data.image}`}
                  priority={false}
                  alt="G11-Fantasy Cricket Prediction for Today's Match"
                  width={100}
                  height={100}
                  quality={100}
                />
              </div>
              <div className={style.detailspagecontent}>
                {parse(
                  data?.Description?.replace(<p>&nbsp;</p>, "") ||
                    data?.content.replace(<p>&nbsp;</p>, "")
                )}
              </div>
              <div className={`col-12 ${style.ViewCountDetailspage}`}>
                <div className={`col-6 ${style.ViewCount}`}>
                  {data?.ViewCount && (
                    <>
                      <AiFillEye></AiFillEye>{" "}
                      <span>{data?.ViewCount + 1} view</span>
                    </>
                  )}
                </div>
                <div className={`col-6 ${style.ViewCountDate}`}>
                  <p>{data?.created?.slice(0, 10) || data.post_date}</p>
                </div>
              </div>
            </div>
          </div>
      </div>

      
    </React.Fragment>
  );
}

export default Details;
