import React from 'react';
import axios from "axios";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import style from "../../../styles/Style.module.scss"
import { useRouter } from 'next/router'
function Matchguide(props) {
    const router = useRouter()
    const [matchpreviwe, setmatchpreviwe] = React.useState("")
    const [Team_Guide, Set_Team_Guide] = React.useState('')
    const [Detail, SetDetails_Data] = React.useState('')
    const [Teams_image, SetTeams_image] = React.useState('')
    const [metaDiscription, SetmetaDiscription] = React.useState('')
    const [ Title1, SetTitle] = React.useState('')
    let preview = router.query.id[0]
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

    React.useEffect(() => {
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


        const input = containerData.querySelector("div >p").innerHTML;
        const f = containerData.querySelector("div >h3").innerHTML;
        router.replace(`/latest-match/cricket-prediction/${f.replace(/\s+/g, '-')}/${modifystr(input.replace(/\s+/g, '-').slice(26).toLowerCase())}/${router.query.id[1]}/${router.query.id[2]}`)
        SetTitle(input.replace(/\s+/g, '-'))
    }, [props])

    function TaBFunction(e) {
        router.replace(`/latest-match/cricket-prediction/${e.target.innerText.replace(/\s+/g, '-').toLowerCase()}/${router.query.id[2]}/${modifystr(Title1.replace(/\s+/g, '-').slice(26).toLowerCase())}/${router.query.id[3]}`)
    }
    // console.log(preview , router.query.id[0])
    return (
        <div>
          
            <Tabs
                defaultActiveKey={router.query.id[0]  }
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
                    <div className='container' section >
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

export default Matchguide;


export async function getStaticPaths(ctx) {



    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}

export async function getStaticProps(ctx) {
    console.log( typeof parseInt(ctx.params.id[2]) , ctx.params.id[3] , ctx)
    var url = "https://grand11.in/g11/api/page/match_details/" + ctx.params.id[2]
    const Response = await axios.get(url)
    // {`/latest-match/cricket-prediction/${"match-preview"}/${data.title.replace(/\s+/g, '-')}/${data.id}`}
    const props = await Response.data
    return { props: { props } }
    //-----------api call ------------
}




