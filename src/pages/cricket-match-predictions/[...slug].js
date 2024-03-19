import React from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router'
const MatchPriview = dynamic(() => import('../../Component/MatchPriview/MatchPriview'), { ssr: true });

function Matchguide(props) {
    // if(router.asPath === "/breaking-news/"){
    //     window.history.replaceState({}, '', `/cricket-breaking-news`);
    //   }
      


    return (
        <div>
            <MatchPriview props={props} ></MatchPriview>
        </div>
    );
}

export async function getServerSideProps(ctx) {
    function checkString(string) {
        if (typeof string === "string" && !isNaN(string)) {

            return string
        }
        else {
            return false
        }
    }

 console.log(ctx.params.slug[0] === "cricket-match-predictions" , "cricket-match-predictions/" , ctx.params) 
    if(ctx.params.slug[0] === "cricket-prediction"){
 
        const idIndex = checkString(ctx.params.slug[3]) ? checkString(ctx.params.slug[3]) : checkString(ctx.params.slug[4]);
        const url = "https://grand11.in/g11/api/page/match_details/" + idIndex;
    
        try {
            const response = await axios.get(url, { cache: 'force-cache' | 'no-store' });
            const props = response.data;
            //    console.log(props)
            // setmatchpreviwe(a)
            return { props: { props } };
        } catch (error) {
            console.error("Error fetching data:", error);
            return { props: { error: "Failed to fetch data" } };
        }
    }
    else{
        console.log( ctx.params ) 
        const idIndex = checkString(ctx.params.slug[2]) ? checkString(ctx.params.slug[2]) : checkString(ctx.params.slug[3]);
        const url = "https://grand11.in/g11/api/page/match_details/" + idIndex;
    
        try {
            const response = await axios.get(url, { cache: 'force-cache' | 'no-store' });
            const props = response.data;
            //    console.log(props)
            // setmatchpreviwe(a)
            return { props: { props } };
        } catch (error) {
            console.error("Error fetching data:", error);
            return { props: { error: "Failed to fetch data" } };
        }
    }
}

export default Matchguide;