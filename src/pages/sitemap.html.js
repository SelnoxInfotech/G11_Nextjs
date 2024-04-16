import React from 'react';
import Link from 'next/link'
import  style from "../styles/Style.module.scss"
const sitemaphtml = () => {
    return (
        <div className={`${"container"} ${style.sitemap_xmlpage}`}>
            <div className='col-12  mt-5 '>
                <h1 className='text-center'>Sitemap</h1>
            </div>
            <Link href="/"><p role="button">Home</p></Link> 

            <Link href={"/cricket-match-predictions/"}><p role="button">Cricket Match Predictions</p></Link>
            <Link href={"/cricket-breaking-news/"}><p role="button">Cricket Breaking News</p> </Link>
            <Link href='/ipl-2024/'><p role="button">Ipl 2024</p></Link>
            <Link href='/ipl_2023/'><p role="button">Ipl 2023</p></Link>
            <Link href={"/ipl-2024-dream11-predictions/"}><p role="button">Ipl 2024 Dream11 Predictions</p></Link>
            <Link href={"/fantasy-cricket-tips/"}><p role="button">Fantasy Cricket Tips</p></Link>
            <Link href={"/cricket-rules-and-regulation/"}><p role="button">Cricket Rules and Regulation</p></Link>
            <Link href={"/icc-cricket-world-cup-2024/"}><p role="button">Icc Cricket World Cup 2024</p></Link>
            <Link href={"/about-us/"}><p role="button">About Us</p></Link>
            <Link href={"/icc-cricket-world-cup-2023/"}> <p role="button">Icc Cricket World Cup 2023</p></Link>
            <Link href={"/cricket-players/"}><p role="button"> Cricket Players</p></Link>
            <Link href='/cricket-news/'><p role="button">Cricket News</p></Link>
            <Link href={"/latest-video/"}><p role="button">Latest Video</p></Link>
            <Link href={"/contact-us/"}><p role="button">Contact Us</p></Link>
            <Link href={"/privacy-policy/"}><p role="button">Privacy Policy</p></Link>
            <Link href={"disclaimer"}> <p role="button">Disclaimer</p> </Link>
            <Link href={"faq"}><p role="button">Faq</p></Link>
        </div>
    );
};

export default sitemaphtml;