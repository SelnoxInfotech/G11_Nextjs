
import React from 'react'
import { IoMdCall } from 'react-icons/io';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaFacebook } from "react-icons/fa";
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
                <p className={`${style.Follow}`}>Follow us on social media</p>
            </div>
            <div className={`${'col-12' } ${style.link} ${style.socal_link}`}>
                <Link href='https://www.facebook.com/g11sport/ ' ><FaFacebook   /></Link>
                 <Link href='https://www.youtube.com/@g11-sportfantasyprediction66'><FaYoutube    /></Link>
                <Link href='https://www.instagram.com/g11sport/'> <FaInstagram   /></Link>
                <Link href='https://www.linkedin.com/company/g11-sport-fantasy-prediction/' className={`${style.linkin}`}><AiFillLinkedin  /></Link>
                <Link href='https://twitter.com/G11sport123230' ><BsTwitterX     /></Link>
                <Link href='tel:+916262003399' className={`${style.calling}`}><span><IoMdCall></IoMdCall> </span> </Link>
                <Link href='/rss-feed' className={`${style.calling}`}><span>   <FaRssSquare /></span> </Link>
            </div>
            <div className={`${'container '} ${style.link }`}>
                <ul className={`${style.policy_link}`}>

                    <Link href="/privacy-policy"><li className={`${style.hovereffect}`}> &nbsp;Privacy Policy&nbsp; </li></Link>
                    <Link href="/disclaimer">  <li className={`${style.hovereffect}`}>|&nbsp;Disclaimer&nbsp;</li></Link>
                    <Link href="/faq"><li className={`${style.hovereffect}`}>|&nbsp;FAQ</li></Link>

                    {/* <li>|&nbsp; </li> */}
                </ul>
            </div>
            <div className={`${"container-fluid"} ${style.copy_right}`}>
                <p className='m-0 py-3'>Copyright © 2024 by <a href="https://selnox.com/" >selnox.com</a></p>
            </div>
        </div>
    )
}
