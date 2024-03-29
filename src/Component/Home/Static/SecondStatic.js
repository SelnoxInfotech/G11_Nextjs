import React from 'react'
import style from "../../../styles/Style.module.scss"
import { FaTrophy } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { FaDatabase } from "react-icons/fa";


export default function Static_benifit() {
    return (
        <div className={`${'container-fluid'} ${style.SecondStatic}`} >
            <div className={`${"row"} ${style.Static_row}`}>
                    <h2 className={style.sectionMainTitle}>  Our Benefits </h2>
                    <div className='col-12 '>
                        
                        <ol className={style.olcards}>
		<li >
			<div className={style.content}>
				<div className={style.icon}><FaTrophy color='#fff' size={32} /></div>
				<div className={style.title}> Win Prices </div>
				<div className={style.text}> We have given high winning teams results for each match and help users to earn a profit
                                of at least 3 lakhs in a month. </div>
			</div>
		</li>
		<li >
			<div className={style.content}>
				<div className={style.icon}><MdSupportAgent color='#fff' size={32} /></div>
				<div className={style.title}> 24  X 7 Support </div>
				<div className={style.text}>  G11 provides personalized expert support, league joining tips, and investment tips on
                                every match.  </div>
			</div>
		</li>
		<li >
			<div className={style.content}>
				<div className={style.icon}><GoGraph color='#fff' size={32} /></div>
				<div className={style.title}> Best Tips </div>
				<div className={style.text}>  Best tips, tricks, and strategies to win GL and get maximum profit and lots of hidden
                                benefits. </div>
			</div>
		</li>
		<li >
			<div className={style.content}>
				<div className={style.icon}><FaDatabase color='#fff' size={32} /></div>
				<div className={style.title}> Our Experience </div>
				<div className={style.text}>   Our expert work collect all the data, research, build our team, and put this data in one
                                place with the most accurate fantasy tips. So don&#39;t waste your precious time doing all this
                                hard work, work smart, use our tips and earn money on Dream 11 and all fantasy cricket
                                other platforms. </div>
			</div>
		</li>
                    	</ol>
                    </div>
            </div>
        </div>
    )
}
