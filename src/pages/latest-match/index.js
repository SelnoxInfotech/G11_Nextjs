import React, { useState } from "react";
import Link from "next/link";
import axios from "axios"
import Head from 'next/head';
import Senglepage from "../../Component/MatchPriview/Senglepage";
import { Seo } from "../../Component/Seo/Seo";
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
                title="Today's Match | G11 | Fantasy Cricket Betting Prediction"
                description={"Today's Match updates, G11 Fantasy Cricket Betting Prediction Site and Application. Dream11, My11Circle, Playerzpot, Howzat, Gamezy and Many More apps"}
                keywords={"Dream11 team prediction, My11Circle prediction, cricket betting tips, Dream 11 prediction, howzat today team prediction, Playerzpot prediction, prediction for today match, My11Circle cricket team prediction, Dream11 prediction today match, howzat team prediction today match, Playerzpot Fantasy Cricket prediction, Dream11 cricket team prediction, My11Circle prediction today match, Playerzpot Circle team prediction, howzat team prediction, Today Match Prediction, howzat prediction today's match"}></Seo>
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

