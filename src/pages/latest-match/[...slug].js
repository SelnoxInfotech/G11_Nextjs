import React from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { Seo } from '../../Component/Seo/Seo';

const MatchPriview = dynamic(() => import('../../Component/MatchPriview/MatchPriview'), { ssr: true });

function Matchguide(props) {
    console.log(props)
    return (
        <div>
            <Seo
                image={"https://www.g11fantasy.com/image/images/download/media/Static/favicon.jpg"}
                title={"G11- Fantasy Cricket Prediction for Today's Match |"}
                description={"G11- Fantasy Cricket Prediction for Today's Match. Dream11, My11Circle, Playerzpot, Howzat, Gamezy and Many More apps. Dream 11 Tips Cricket Prediction."}
                keywords={"G11- Fantasy Cricket Prediction for Today's Match. Dream11, My11Circle, Playerzpot, Howzat, Gamezy and Many More apps. Dream 11 Tips Cricket Prediction."}
            ></Seo>
            <MatchPriview props={props}></MatchPriview>
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

    const idIndex = checkString(ctx.params.slug[3]) ? checkString(ctx.params.slug[3]) : checkString(ctx.params.slug[4]);
    console.log(idIndex)
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

export default Matchguide;