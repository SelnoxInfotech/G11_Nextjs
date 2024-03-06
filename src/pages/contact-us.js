import React from 'react';
import style from "../styles/Style.module.scss"
const contact_us = () => {
    return (
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
    );
};

export default contact_us