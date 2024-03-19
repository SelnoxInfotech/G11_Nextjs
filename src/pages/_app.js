import "../styles/globals.css";
import dynamic from 'next/dynamic'
import 'bootstrap/dist/css/bootstrap.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Navbar from "../Component/Navbar/navbar"
// const Navbar = dynamic(() => import('../Component/Navbar/navbar'), { ssr: true, loading: () => <p>Loading...</p> });
const Footer_link = dynamic(() => import('../Component/Home/FooterBanner/FooterLink'), { ssr: true, loading: () => <p>Loading...</p> });
export default function App({ Component, pageProps }) {

  return (
    <>
      <Navbar></Navbar>
      <Component {...pageProps} />
      <Footer_link></Footer_link>
    </>
  )

}
