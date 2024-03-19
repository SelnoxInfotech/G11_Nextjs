
import React, { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import style from "../../styles/Style.module.scss"
import { useRouter } from 'next/router'
import { Seo } from '../Seo/Seo';


function MatchPriview({ props }) {
    const router = useRouter()
    const [matchpreviwe, setmatchpreviwe] = useState("")
    const [Team_Guide, Set_Team_Guide] = useState('')
    const [Detail, SetDetails_Data] = useState('')
    const [Teams_image, SetTeams_image] = useState('')
    const [metaDiscription, SetmetaDiscription] = useState('')
    const [Title1, SetTitle] = useState('')
    const [preview, Setpreview] = useState(() =>' match-preview ')


    // useEffect(()=>{
    //     Setpreview(router.query.slug[1])
    // },[])
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
        var doc = parser.parseFromString(props.props, 'text/html');
        // HTML section//// 
        var parserhtm = doc.querySelectorAll('section');
        //  container /////
        var container = parserhtm[1].querySelector(".container")
        var containerData = container.querySelectorAll(".row")[1]
        var a = containerData.querySelector("div").innerHTML
        setmatchpreviwe(a)
        const list = containerData.querySelector("div")?.getElementsByTagName("*")
        for (let i = 0; i < list.length; i++) {
            list[i].innerHTML === "Preview :" && SetmetaDiscription(list[i + 1].innerText + list[i + 2].innerText)
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
        const input = containerData.querySelector("div >p").innerHTML.slice(26)
        const f = containerData.querySelector("div >h3").innerHTML;
        function checkString(string) {
            if (typeof string === "string") {
                return !isNaN(string)
            }
        }
        console.log(router.query.slug[0] === "cricket-prediction" , router.query)
        if(router.query.slug[0] === "cricket-prediction"){
            if (checkString(router.query.slug[4])) {

                const newURL = `/cricket-match-predictions/${router.query.slug[1]}/${router.query.slug[2]}/${modifystr(input)}/${router.query.slug[4]}`;
                window.history.replaceState({}, '', newURL);
            }
        }
        else{
            const newURL = `/cricket-match-predictions/${router.query.slug[0]}/${router.query.slug[1]}/${modifystr(input)}/${router.query.slug[2]}`;
                window.history.replaceState({}, '', newURL);
        }
      
        SetTitle(modifystr(input))
    }, [])
    const TaBFunction = (e) => {
        const l = e.target.innerText === "Match Preview" ? "match-preview" : e.target.innerText === "Team Guide" ? "team-guide" : e.target.innerText === "Cheat sheet" ? "cheat-sheet" : e.target.innerText === "Teams" && "teams"
        Setpreview(() => l)
        function checkString(string) {
            return typeof string === "string" && !isNaN(string)
        }
console.log(router.query)
//         if (checkString(router.query.slug[3])) {
            window.history.replaceState({}, '', `/cricket-match-predictions/${l}/${router.query.slug[1]}/${Title1}/${router.query.slug[3]}`);
        // }
        // else {
        //     window.history.replaceState({}, '', `/cricket-match-predictions/${l}/${router.query.slug[1]}/${Title1}}/${router.query.slug[2]}`);
        // }

    }

    return (
        <div>
            <Seo
                image={"/image/images/download/media/Static/favicon.jpg"}
                description={preview === "match-preview" ? metaDiscription.slice(0, 160)
                    : preview === "team-guide" ? `${Title1?.replace(/\-+/g, ' ').slice(26)}` + " " + "team guide cricket prediction by G11 Fantasy Cricket Betting Prediction Site and Application"
                        : preview === "cheat-sheet" ? `${Title1?.replace(/\-+/g, ' ').slice(26)}` + " " + "Cheet Sheet cricket prediction by G11 Fantasy Cricket Betting Prediction Site and Application"
                            : preview === "teams" && `${Title1?.replace(/\-+/g, ' ').slice(26)}` + " " + "Teams cricket prediction by G11 Fantasy Cricket Betting Prediction Site and Application"}
                title={`${preview?.replace('-', ' ')} | ${Title1?.replace(/\-+/g, ' ').slice(26)} | Cricket Prediction | `}
                keywords={`dream 11 team today,cricket prediction,today dream 11 team,cricket betting tips,dream 11 prediction,dream11 team today,dream 11 today team,best team for dream11 today match,who will win today ipl match,today ipl match prediction,dream11 today team,dream11 update,dream11 prediction,today dream11 team,dream11 prediction today match,who will win today match,who win today ipl match,my 11 circle team prediction today,cricket tips,online cricket betting tips,cricket betting tips free,cricket jackpot tips,today cricket match prediction tips,Today Live Toss prediction,cricket match prediction,free cricket match prediction,who will win today  match,fantasy cricket prediction,best prediction site,best prediction website`}          
                canonical={`${"cricket-match-predictions"}/${router.query.slug[0]+"/"+preview+"/"+router.query.slug[2]+"/"+Title1+"/"+router.query.slug[3]}`}
                >
            </Seo>
            <Tabs
                defaultActiveKey={preview}
                id="uncontrolled-tab-example"
                className={style.matchpriviewtab}
                onClick={TaBFunction}>
                < Tab className='color' eventKey="match-preview" title={preview === "match-preview" ? <h1 className={`${style.match_priview}`} >Match Preview</h1> : <h2 className={`${style.match_priview}`}>Match Preview</h2>} >
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 ' >

                                <div className={style.font} dangerouslySetInnerHTML={{ __html: matchpreviwe }}></div>
                            </div>
                        </div>
                    </div>
                </Tab>
                < Tab className='color' eventKey="team-guide" title={preview === "team-guide" ? <h1 className={`${style.match_priview}`} >Team Guide</h1> : <h2 className={`${style.match_priview}`}>Team Guide</h2>} >
                    <div className='container' >
                        <div className='row'>
                            <div className='col-12'>
                                <div className={style.font} dangerouslySetInnerHTML={{ __html: Team_Guide }}></div>
                            </div>
                        </div>
                    </div>
                </Tab>

                < Tab className='color' eventKey="cheat-sheet" title={preview === "cheat-sheet" ? <h1 className={`${style.match_priview}`} >Cheat sheet</h1> : <h2 className={`${style.match_priview}`}>Cheat sheet</h2>}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 '>
                                <div className={style.font} dangerouslySetInnerHTML={{ __html: Detail }}></div>
                            </div>
                        </div>
                    </div>
                </Tab>
                < Tab className='color' eventKey="teams" title={preview === "teams" ? <h1 className={`${style.match_priview}`} >Teams</h1> : <h2 className={`${style.match_priview}`}>Teams</h2>}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='Teams_image_full img-thumbnail' dangerouslySetInnerHTML={{ __html: Teams_image }}></div>
                            </div>
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
}

export default MatchPriview;