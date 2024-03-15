import React from 'react';
import style from "../styles/Style.module.scss"
import { Seo } from '../Component/Seo/Seo';
const contact_us = () => { 
    return (
      <>
        <Seo
        image={"https://www.g11fantasy.com/image/images/download/media/Static/favicon.jpg"}
        title={"Contact Us | G11 Fantasy Cricket Prediction Today's Match |"}
        description={"Contact us, G11 Fantasy Cricket Prediction Today's Match. Dream11, My11Circle, Playerzpot, Howzat, Gamezy and Many More apps. Dream 11 betting tips"}
        keywords={"Dream11 team prediction, My11Circle prediction, cricket betting tips, Dream 11 prediction, howzat today team prediction, Playerzpot prediction, prediction for today match, My11Circle cricket team prediction, Dream11 prediction today match, howzat team prediction today match, Playerzpot Fantasy Cricket prediction, Dream11 cricket team prediction, My11Circle prediction today match, Playerzpot Circle team prediction, howzat team prediction, Today Match Prediction, howzat prediction today's match"}
        canonical={"https://g11prediction.com/contact-us/"}
      ></Seo>
        <div className={`${'container'} ${style.aboutus}`}>
            <div className='row'>
                <div className={`${'col-12'} ${style.hedding}`}>
                    <h1>Contact Us</h1>
                </div>
                <hr></hr>
                <div className='container'>
                    <div className='row '>
                        <div className='container'>
                            {/* <div className='row center'> */}
                            <div className={`${"col-12"} ${style.text}`}>
                                <p>If you have any questions, concerns, or requests regarding anything throughout the website, please contact us at: </p>
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12 hedding center'>
                        <h2>  Address</h2>
                    </div>

                    <hr></hr>
                </div >
                <div className='container'>
                    <div className='row '>
                        <div className='container'>
                            <div className='row center'>
                                <div className={`${"col-12"} ${style.text}`}>
                                    <p>Email Id:   <a href="mailto:g11hosting@gmail.com">g11hosting@gmail.com</a> </p>
                                    <p> <span>Contacts No:</span><span><a href='tel:+916262003399'>+916262003399</a></span></p>
                                    <p>or</p>
                                    <p>Visit: shop no 8,1st floor platinum plaza mata mandir road, bhopal (m.p)
                                        Bhopal, Madhya Pradesh, India, Madhya pradesh 462003
                                        India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className='container'>
            <div className='row '>
              <div className={`${"col-12"} ${style.text}`}>
                <a href="mailto:g11hosting@gmail.com">g11hosting@gmail.com</a>
              </div>
            </div>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-12 hedding center'>
                <h2>Phone</h2>
              </div>

              <hr></hr>

              <div className='container'>
                <div className='row '>
                  <div className={`${"col-12"} ${style.text}`}>
                    <a href='tel:+916262003399'><p>+916262003399</p></a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

            </div>
        </div>
      </>
    );
};

export default contact_us