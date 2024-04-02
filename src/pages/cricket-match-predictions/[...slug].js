import React from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
const MatchPriview = dynamic(() => import('../../Component/MatchPriview/MatchPriview'), { ssr: true });

function Matchguide(props) {
    return (
        <div>
         
            <MatchPriview props={props} ></MatchPriview>
        </div>
    );
}



export async function getServerSideProps(ctx) {

    // console.log(ctx.params.slug[0] === "teams" , ctx.params.slug)
    function checkString(string) {
        if (typeof string === "string" && !isNaN(string)) {

            return string
        }
        else {
            return false
        }
    }

    if(ctx.params.slug[0] === "cricket-prediction"){
 
        const idIndex = checkString(ctx.params.slug[3]) ? checkString(ctx.params.slug[3]) : checkString(ctx.params.slug[4]);
        const url = "https://grand11.in/g11/api/page/match_details/" + idIndex;
        const topNewsRes = await fetch('https://www.g11fantasy.com/NewsSection/Get-TopNews/1');
        const topNews = await topNewsRes.json();
        // Parse the JSON
       
        try {
            const response = await axios.get(url, { cache: 'force-cache' | 'no-store' });
            const props = response.data;
            // setmatchpreviwe(a)
            return { props: { MatchData: props , topNews } };
        } catch (error) {
            console.error("Error fetching data:", error);
            return { props: { error: "Failed to fetch data" } };
        }
    }
    else if(ctx.params.slug[0] ===( "teams" || "match-preview" ) ){
        const idIndex = checkString(ctx.params.slug[3]);

        const url = "https://grand11.in/g11/api/page/match_details/" + idIndex;
        const topNewsRes = await fetch('https://www.g11fantasy.com/NewsSection/Get-TopNews/1');
        const topNews = await topNewsRes.json();
        try {
            const response = await axios.get(url, { cache: 'force-cache' | 'no-store' });
            const props = response.data;
            // setmatchpreviwe(a)
            return { props: { MatchData:props  ,topNews} };
        } catch (error) {
            console.error("Error fetching data:", error);
            return { props: { error: "Failed to fetch data" } };
        }
    }
    else{

        const idIndex = checkString(ctx.params.slug[0]) ? checkString(ctx.params.slug[0]) : checkString(ctx.params.slug[1]);

        const url = "https://grand11.in/g11/api/page/match_details/" + idIndex;
        const topNewsRes = await fetch('https://www.g11fantasy.com/NewsSection/Get-TopNews/1');
        const topNews = await topNewsRes.json();
        try {
            const response = await axios.get(url, { cache: 'force-cache' | 'no-store' });
            const props = response.data;
            // setmatchpreviwe(a)
            return { props: { MatchData:props  ,topNews} };
        } catch (error) {
            console.error("Error fetching data:", error);
            return { props: { error: "Failed to fetch data" } };
        }
    }
}

export default Matchguide;