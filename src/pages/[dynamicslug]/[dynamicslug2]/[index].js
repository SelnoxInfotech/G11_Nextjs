import axios from "axios"
import Head from 'next/head';
import Card from "./../../../Component/card/index"
import dynamic from 'next/dynamic'
const Details = dynamic(() => import('../../../Component/Details/Details'), { ssr: true, loading: () => <p>Loading...</p> });
import { useRouter } from "next/router";
export default function Detailpage({ props, props1 }) {
    const router = useRouter();
    return (
        <>
            {
                props?.map((data, index) => {
                    return (
                        <>
                            <Head>
                                <title>Breaking news</title>
                                <meta property="og:image" content={`https://www.g11fantasy.com${data?.Image}`} />

                                <meta property="og:title" content={data.Title} />

                                <meta property="og:description" content="A full description of the page." />

                                <meta property="og:image:width" content="1200" />

                                <meta property="og:image:height" content="630" />

                            </Head>
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
