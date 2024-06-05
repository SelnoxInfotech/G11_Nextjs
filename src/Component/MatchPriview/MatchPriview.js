
import React, { useEffect, useState } from 'react';
import style from "../../styles/Style.module.scss"
import { useRouter } from 'next/router'
import TableOfContent from '../tableofcontent/index';
import Image from 'next/image';
function MatchPriview(props) {
    const router = useRouter()
    const [Title1, SetTitle] = useState('')
    function modifystr(str) {
        str = str.replace(/[^a-zA-Z0-9/ ]/g, "-");
        str = str.trim().replaceAll(' ', "-");
        let a = 0;
        while (a < 1) {
            if (str.includes("--")) {
                str = str.replaceAll("--", "-")
            } else if (str.includes("//")) {
                str = str.replaceAll("//", "/")
            } else if (str.includes("//")) {
                str = str.replaceAll("-/", "/")
            } else if (str.includes("//")) {
                str = str.replaceAll("/-", "/")
            } else {
                a++
            }
        }

        return str.toLowerCase()
    }

   
    // Example usage

    

    useEffect(() => {
        const input = props.slug
        props.SetSeoData({...props.seoData , image:props.props.dataImage  , Title:input })
        function checkString(string) {
            if (typeof string === "string") {
                return !isNaN(string)
            }
        }
        if (router.query.slug[0] === "cricket-match-predictions") {
            if (checkString(router.query.slug[4])) {

                const newURL = `/cricket-match-predictions/${modifystr(input + "-dream11 prediction today match")}/${router.query.slug[4]}/`;
                window.history.replaceState({}, '', newURL);
            }
            else if (router.asPath.slice(0, 13) === "/latest-match") {
                const newURL = `/cricket-match-predictions/${modifystr(input + "-dream11 prediction today match")}/${router.query.slug[3]}/`;
                window.history.replaceState({}, '', newURL);
            }
            //    cricket-match-predictions/match-preview/undefined/1673/ 

        }

        else if (checkString(router.query.slug[0])) {
            const newURL = `/cricket-match-predictions/${modifystr(input + "-dream11 prediction today match")}/${router.query.slug[0]}/`;
            window.history.replaceState({}, '', newURL);
        }
        else if (router.query.slug[0] === "teams" || router.query.slug[0] === "match-preview" || router.query.slug[0] === "team-guide" || router.query.slug[0] === "cheat-sheet") {

            const newURL = `/cricket-match-predictions/${modifystr(input + "-dream11 prediction today match")}/${router.query.slug[router.query.slug.length - 1]}/`;
            window.history.replaceState({}, '', newURL);
        }

        else {

            if (router.asPath.slice(0, 13) === "/latest-match" || checkString(router.query.slug[2])) {

                const newURL = `/cricket-match-predictions/${modifystr(input + "-dream11 prediction today match")}/${router.query.slug[2]}/`;
                window.history.replaceState({}, '', newURL);
            }
            else {
                const newURL = `/cricket-match-predictions/${modifystr(input + "-dream11 prediction today match")}/${router.query.slug[router.query.slug.length - 1]}/`;
                window.history.replaceState({}, '', newURL);
            }

        }

        SetTitle(props.slug)
    }, [])
    const imageLoader = ({ src, width, height, quality }) => {
  
            return (`${src}?w=${width}&h=${height}&q=${quality || 100}`)
    }


    return (
        <div>
            <div className={`${style.matchpage} container py-5`}>
                <h1 className={`${style.matchPrivewTitle} mb-5`}>{props.props.matchTitle + " , dream11 prediction today match, dream 11 prediction , Fantasy Cricket Tips, Playing XI, Pitch Report, Injury Update "}</h1>

                <div className='row mt-3'>
                    <div className='col-lg-8 ' >
                            <Image className='mb-4' alt={Title1 + " , dream11 prediction today match, dream 11 prediction , Fantasy Cricket Tips, Playing XI, Pitch Report, Injury Update "} loader={imageLoader} src={props.props.dataImage} style={{width:"100%" }} width={100} height={10} quality={10}></Image>
                        <div className={style.font} dangerouslySetInnerHTML={{ __html: props.matchPreview.split('&nbsp;').join('') }}></div>
                        <div className={style.pridctionImageSection}>
                        </div>
                    </div>
                    <div className='col-lg-4 '>
                        <TableOfContent props={props.props.topNews.slice(0, 5)} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MatchPriview;




