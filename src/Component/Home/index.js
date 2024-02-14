
import Image from "next/image";
import dynamic from 'next/dynamic'
import { Inter } from "next/font/google";


const ScrollBreaking = dynamic(() => import('./ScrollBreakingnews/index'), { ssr: true, loading: () => <p>Loading...</p> });
const Banner = dynamic(() => import('./Banner/index'), { ssr: true, loading: () => <p>Loading...</p> });
const UpdateMatch = dynamic(() => import('./Updatematch/Match'), { ssr: true, loading: () => <p>Loading...</p> });
const Static_Content = dynamic(() => import('./Banner/WelcomestaticContant'), { ssr: true, loading: () => <p>Loading...</p> });
const Breakingnews =  dynamic(()=> import('../Home/BreakingNews/Breakingnews') , {ssr:true,loading: () => <p>Loading...</p>})
const LatestNews =  dynamic(()=> import('../Home/LatestNews/LatestNews') , {ssr:true,loading: () => <p>Loading...</p>})
const HightLight =  dynamic(()=> import('../Home/HightLight/HightLight') , {ssr:true,loading: () => <p>Loading...</p>})
const VideoSection =  dynamic(()=> import('../Home/VideoSection/VideoSection') , {ssr:false,loading: () => <p>Loading...</p>})
const Static =  dynamic(()=> import('../Home/Static/Static') , {ssr:true,loading: () => <p>Loading...</p>})
const SecondStatic =  dynamic(()=> import('../Home/Static/SecondStatic') , {ssr:true,loading: () => <p>Loading...</p>})
const Teams =  dynamic(()=> import('./Team/Team') , {ssr:true,loading: () => <p>Loading...</p>})
const Review =  dynamic(()=> import('./Static/Review') , {ssr:true,loading: () => <p>Loading...</p>})
const Customerrate =  dynamic(()=> import('./Static/Customerrate') , {ssr:true,loading: () => <p>Loading...</p>})
const Staticres =  dynamic(()=> import('./Static/Staticres') , {ssr:true,loading: () => <p>Loading...</p>})
const Companyexpi =  dynamic(()=> import('./Static/Companyexpi') , {ssr:true,loading: () => <p>Loading...</p>})
const Footer =  dynamic(()=> import('./FooterBanner/FooterBanner') , {ssr:true,loading: () => <p>Loading...</p>})
const inter = Inter({ subsets: ["latin"] });
const index = ({props , match,updatematch , Breaking ,latestnews,Teamsdata ,image }  ) => {
console.log(image)
    return(
        <>
        <ScrollBreaking props={props}></ScrollBreaking>
        <Banner match={match} image={image}></Banner>
        <UpdateMatch updatematch = {updatematch} image={image}></UpdateMatch>
        <Static_Content></Static_Content>
        <Breakingnews Breaking={Breaking}></Breakingnews>
         <LatestNews latestnews ={[latestnews[0]]}></LatestNews>
    <HightLight latestnews={latestnews}></HightLight>
         {/* <VideoSection ></VideoSection>  */}
       <Static></Static>
        <SecondStatic></SecondStatic>
        <Teams Teamsdata= {Teamsdata}></Teams>
        <Review></Review>
        <Customerrate image={image}></Customerrate>
        <Staticres></Staticres>
        <Companyexpi></Companyexpi>
        <Footer></Footer> 
        </>
    )
}

export default index

  