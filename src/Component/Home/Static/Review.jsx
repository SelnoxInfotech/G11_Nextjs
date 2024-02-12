import React from 'react'
import style from "../../../styles/Style.module.scss"
export default function Testimonial() {
    return (
        <div className={`${'container-fluid'} ${style.Testimonials}`}>
            <div className={`${'row'} ${style.Static_row}`}>
                <div className='col-12 '>
                    <p className={style.TestHeading}>Testimonials</p>
                </div>

                <div className={`${'col-10'} ${style.content}`}>
                    <p>Find our user&#39;s testimonials which show how G11 is the best fantasy cricket match prediction
                        website and Dream 11 Fantasy Cricket Prediction Today Match. Download our G11 Cricket
                        Prediction app and find the best betting tips, predictions, and previews of today&#39;s match.</p>
                </div>

            </div>
        </div>
    )
}
