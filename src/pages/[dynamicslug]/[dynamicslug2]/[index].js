import axios from "axios"
import Head from 'next/head';
import Card from "./../../../Component/card/index"
import dynamic from 'next/dynamic'
const Details = dynamic(() => import('../../../Component/Details/Details'));
import { useRouter } from "next/router";
import { Seo } from "../../../Component/Seo/Seo";
import { fetchData2byid } from '../../api/utils/api';
export default function Detailpage(props) {
    const router = useRouter();
    return (
        <>
            {
                props?.data1[0].map((data, index) => {
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
            <Card  query={router.query.dynamicslug} ></Card>
        </>
    )

}


export async function getServerSideProps(ctx) {
    try {
        let data1 = await Promise.all([
            fetchData2byid(ctx.params.index),
        ]);
        return { props:  {data1}  };
    }
    catch (error) {
        console.error("Error fetching data:", error);
        return { props: { error: "Failed to fetch data" } };
    }

}
