import axios from "axios"
import Head from 'next/head';
import Card from "./../../../Component/card/index"
import dynamic from 'next/dynamic'
const Details = dynamic(() => import('../../../Component/Details/Details'), { ssr: false, loading: () => <p>Loading...</p> });
import { useRouter } from "next/router";
import { Seo } from "@/Component/Seo/Seo";
export default function Detailpage({ props, props1 }) {
    const router = useRouter();
    return (
        <>
            {
                props?.map((data, index) => {
                    return (
                        <>
                            <Seo  image={data?.Image} title={data. Meta_title} description={ data.Meta_Description} keywords={"Cricket Betting Tips & Predictions"}></Seo>
                            <Details data={data} ></Details>
                        </>
                    )
                })

            }
            <Card props={props1} query={router.query.dynamicslug} ></Card>
        </>
    )

}


export async function getServerSideProps(ctx) {
    try {
        let props = []
        let props1 = []
        let response
        let res
        switch (ctx.params.dynamicslug) {
            case "cricket-breaking-news":
                response = await axios.get(`https://www.g11fantasy.com/NewsSection/Get-Newsbyid/${ctx.params.index}`);
                props = response.data.data;
                res = await fetch('https://www.g11fantasy.com/NewsSection/Get-News/1')
                props1 = await res.json()
                break;
            case "ipl-2024":
                response = await axios.get(`https://www.g11fantasy.com/NewsSection/Get-Newsbyid/${ctx.params.index}`);
                props = response.data.data;
                res = await axios.get('https://g11fantasy.com/NewsSection/FilterbySubCategory/7')
                props1 = res.data.data;
                break;
            case "icc-cricket-world-cup-2024":
                response = await axios.get(`https://www.g11fantasy.com/NewsSection/Get-Newsbyid/${ctx.params.index}`);
                props = response.data.data;
                res = await axios.get('https://g11fantasy.com/NewsSection/FilterbySubCategory/8')
                props1 = res.data.data;
                break;

            default:
            // code block
        }

        return { props: { props, props1 } };

    } catch (error) {
        console.error("Error fetching data:", error);
        return { props: { error: "Failed to fetch data" } };
    }
}
