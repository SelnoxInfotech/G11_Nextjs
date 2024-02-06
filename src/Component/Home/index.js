
import Image from "next/image";
import dynamic from 'next/dynamic'
import { Inter } from "next/font/google";
const ScrollBreaking = dynamic(() => import('../ScrollBreakingnews/index'), { ssr: true, loading: () => <p>Loading...</p> });
// import ScrollBreaking from "../ScrollBreakingnews/index";
// import Banner from "../Banner/index"
const Banner = dynamic(() => import('../Banner/index'), { ssr: true, loading: () => <p>Loading...</p> });
const UpdateMatch = dynamic(() => import('../Updatematch/Match'), { ssr: true, loading: () => <p>Loading...</p> });
// import UpdateMatch from "../Updatematch/Match";
const inter = Inter({ subsets: ["latin"] });



const index = ({props , match,updatematch} ) => {

    return(
        <>
        <ScrollBreaking props={props}></ScrollBreaking>
        <Banner match={match}></Banner>
        <UpdateMatch updatematch = {updatematch}></UpdateMatch>
        </>
    )
}

export default index

  