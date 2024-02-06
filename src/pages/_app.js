import "@/styles/globals.css";
import dynamic from 'next/dynamic'
import 'bootstrap/dist/css/bootstrap.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Navbar from "../Component/Navbar/navbar"
const Navbar = dynamic(() => import('../Component/Navbar/navbar'), { ssr: true, loading: () => <p>Loading...</p> });
export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </>
  )

}
