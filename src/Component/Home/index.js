
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
const inter = Inter({ subsets: ["latin"] });
const index = ({props , match,updatematch , Breaking ,latestnews }  ) => {

    return(
        <>
        <ScrollBreaking props={props}></ScrollBreaking>
        <Banner match={match}></Banner>
        <UpdateMatch updatematch = {updatematch}></UpdateMatch>
        <Static_Content></Static_Content>
        <Breakingnews Breaking={Breaking}></Breakingnews>
        <LatestNews latestnews ={[latestnews[0]]}></LatestNews>
        <HightLight latestnews={latestnews}></HightLight>
        {/* <VideoSection ></VideoSection> */}
        <Static></Static>
        <SecondStatic></SecondStatic>
        </>
    )
}

export default index

  