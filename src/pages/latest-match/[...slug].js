import React from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';

const MatchPriview = dynamic(() => import('../../Component/MatchPriview/MatchPriview') ,{ssr:false});

function Matchguide(props ) {
// console.log(props)
    return (
        <div>
            <MatchPriview props={props}></MatchPriview>
        </div>
    );
}

export async function getServerSideProps(ctx) {
    function checkString(string) {
        if(typeof string === "string" && !isNaN(string)){

            return string
        }
        else{
            return false
        }
    }

    const idIndex =  checkString(ctx.params.slug[3]) ?  checkString(ctx.params.slug[3])  :  checkString(ctx.params.slug[4]);
    console.log(idIndex)
    const url = "https://grand11.in/g11/api/page/match_details/" + idIndex;

    try {
        const response = await axios.get(url,    { cache: 'force-cache' | 'no-store' });
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