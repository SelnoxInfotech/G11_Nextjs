
import React from 'react'
import { IoMdCall } from 'react-icons/io';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaFacebook } from "react-icons/fa";
import { SiGooglenews } from "react-icons/si";

import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
// import { faFacebook, faYoutube, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import style from "../../../../src/styles/Style.module.scss"
import { FaRssSquare } from "react-icons/fa";
import Link from 'next/link';
export default function Footer_link() {
    return (
        <div className={`${style.footer_link}`}>
            <div className={`${'container'} ${style.link}`}>
                <p className={`${style.Follow}`}>Follow us on social media </p>
            </div>
            <div className={`${'col-12'} ${style.link} ${style.socal_link}`}>
            <a href='https://www.facebook.com/g11sport/' aria-label="Facebook"><FaFacebook /></a>
      <a href='https://www.youtube.com/@g11-sportfantasyprediction66' aria-label="YouTube"><FaYoutube /></a>
      <a href='https://www.instagram.com/g11sport/' aria-label="Instagram"><FaInstagram /></a>
      {/* Add other social media links */}
      <a href='https://twitter.com/G11sport123230' aria-label="Twitter"><BsTwitterX /></a>
      <a href='https://news.google.com/publications/CAAqBwgKMJmUqgwwq5S3BA?hl=en-IN&gl=IN&ceid=IN%3Aen' aria-label="Google News"><SiGooglenews /></a>
      <a href='tel:+916262003399' className={style.calling} aria-label="Call"><span><IoMdCall /></span></a>
      <Link href='/rss-feed' className={style.rssFeed} aria-label="RSS Feed"><span><FaRssSquare /></span></Link>
            </div>
            <div className={`${'container '} ${style.link}`}>
                <div className={`${style.policy_link}`}>

                    <Link href="/privacy-policy"><span className={`${style.hovereffect}`}> &nbsp;Privacy Policy&nbsp; </span></Link>
                    <Link href="/disclaimer">  <span className={`${style.hovereffect}`}>|&nbsp;Disclaimer&nbsp;</span></Link>
                    <Link href="/faq"><span className={`${style.hovereffect}`}>|&nbsp;FAQ |&nbsp;</span></Link>
                    <Link href={"/sitemap.html"}><span className={`${style.hovereffect}`}>sitemap</span></Link>
                </div>
            </div>
            <div className={`${"container-fluid"} ${style.copy_right}`}>
                <p className='m-0 py-3'>Copyright © 2024 by <a href="https://selnox.com/" >selnox.com</a></p>
            </div>
        </div>
    )
}

