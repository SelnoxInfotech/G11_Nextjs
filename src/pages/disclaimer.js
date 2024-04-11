import React from 'react';
import style from "../styles/Style.module.scss"
import Seo from '../Component/Seo/Seo';
const Disclaimer = () => {

    return (
       <>
        <Seo
             image={"https://www.g11fantasy.com/image/images/download/media/Static/favicon.jpg"}
                title={" Disclaimer: G11 Prediction | Today's Match Prediction, Fantasy Cricket Tips  "}
                description={"Disclaimer: G11 Prediction provides informational content only. We do not guarantee accuracy or reliability. Use at your own risk. We are not liable for linked website content or temporary site unavailability. Opinions expressed are those of the authors."}
                keywords={"IPL 2024,IPL schedule 2024, IPL teams 2024, IPL venues 2024, Dream11 prediction, IPL 2024 match prediction, IPL 2024"}
                canonical={"https://g11prediction.com/disclaimer/"}
           ></Seo>
        <div className={`${"container"} ${style.aboutus}`}>
        <div className='row'>
          <div className={`${'col-12'} ${style.hedding}`}>
            <h1>Disclaimer</h1>
          </div>

          <hr></hr>

        </div >
        <div className='container'>
          <div className='row '>
            <div className={`${"col-12"} ${style.text}`} >
              <p>This website is only content for standard informational purposes. The data is provided by G11 Prediction, and while we make every effort to keep the data accurate and up to date, we make no guarantees about its accuracy, completeness, reliability, suitability, or availability concerning the website or the data, products, services, or related graphics located therein for any purpose. You can assume all risks if you rely on this material in any way.</p>
              <p>
              You can access websites not controlled by G11 Prediction by using this website to link to them. The nature, content, and accessibility of those sites are outside our control. All the links are provided for convenience only and are not recommendations of the content found there.
              </p>
              <p>
              {`Every effort is taken to maintain the website's availability and functionality. G11 Prediction disclaims all liability and duty if the website is momentarily inaccessible for reasons beyond our control.`}
              </p>
              <p>
              The opinions expressed by the authors in articles under several categories, including Opinions and Analysis, are those of the authors and should not be taken to represent the company. G11 Prediction will not consider any claims against information provided on the website in the event of disagreements; instead, those objections should be addressed to the Author.
              </p>
            </div>
          </div>
        </div>
     
      </div>
       </>
    );
};

export default Disclaimer;