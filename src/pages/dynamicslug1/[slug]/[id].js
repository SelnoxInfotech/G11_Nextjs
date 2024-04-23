import { useRouter } from "next/router";

function President({ president }) {
    const router = useRouter();

    if (router.isFallback) {
        return <h2>The Page is loading...</h2>;
    }

    return (
        <>
            {
                president?.data.map((data , index) => {
                    return <p key={index}>{data.id}</p>
                })
            }
        </>
    );
}

export async function getStaticPaths() {
    // Fetch a list of all presidents
    const res = await fetch('https://www.g11fantasy.com/NewsSection/Get-News/1');
    const presidents = await res.json();
    // console.log("dsfsdfs" , presidents)
    //     // Get the paths we want to pre-render based on presidents
    const paths = presidents?.map(president => ({

        params: {
            dynamicslug:
                president.subcategoy_name === "IPL 2024" ? "ipl-2024"
                    : president.subcategoy_name === "IPL 2024 Prediction" ? "/ipl-2024-dream11-predictions/"
                        : president.subcategoy_name === "Breaking News" ? "/cricket-breaking-news/"
                            : president.subcategoy_name === "Fantasy Cricket Tips" ? "/fantasy-cricket-tips/"
                                : president.subcategoy_name === "ICC T20 WORLD CUP 2024" ? "/icc-cricket-world-cup-2024/"
                                    : president.subcategoy_name === "cricket rules and regulation" ? "/cricket-rules-and-regulation/"
                                        : president.subcategoy_name === "Cricket Players" ? "/cricket-players/"
                                            : president.subcategoy_name === "ICC Cricket World Cup 2023" ? "/icc-cricket-world-cup-2023/"
                                                : president.subcategoy_name === "IPL 2023" ? "ipl-2023" 
                                                 : president.subcategoy_name === (null || undefined) && "cricket-news"
            ,
            slug: president?.Title, id: president?.id.toString()
        } // Ensure that both `id` and `slug` are defined


    }));
    // console.log(president?.subcategoy_name)
    // console.log(paths)
    // We'll pre-render only these paths at build time.
    // { fallback: true } means other routes should 404.
    return { paths, fallback: true };
}
export async function getStaticProps({ params }) {
    // Fetch president data based on the id
    const res = await fetch(`https://www.g11fantasy.com/NewsSection/Get-Newsbyid/${params.id}`);
    const president = await res.json();
    // Pass president data to the component props
    return { props: { president } };
}

export default President;
