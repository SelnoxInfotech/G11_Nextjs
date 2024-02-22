import React from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';

const MatchPriview = dynamic(() => import('../../../../Component/MatchPriview/MatchPriview'));

function Matchguide({ props }) {
    console.log(props)
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

    const idIndex = checkString(ctx.params.id[2]) ?  checkString(ctx.params.id[2]) :  checkString(ctx.params.id[3]);
    const url = "https://grand11.in/g11/api/page/match_details/" + ctx.params.id[idIndex];

    try {
        const response = await axios.get(url);
        const props = response.data;
        return { props: { props } };
    } catch (error) {
        console.error("Error fetching data:", error);
        return { props: { error: "Failed to fetch data" } };
    }
}

export default Matchguide;