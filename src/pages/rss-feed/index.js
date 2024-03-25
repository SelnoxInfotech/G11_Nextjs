import React from 'react'
import { FaRssSquare } from "react-icons/fa";
import style from "../../styles/Style.module.scss"
export default function Rss() {
    return (
        <div className='fluid-container'>
            {/* <div className='row ' > */}
            <div className={`${style.RSS} col-12` }>
                <ol >   
                    <li>
                        <a href='/rss/Breakingnewsrss-Feed.xml' className='calling'><span> <FaRssSquare /> <p> Breaking News</p> </span> </a>
                    </li>
                    <li>
                        <a href='/rss/icc-cricket-world-cup-2023RSS-feed.xml' className='calling'><span> <FaRssSquare />Icc-cricket-world-cup-2023 </span> </a>

                    </li>
                    <li>
                        <a href='/rss/icc-cricket-world-cup-2024RSS-feed.xml' className='calling'><span> <FaRssSquare /> Icc-cricket-world-cup-2024</span> </a>

                    </li>
                    <li>
                        <a href='/rss/ipl-2023RSS-feed.xml' className='calling'><span> <FaRssSquare />Ipl-2023 </span> </a>

                    </li>
                    <li>
                        <a href='/rss/ipl-2024RSS-feed.xml' className='calling'><span> <FaRssSquare />Ipl-2024 </span> </a>
                    </li>
                    <li>
                        <a href='/rss/cricket-prediction.xml' className='calling'><span> <FaRssSquare />matchpreview</span> </a>
                    </li>
                    <li>
                        <a href='/rss/ipl-2024-dream11-predictions.xml' className='calling'><span> <FaRssSquare />ipl-2024-dream11-predictions</span> </a>
                    </li>
                </ol>
            </div>

        </div>
        // </div>
    )
}
