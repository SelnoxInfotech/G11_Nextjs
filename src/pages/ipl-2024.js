import React from 'react';
import Card from "../Component/card/index"
import { Seo } from '../Component/Seo/Seo';

const Ipl2024 = (props) => { 


    return (
        <>
            <Seo
                title={"Get IPL 2024 Latest News, Predictions, Analysis On G11predictions"}
                description={"PL 2024 Live Updates, Latest News, Match Predictions, IPL 2024 Match Schedule, Venue Details, Points Table, Match Analysis And Much More Only On G11prediction"}
                keywords={"IPL 2024,IPL schedule 2024, IPL teams 2024, IPL venues 2024, Dream11 prediction, IPL 2024 match prediction, IPL 2024"}
            ></Seo>
            <Card props={props.l.data} query={"ipl-2024"}></Card>
        </>
    );
};

export default Ipl2024;

export const getServerSideProps = async (context) => {

    const res = await fetch('https://g11fantasy.com/NewsSection/FilterbySubCategory/7')
    const props = await res.json()
    console.log("adsfggafgafs ipl 2024")
    const l = props

    return { props: { l } }


}