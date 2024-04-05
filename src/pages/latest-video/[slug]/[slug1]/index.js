import React from 'react';
import Videodetails from "../../../../Component/Details/Videodetails"
import _ from "lodash";
import style from "../../../../styles/Style.module.scss"
import Link from 'next/link';
import Seo from '../../../../Component/Seo/Seo';
import { GoDotFill } from "react-icons/go";
import { useRouter } from "next/router";
function Index({ data }) {
    function modifystr(str) {

        str = str?.replace(/[^a-zA-Z0-9/ ]/g, "-");
        str = str?.trim().replaceAll(' ', "-");
        let a = 0;
        while (a < 1) {
            if (str?.includes("--")) {
                str = str?.replaceAll("--", "-")
            } else if (str?.includes("//")) {
                str = str?.replaceAll("//", "/")
            } else if (str?.includes("//")) {
                str = str?.replaceAll("-/", "/")
            } else if (str?.includes("//")) {
                str = str?.replaceAll("/-", "/")
            } else {
                a++
            }
        }

        return str?.toLowerCase()
    }
    return (
        <div className={style.breaknewssidebar}>
            <h4 className={style.breaknewssidebartitle}>Recent News</h4>
            <div className={style.breaknewssidebarList}>
                {data?.map((item, index) => {
                    return <Link key={index} href={`/latest-video/${modifystr(item?.Translated_Title)}/${item.id}`}>
                          <div className={style.toclistItem}>
                            <span className={style.listiconsdot}> <GoDotFill /></span>
                            <h2 className={style.breaknewssidebarListitem}>{item.Title}</h2>
                         </div>
                        </Link>
                })}
            </div>
        </div>
    )
}

function Index1(props) {
    const router = useRouter();
React.useEffect(()=>{
    function modifystr(str) {

        str = str?.replace(/[^a-zA-Z0-9/ ]/g, "-");
        str = str?.trim().replaceAll(' ', "-");
        let a = 0;
        while (a < 1) {
            if (str?.includes("--")) {
                str = str?.replaceAll("--", "-")
            } else if (str?.includes("//")) {
                str = str?.replaceAll("//", "/")
            } else if (str?.includes("//")) {
                str = str?.replaceAll("-/", "/")
            } else if (str?.includes("//")) {
                str = str?.replaceAll("/-", "/")
            } else {
                a++
            }
        }

        return str?.toLowerCase().trim('-')
    }
    router.replace(`/latest-video/${modifystr(props?.initialData?.Translated_Title)}/${props?.initialData?.id}`)
},[])
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-12">
                    <React.Fragment >
                        <Seo
                            image={"https://www.g11fantasy.com/image/images/download/media/Static/favicon.jpg"}
                            title={"Video News | G11 Fantasy Cricket Prediction |"}
                            description={"Video Breaking News on latest cricket updates. G11 Fantasy Cricket Prediction Website and Application for Today's match. # 1 Dream11 Fantasy Cricket Prediction tips."}
                            keywords={"fantasy cricket prediction"}
                            canonical={"https://g11prediction.com/latest-video"}
                        ></Seo>
                        <Videodetails data={props.initialData} />
                    </React.Fragment>
                </div>
                <div className="col-lg-4 col-12">
                    <Index data={props.fulldata} />
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps(ctx) {
    try {
        const [topNewsRes] = await Promise.all([
            fetch(`
      https://www.g11fantasy.com/NewsSection/Get-VideoNews/`),
        ]);

        const [topNews] = await Promise.all([
            topNewsRes.json(),
        ]);

        const responseData = {
            breaking: topNews.data,
        };
        function checkString(string) {
            if (typeof string === "string") {
                return !isNaN(string)
            }
        }
        const LatestVideo = responseData.breaking
        const find = _.find(LatestVideo, LatestVideo => LatestVideo.id ===( checkString(ctx.query.slug1) ? parseInt(ctx.query.slug1) : parseInt(ctx.query.slug)))
          
        return {
            props: {
                initialData: find,
                fulldata: responseData.breaking.slice(0, 10)
            },
        };

    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            props: {
                initialData: null,
                error: 'Failed to fetch data',
            },
        };
    }
}
export default Index1;