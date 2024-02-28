import axios from "axios"
import Head from 'next/head';
import Card from "./../../../Component/card/index"
import dynamic from 'next/dynamic'
const Details = dynamic(() => import('../../../Component/Details/Details'));
import { useRouter } from "next/router";
import { Seo } from "../../../Component/Seo/Seo";

export default function Detailpage(props) {
    return (
        <>
            {
                props?.l.map((data, index) => {
                    return (
                        <>
                            <Seo
                                image={data?.Image}
                                title={data?.Meta_title}
                                description={data?.Meta_Description}
                                keywords={"Cricket Betting Tips & Predictions"}
                            ></Seo>
                            <Details data={data} ></Details>
                        </>
                    )
                })

            }
            {/* <Card query={router.query.dynamicslug} ></Card> */}
        </>
    )

}


export async function getServerSideProps(ctx) {
    try {
        const res = await axios.get(`https://www.g11fantasy.com/NewsSection/Get-Newsbyid/${ctx.params.index}`);
        let l = res.data.data
        return { props: { l } };
    }
    catch (error) {
        console.error("Error fetching data:", error);
        return { props: { error: "Failed to fetch data" } };
    }

}
