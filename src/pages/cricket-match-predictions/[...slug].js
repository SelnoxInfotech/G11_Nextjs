
import React, { useState } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
const cheerio = require('cheerio');
const MatchPriview = dynamic(() => import('../../Component/MatchPriview/MatchPriview'), { ssr: true });
const Seo = dynamic(() => import('../../Component/Seo/Seo'), { ssr: true });
import { Router } from "next/router"
function Matchguide(props) {

    const $ = cheerio.load(props.MatchData);
    const jsonData = {};

    // Extract data from the top header section
    jsonData.topHeader = {
        logo: $('.topheader img').attr('src')
    };

    const [seoData, SetSeoData] = useState({})

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

    jsonData.matchDetails = {
        tournament: $('h2').text(),
        teams: {
            blueDevils: $('h4').text().split(' VS ')[0],
            socaKings: $('h4').text().split(' VS ')[1]
        },
        details: {
            matchDate: $('ul li:eq(0)').text().split(': ')[1],
            matchTime: $('ul li:eq(1)').text().split(': ')[1],
            city: $('ul li:eq(2)').text().split(': ')[1],
            country: $('ul li:eq(3)').text().split(': ')[1],
            status: $('ul li:eq(4)').text().split(': ')[1]
        },
        preview: $('h3:contains("Match Preview")').next('p').text(),
        teamGuide: $('h3:contains("Team Guide")').next('p').text(),
        detailsAnalysis: $('h3:contains("Details Analysis")').next('p').text(),
        cheatSheet: $('h3:contains("Cheat Sheet")').next('p').text()
    };
    return (
        <div>
            {<Seo
                createdate={undefined}
                schema={true}
                Breadcrumlist={[{Home:"https://g11prediction.com/" } , {"cricket-match-predictions": "/cricket-match-predictions/"} ,  {[`${jsonData.matchDetails.preview.replace(/:/g, '').trim().slice(7)} Dream11 Prediction Today Match | Dream11 Team Today`]: `${"https://g11prediction.com/cricket-match-predictions"}/${modifystr(jsonData.matchDetails.preview.replace(/:/g, '').trim().slice(7)) + "-dream11-prediction-today-match"}/${props.idIndex}/`}] }
                title={`${jsonData.matchDetails.preview.replace(/:/g, '').trim().slice(7)} Dream11 Prediction Today Match | Dream11 Team Today`}
                image={jsonData.image = $('div.col-sm-4 img').attr('src')}
                description={`Dream11 today match prediction for ${jsonData.matchDetails.preview.replace(/:/g, '').trim().slice(7)}.Win big with accurate tips & best Dream11 team prediction, Today Dream11 Team Check out!`}
                keywords={`dream 11 team today,cricket prediction,today dream 11 team,cricket betting tips,dream 11 prediction,dream11 team today,dream 11 today team,best team for dream11 today match,who will win today ipl match,today ipl match prediction,dream11 today team,dream11 update,dream11 prediction,today dream11 team,dream11 prediction today match,who will win today match,who win today ipl match,my 11 circle team prediction today,cricket tips,online cricket betting tips,cricket betting tips free,cricket jackpot tips,today cricket match prediction tips,Today Live Toss prediction,cricket match prediction,free cricket match prediction,who will win today  match,fantasy cricket prediction,best prediction site,best prediction website`}
                canonical={`${"https://g11prediction.com/cricket-match-predictions"}/${modifystr(jsonData.matchDetails.preview.replace(/:/g, '').trim().slice(7)) + "-dream11-prediction-today-match"}/${props.idIndex}/`}
            >
            </Seo>}
            <MatchPriview props={props} slug={jsonData.matchDetails.preview.replace(/:/g, '').trim().slice(7)} SetSeoData={SetSeoData} seoData={seoData} ></MatchPriview>
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

    if (ctx.params.slug[0] === "cricket-prediction") {

        const idIndex = checkString(ctx.params.slug[3]) ? checkString(ctx.params.slug[3]) : checkString(ctx.params.slug[4]);
        const url = "https://grand11.in/g11/api/page/match_details/" + idIndex;
        const topNewsRes = await fetch('https://www.g11fantasy.com/NewsSection/Get-TopNews/1');
        const topNews = await topNewsRes.json();
        // Parse the JSON

        try {
            const response = await axios.get(url, { cache: 'force-cache' | 'no-store' });
            const props = response.data;
            // setmatchpreviwe(a)
            return { props: { MatchData: props, topNews, idIndex } };
        } catch (error) {
            console.error("Error fetching data:", error);
            return { props: { error: "Failed to fetch data" } };
        }
    }
    // console.log(ctx.params.slug[0] === "match-preview")

    else if (ctx.params.slug[0] === "teams" || ctx.params.slug[0] === "match-preview" || ctx.params.slug[0] === "team-guide" || ctx.params.slug[0] === "cheat-sheet") {
        const idIndex = checkString(ctx.params.slug[ctx.params.slug.length - 1]);

        const url = "https://grand11.in/g11/api/page/match_details/" + idIndex;
        const topNewsRes = await fetch('https://www.g11fantasy.com/NewsSection/Get-TopNews/1');
        const topNews = await topNewsRes.json();
        try {
            const response = await axios.get(url, { cache: 'force-cache' | 'no-store' });
            const props = response.data;
            // setmatchpreviwe(a)
            return { props: { MatchData: props, topNews, idIndex } };
        } catch (error) {
            console.error("Error fetching data:", error);
            return { props: { error: "Failed to fetch data" } };
        }
    }
    else {
        const idIndex = checkString(ctx.params.slug[0]) ? checkString(ctx.params.slug[0]) : checkString(ctx.params.slug[ctx.params.slug.length - 1]);
        const url = "https://grand11.in/g11/api/page/match_details/" + idIndex;
        const topNewsRes = await fetch('https://www.g11fantasy.com/NewsSection/Get-TopNews/1');
        const topNews = await topNewsRes.json();
        try {
            const response = await axios.get(url, { cache: 'force-cache' | 'no-store' });
            const props = response.data;
            // setmatchpreviwe(a)
            return { props: { MatchData: props, topNews, idIndex } };
        } catch (error) {
            console.error("Error fetching data:", error);
            return {
                redirect: {
                    destination: '/404',
                    permanent: false, // Set to true for permanent redirection
                },
            };
        }
    }
}

export default Matchguide;