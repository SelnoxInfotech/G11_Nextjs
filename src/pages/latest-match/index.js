import React, { useState } from "react";
import Link from "next/link";
import axios from "axios"
import Head from 'next/head';
import Senglepage from "../../Component/MatchPriview/Senglepage";
import { Seo } from "../../Component/Seo/Seo";
export default function UpdateMatch({ props, ImageData }) {

    return (
        <>
            <Seo
                image={ImageData[9].image}
                title="Today's Match | G11 | Fantasy Cricket Betting Prediction"
                description={"Today's Match updates, G11 Fantasy Cricket Betting Prediction Site and Application. Dream11, My11Circle, Playerzpot, Howzat, Gamezy and Many More apps"}
                keywords={"Dream11 team prediction, My11Circle prediction, cricket betting tips, Dream 11 prediction, howzat today team prediction, Playerzpot prediction, prediction for today match, My11Circle cricket team prediction, Dream11 prediction today match, howzat team prediction today match, Playerzpot Fantasy Cricket prediction, Dream11 cricket team prediction, My11Circle prediction today match, Playerzpot Circle team prediction, howzat team prediction, Today Match Prediction, howzat prediction today's match"}></Seo>
            <Senglepage props={props} image={ImageData}></Senglepage>

        </>
        
    );
}

export async function getServerSideProps(ctx) {

    const url = "https://grand11.in/g11/all_matches_api.php"
    const Image = await fetch('https://www.g11fantasy.com/NewsSection/Get-StaticImage/')
    const Imageprops = await Image.json()
    const ImageData = Imageprops

    try {
        const response = await axios.get(url);
        const props = response.data;
        return { props: { props, ImageData } };
    } catch (error) {
        console.error("Error fetching data:", error);
        return { props: { error: "Failed to fetch data" } };
    }
}

