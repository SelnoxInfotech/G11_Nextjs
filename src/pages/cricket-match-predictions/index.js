import React, { useState } from "react";
import Link from "next/link";
import axios from "axios"
import Head from 'next/head';
import Senglepage from "../../Component/MatchPriview/Senglepage";
import  Seo  from "../../Component/Seo/Seo";
import useSWR from 'swr';
const fetcher = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
};


export default function UpdateMatch({ initialData }) { 
    const { data: fetchedData, error } = useSWR('/api/utils/latestmatch', fetcher, { initialData });

    const data = fetchedData || initialData;
    // if (error) return <div>Error loading data</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <>
            <Seo
                image={"https://www.g11fantasy.com/image/images/download/media/Static/favicon.jpg"}
                title={"Today Cricket Match Prediction & Dream11 Prediction - G11 prediction "}
                description={"G11 Prediction - Your trusted source for today's match prediction, Dream11  prediction, and expert updates. Get 100% free betting tips & accurate match predictions now! "}
                keywords={`dream 11 team today,cricket prediction,today dream 11 team,cricket betting tips,dream 11 prediction,dream11 team today,dream 11 today team,best team for dream11 today match,who will win today ipl match,today ipl match prediction,
                dream11 today team,dream11 update,dream11 prediction,today dream11 team,
                dream11 prediction today match,who will win today match,who win today ipl match,
                my 11 circle team prediction today,cricket tips,online cricket betting tips,cricket betting tips free,cricket jackpot tips,today cricket match prediction tips,Today Live Toss prediction,cricket match prediction,free cricket match prediction,who will win today  match,fantasy cricket prediction,best prediction site,best prediction website`}
                canonical={"https://g11prediction.com/cricket-match-predictions/"}
                ></Seo>
            <Senglepage props={data} ></Senglepage>

        </>

    );
}



export async function getStaticProps() {
    try {
        const [topNewsRes] = await Promise.all([
            fetch('https://grand11.in/g11/all_matches_api.php'),
        ]);

        const [topNews] = await Promise.all([
            topNewsRes.json(),
        ]);


        const responseData = {
            breaking: topNews,
        };
        return {
            props: {
                initialData: responseData.breaking.reverse(),
            },
        };

    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            props: {
                initialData: null,
                error: 'Failed to fetch data',
            },
        };
    }
}

