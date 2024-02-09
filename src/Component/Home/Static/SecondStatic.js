import React from 'react'
import style from "../../../styles/Style.module.scss"


export default function Static_benifit() {
    return (
        <div className={`${'container-fluid'} ${style.SecondStatic}`} >
            <div className={`${"row"} ${style.Static_row}`}>
                <div className={`${'col-12 ' } ${style.hedding}`}>
                    Our Benefits
                </div>
               <div className='row '>
               <div className='col-12 '>
                    <ol>
                        <li>
                            We have given high winning teams results for each match and help users to earn a profit
                            of at least 3 lakhs in a month.
                        </li>
                        <li>
                            G11 provides personalized expert support, league joining tips, and investment tips on
                            every match.
                        </li>
                        <li>
                            Best tips, tricks, and strategies to win GL and get maximum profit and lots of hidden
                            benefits.
                        </li>
                        <li>
                            Our expert work collect all the data, research, build our team, and put this data in one
                            place with the most accurate fantasy tips. So don&#39;t waste your precious time doing all this
                            hard work, work smart, use our tips and earn money on Dream 11 and all fantasy cricket
                            other platforms.
                        </li>
                    </ol>
                </div>
               </div>
            </div>
        </div>
    )
}
