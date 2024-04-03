"use client"
import React from 'react'
import style from '../../styles/Style.module.scss'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { GoDotFill } from "react-icons/go";



export default function Index ({props , domain}){
  
    const router = useRouter()
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

    let redirect =  domain === "/cricket-news" ? "/cricket-news" : "/cricket-breaking-news"
    return (
        <div className={style.breaknewssidebar}>
            <h4 className={style.breaknewssidebartitle}>Recent News</h4>
            <div className={style.breaknewssidebarList}>

                {
                    props?.filter((items)=>{
                        return items.id != router.query.index
                    })?.map((item , index) => {
                        return <Link key={index} href={`${redirect}/${item?.urlslug !== (null || undefined) ? modifystr(item?.urlslug) : modifystr(item?.Title || item?.title)}/${item.id}`}>
                            <div className={style.toclistItem}>
                                <span className={style.listiconsdot}> <GoDotFill /></span>
                                <h2 className={style.breaknewssidebarListitem}>{item.Title || item?.title}</h2>
                            </div>
                            </Link>
                    })
                }
            </div>

        </div>
    )
}


