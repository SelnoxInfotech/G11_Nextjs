
import React, { useEffect, useState } from 'react';
import style from "../../styles/Style.module.scss"
import { useRouter } from 'next/router'
import Seo from '../Seo/Seo';
import TableOfContent from '../tableofcontent/index';
function MatchPriview(props) {
    const router = useRouter()
    const [matchpreviwe, setmatchpreviwe] = useState("")
    const [Team_Guide, Set_Team_Guide] = useState('')
    const [Detail, SetDetails_Data] = useState('')
    const [Teams_image, SetTeams_image] = useState('')
    const [metaDiscription, SetmetaDiscription] = useState('')
   
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
    useEffect(() => {
      
        var parser = new DOMParser();
        var doc = parser.parseFromString(props?.props?.MatchData, 'text/html');
        // HTML section//// 
        var parserhtm = doc.querySelectorAll('section');
        //  container /////
        var container = parserhtm[1].querySelector(".container")
        var containerData = container.querySelectorAll(".row")[1]
        var a = containerData.querySelector("div").innerHTML
        setmatchpreviwe(a)
        const list = containerData.querySelector("div")?.getElementsByTagName("*")
        for (let i = 0; i < list.length; i++) {
            list[i]?.innerHTML === "Preview :" && SetmetaDiscription(list[i + 1]?.innerText + list[i + 2]?.innerText)
        };
        // Team section///
        var Team = parserhtm[1].querySelector(".container")
        var TeamsData = Team.querySelectorAll(".row")[1]
        var ab = TeamsData.querySelectorAll("div")
        var team = ab[1].innerHTML
        Set_Team_Guide(team)
        // Details Analysis
        var Details = parserhtm[1].querySelector(".container")
        var Details_Analysis = Details.querySelectorAll(".row")[1]
        var ALLDetails = Details_Analysis.querySelectorAll("div")
        var Details_Data = ALLDetails[2].innerHTML
        SetDetails_Data(Details_Data)
        //  Teams image //
        var Teams = parserhtm[1].querySelector(".container")
        var Teams_ = Teams.querySelectorAll(".row")[1]
        var TeamsData1 = Teams_.querySelectorAll("div")
        var Team_data = TeamsData1[4].innerHTML
        SetTeams_image(Team_data)
        const input = containerData.querySelector("div >p").innerHTML.split(":")[1]
        const f = containerData.querySelector("div >h3").innerHTML;
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
          
        }
    
        else if(checkString(router.query.slug[0])){
            const newURL = `/cricket-match-predictions/${modifystr(input + "-dream11 prediction today match")}/${router.query.slug[0]}/`;
                window.history.replaceState({}, '', newURL);
        }
        else {

            if (router.asPath.slice(0, 13) === "/latest-match" || checkString(router.query.slug[2])) {

                const newURL = `/cricket-match-predictions/${modifystr(input + "-dream11 prediction today match")}/${router.query.slug[2]}/`;
                window.history.replaceState({}, '', newURL);
            }
        }

        SetTitle(input)
    }, [])



    return (
        <div>
            <Seo
            title={`${Title1} Dream11 Prediction Today Match | Dream11 Team Today`}
                image={"/image/images/download/media/Static/favicon.jpg"}
                description={`Dream11 today match prediction for ${Title1}.Win big with accurate tips & best Dream11 team prediction, Today Dream11 Team Check out!`}
                keywords={`dream 11 team today,cricket prediction,today dream 11 team,cricket betting tips,dream 11 prediction,dream11 team today,dream 11 today team,best team for dream11 today match,who will win today ipl match,today ipl match prediction,dream11 today team,dream11 update,dream11 prediction,today dream11 team,dream11 prediction today match,who will win today match,who win today ipl match,my 11 circle team prediction today,cricket tips,online cricket betting tips,cricket betting tips free,cricket jackpot tips,today cricket match prediction tips,Today Live Toss prediction,cricket match prediction,free cricket match prediction,who will win today  match,fantasy cricket prediction,best prediction site,best prediction website`}
                canonical={`${"https://g11prediction.com/cricket-match-predictions"}/${modifystr(Title1) +"-dream11-prediction-today-match"}/${router.query.slug[1] || router.query.slug[0]}/`}
            >
            </Seo>
             
            <div className={`${style.matchpage} container py-5`}>
                 <h1 className={`${style.matchPrivewTitle} mb-5`}>{Title1 + " , dream11 prediction today match, dream 11 prediction , Fantasy Cricket Tips, Playing XI, Pitch Report, Injury Update "}</h1>
                     
                <div className='row mt-3'>
                     <div className='col-lg-8' >
                           
                       <div className={style.font} dangerouslySetInnerHTML={{ __html: matchpreviwe.split('&nbsp;').join('') }}></div>
                       <div className={style.font} dangerouslySetInnerHTML={{ __html: Team_Guide.split('&nbsp;').join('') }}></div>
                       <div className={style.font} dangerouslySetInnerHTML={{ __html: Detail.split('&nbsp;').join('') }}></div>
                       <div className={style.pridctionImageSection}>
                          <div className='Teams_image_full img-thumbnail' dangerouslySetInnerHTML={{ __html: Teams_image }}></div>
                       </div>
                     </div>
                     <div className='col-lg-4 '>
                      
                        <TableOfContent  props={props.props.topNews.slice(0,5)}/>
                     </div>
                </div>
             </div>
        </div>
    );
}

export default MatchPriview;
  
