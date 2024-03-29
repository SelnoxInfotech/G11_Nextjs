import "../styles/globals.css";
import dynamic from 'next/dynamic'
import 'bootstrap/dist/css/bootstrap.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
// import Navbar from "../Component/Navbar/navbar"
const Navbar = dynamic(() => import('../Component/Navbar/navbar'));
// const Footer_link = dynamic(() => import(''), { ssr: false, loading: () => <p>Loading...</p> });
import Footer_link from "../Component/Home/FooterBanner/FooterLink"
export default function App({ Component, pageProps }) {

  return (
    <>
      <Navbar></Navbar>
      <Component {...pageProps} />
      <Footer_link></Footer_link>
    </>
  )

}
