import React, { useState } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
import Seo from '../../Component/Seo/Seo';
const MatchPriview = dynamic(() => import('../../Component/MatchPriview/MatchPriview'), { ssr: true });

function Matchguide(props) {
    const [seoData , SetSeoData] =  useState({})
    function modifystr(str) {
      
        str = str.replace(/[^a-zA-Z0-9/ ]/g, "-");
        str = str.trim().replaceAll(' ', "-");
        let a = 0;
        while (a < 1) {
            if (str.includes("--")) {
                str = str.replaceAll("--", "-")
            } else if (str.includes("//")) {
                str = str.replaceAll("//", "/")
            } else if (str.includes("//")) {
                str = str.replaceAll("-/", "/")
            } else if (str.includes("//")) {
                str = str.replaceAll("/-", "/")
            } else {
                a++
            }
        }

        return str.toLowerCase()
    }
 console.log(Object.keys(seoData).length !==0 , seoData)

    return (
        <div>
       { Object.keys(seoData).length !==0 && <Seo
                title={`${"Title1"} Dream11 Prediction Today Match | Dream11 Team Today`}
                image={seoData?.image }
                description={`Dream11 today match prediction for ${seoData?.Title}.Win big with accurate tips & best Dream11 team prediction, Today Dream11 Team Check out!`}
                keywords={`dream 11 team today,cricket prediction,today dream 11 team,cricket betting tips,dream 11 prediction,dream11 team today,dream 11 today team,best team for dream11 today match,who will win today ipl match,today ipl match prediction,dream11 today team,dream11 update,dream11 prediction,today dream11 team,dream11 prediction today match,who will win today match,who win today ipl match,my 11 circle team prediction today,cricket tips,online cricket betting tips,cricket betting tips free,cricket jackpot tips,today cricket match prediction tips,Today Live Toss prediction,cricket match prediction,free cricket match prediction,who will win today  match,fantasy cricket prediction,best prediction site,best prediction website`}
                // canonical={`${"https://g11prediction.com/cricket-match-predictions"}/${modifystr(seoData?.Title) + "-dream11-prediction-today-match"}/${router.query.slug[1] || router.query.slug[0]}/`}
            >
            </Seo>}
            <MatchPriview props={props} SetSeoData={SetSeoData}  seoData={seoData} ></MatchPriview>
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
    // console.log(ctx.params.slug[0] === "match-preview")

    else if(ctx.params.slug[0] === "teams" || ctx.params.slug[0] === "match-preview" || ctx.params.slug[0] === "team-guide" || ctx.params.slug[0] === "cheat-sheet"){
        const idIndex = checkString( ctx.params.slug[ctx.params.slug.length - 1]);

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
        const idIndex = checkString(ctx.params.slug[0]) ? checkString(ctx.params.slug[0]) : checkString(ctx.params.slug[ctx.params.slug.length - 1]);
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