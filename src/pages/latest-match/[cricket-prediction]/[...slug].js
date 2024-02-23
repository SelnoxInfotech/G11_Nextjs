import React from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';

const MatchPriview = dynamic(() => import('../../../Component/MatchPriview/MatchPriview') ,{ssr:false});

function Matchguide({ props }) {

    return (
        <div>
            <p>{props}</p>
            <MatchPriview props={props}></MatchPriview>
        </div>
    );
}

export async function getServerSideProps(ctx) {
    console.log("dsfgds");

    function checkString(string) {
        return typeof string === "string" && !isNaN(string);
    }

    const idIndex = checkString(ctx.params.slug[2]) ?  checkString(ctx.params.slug[2]) :  checkString(ctx.params.slug[3]);
    const url = "https://grand11.in/g11/api/page/match_details/" + ctx.params.slug[idIndex];

    try {
        const response = await axios.get(url,    { cache: 'force-cache' | 'no-store' });
        const props = response.data;
   
        // setmatchpreviwe(a)
        return { props: { props } };
    } catch (error) {
        console.error("Error fetching data:", error);
        return { props: { error: "Failed to fetch data" } };
    }
}

export default Matchguide;