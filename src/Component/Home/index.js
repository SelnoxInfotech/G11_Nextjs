
import Image from "next/image";
import dynamic from 'next/dynamic'
import { Inter } from "next/font/google";
const ScrollBreaking = dynamic(() => import('./ScrollBreakingnews/index'), { ssr: true, loading: () => <p>Loading...</p> });
const Banner = dynamic(() => import('./Banner/index'), { ssr: true, loading: () => <p>Loading...</p> });
const UpdateMatch = dynamic(() => import('./Updatematch/Match'), { ssr: true, loading: () => <p>Loading...</p> });
const Static_Content = dynamic(() => import('./Banner/WelcomestaticContant'), { ssr: true, loading: () => <p>Loading...</p> });
const Breakingnews =  dynamic(()=> import('../Home/BreakingNews/Breakingnews') , {ssr:true,loading: () => <p>Loading...</p>})
const LatestNews =  dynamic(()=> import('../Home/LatestNews/LatestNews') , {ssr:true,loading: () => <p>Loading...</p>})
const inter = Inter({ subsets: ["latin"] });
const index = ({props , match,updatematch , Breaking ,latestnews}  ) => {

    return(
        <>
        <ScrollBreaking props={props}></ScrollBreaking>
        <Banner match={match}></Banner>
        <UpdateMatch updatematch = {updatematch}></UpdateMatch>
        <Static_Content></Static_Content>
        <Breakingnews Breaking={Breaking}></Breakingnews>
        <LatestNews latestnews ={latestnews}></LatestNews>
        </>
    )
}

export default index

  