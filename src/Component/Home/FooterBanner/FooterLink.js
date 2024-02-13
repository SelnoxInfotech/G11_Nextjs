import React from 'react'
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";
import { IoMdCall } from 'react-icons/io';
import { AiFillLinkedin } from 'react-icons/ai';
import { faFacebook, faYoutube, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import style from "../../../styles/Style.module.scss"
// import { NavLink } from 'react-router-dom';
import { FaRssSquare } from "react-icons/fa";
import Link from 'next/link';
export default function Footer_link() {
    return (
        <div className={`${style.footer_link}`}>
            <div className={`${'container'} ${style.link}`}>
                <p className={`${style.Follow}`}>Follow us on social media</p>
            </div>
            <div className={`${'col-12' } ${style.link} ${style.socal_link}`}>
                <a href='https://www.facebook.com/g11sport/ ' ><FontAwesomeIcon icon={faFacebook} size="2x"  color='#cc0707'/></a>
                <a href='https://www.youtube.com/@g11-sportfantasyprediction66'><FontAwesomeIcon icon={faYoutube} size="2x"  color='#cc0707' /></a>
                <a href='https://www.linkedin.com/company/g11-sport-fantasy-prediction/' className={`${style.linkin}`}><AiFillLinkedin  color='#cc0707'/></a>
                <a href='https://www.instagram.com/g11sport/'> <FontAwesomeIcon icon={faInstagram} size="2x"  color='#cc0707'/></a>
                <a href='https://twitter.com/g11prediction' ><FontAwesomeIcon icon={faTwitter} size="2x"  color='#cc0707'/></a>
                <a href='tel:+916262003399' className={`${style.calling}`}><span><IoMdCall></IoMdCall> </span> </a>
                <a href='/rss-feed' className={`${style.calling}`}><span>   <FaRssSquare /></span> </a>
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
                <p>Copyright 2022 by <a href="https://selnox.com/" >selnox.com</a></p>
            </div>
        </div>
    )
}
