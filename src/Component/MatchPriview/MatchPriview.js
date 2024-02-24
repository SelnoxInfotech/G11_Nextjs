
import React, { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import style from "../../styles/Style.module.scss"
import { useRouter } from 'next/router'

function MatchPriview({ props }) {
    const router = useRouter()
    console.log("indise client slide ", props, router?.query?.slug[2])
    const [matchpreviwe, setmatchpreviwe] = useState("")
    const [Team_Guide, Set_Team_Guide] = useState('')
    const [Detail, SetDetails_Data] = useState('')
    const [Teams_image, SetTeams_image] = useState('')
    const [metaDiscription, SetmetaDiscription] = useState('')
    const [Title1, SetTitle] = useState('')
    let preview = router.query.slug[0]

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
        console.log("indise use effect")
        const params = new URLSearchParams(window?.location?.search);
        var parser = new DOMParser();
        var doc = parser.parseFromString(props, 'text/html');
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
        const input = `containerData.querySelector("div >p").innerHTML.slice(26);`
        const f = containerData.querySelector("div >h3").innerHTML;
        function checkString(string) {
            if (typeof string === "string") {
                return !isNaN(string)
            }
        }
        console.log("sdkfjsdlkfjlksdf")
        // if (!checkString(router.query.id[3])) {

        //     const newURL = `/latest-match/cricket-prediction/${modifystr(f)}/${router.query.id[1]}/${modifystr(input)}/${router.query.id[2]}`;
        //     window.history.replaceState({}, '', newURL);
        // }
        SetTitle(modifystr(input))
    }, [])
    // const handlelessImage = () => {
    //     setNext(next - imagePerRow);
    // };

   const TaBFunction = (e) => {
        console.log("function calll")
        function checkString(string) {
            if (typeof string === "string") {
                // console.log(!isNaN(string),788);
                return !isNaN(string)
            }
        }
        if (checkString(router.query.id[2])) {
            window.history.replaceState({}, '', `/latest-match/cricket-prediction/${e.target.innerText.replace(/\s+/g, '-').toLowerCase()}/${Title1}/${router.query.id[1]}/${router.query.id[2]}`);
        }
        else {
            window.history.replaceState({}, '', `/latest-match/cricket-prediction/${e.target.innerText.replace(/\s+/g, '-').toLowerCase()}/${Title1}/${router.query.id[1]}/${router.query.id[3]}`);
        }
    }
    return (
        <div>
            <p>render</p>
            <Tabs
                defaultActiveKey={router.query.slug[0]}
                id="uncontrolled-tab-example"
                className={style.matchpriviewtab}
                onClick={TaBFunction}>
                < Tab className='color' eventKey="match-preview" title={preview === "match-preview" ? <h1 className={`${style.match_priview}`} >Match Preview</h1> : <h2 className={`${style.match_priview}`}>Match Preview</h2>} >
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 ' >
                                <div className={style.font} dangerouslySetInnerHTML={{ __html: matchpreviwe }} >


                                </div>
                                <p>Hello World</p>
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