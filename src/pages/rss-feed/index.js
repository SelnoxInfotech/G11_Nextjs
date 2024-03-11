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
                        <a href='/Rss/Breakingnewsrss-Feed.xml' className='calling'><span> <FaRssSquare /> <p> Breaking News</p> </span> </a>
                    </li>
                    <li>
                        <a href='/Rss/icc-cricket-world-cup-2023RSS-feed.xml' className='calling'><span> <FaRssSquare />Icc-cricket-world-cup-2023 </span> </a>

                    </li>
                    <li>
                        <a href='/Rss/icc-cricket-world-cup-2024RSS-feed.xml' className='calling'><span> <FaRssSquare /> Icc-cricket-world-cup-2024</span> </a>

                    </li>
                    <li>
                        <a href='/RSS/ipl-2023RSS-feed.xml' className='calling'><span> <FaRssSquare />Ipl-2023 </span> </a>

                    </li>
                    <li>
                        <a href='/RSS/ipl-2024RSS-feed.xml' className='calling'><span> <FaRssSquare />Ipl-2024 </span> </a>
                    </li>
                </ol>
            </div>

        </div>
        // </div>
    )
}
