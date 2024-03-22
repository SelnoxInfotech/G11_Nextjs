"use client"
import React from 'react'
import style from '../../styles/Style.module.scss'
import Link from 'next/link';


export default function Index ({props}){
    console.log(props)
    const [recentnews, setrecentnews] = React.useState([]);

    // React.useEffect(() => {
    //     const apicalling = async () => {
    //         const topNewsRes = await fetch('https://www.g11fantasy.com/NewsSection/Get-News/1');
    //         const topNews = await topNewsRes.json();
    //         setrecentnews(topNews.slice(0, 5))
    //     }
    //     apicalling()

    // }, [])
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

                {
                    props?.map((item , index) => {
                        return <Link key={index} href={`/cricket-breaking-news/${item?.urlslug !== (null || undefined) ? modifystr(item?.urlslug) : modifystr(item?.Title || item?.title)}/${item.id}`}><h2 className={style.breaknewssidebarListitem}>{item.Title}</h2></Link>
                    })
                }
            </div>
        </div>
    )
}


