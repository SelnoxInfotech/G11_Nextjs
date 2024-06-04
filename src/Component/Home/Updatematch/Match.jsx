import ScrollContainer from 'react-indiana-drag-scroll';
import style from "../../../styles/Style.module.scss"
import Link from 'next/link';
import Image from 'next/image';

function Match({updatematch}) {
  
    const imageLoader = ({ src, width, quality }) => {
        return `https://grand11.in/g11/${src}?w=${width}&q=${quality || 75}`
    }

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
  
    return (
        <div className={`container-fluid ${style.update_match}`}  >
            {/* <div style={{width:"100%", overflowX: 'scroll'}}> */}
            <ScrollContainer className={`${style.ScrollContainerRelative}`} >
              
                {
                    updatematch?.map((data, index) => {
                        const matchesObject = {};
                        const l = data.match_discription?.split('</p>')[0].replace(/(<([^>]+)>)/gi, "");
                        [l].forEach((match, index) => {
                            matchesObject[`Match_${index + 1}`] = match.replace(/&ndash;/g, '-');
                        });
                        return (

                            <div className={` ${style.updatematch}`} key={index}>
                                  <Link href={`/cricket-match-predictions/${modifystr(matchesObject?.Match_1?.split(/:|-/)[1]?.replace(/&nbsp;/g, ''))+"-dream11-prediction-today-match"}/${data.id}`} >
                                {/* <Image
                                   className={style.updatematchimg}
                                    sizes="100vw" src={image1} width={'100'} height={'100'} alt="G11-Fantasy " /> */}
                                    </Link>
                                <div className={` ${style.grid_row}`}>
                                    <Link href={`/cricket-match-predictions/${modifystr(matchesObject?.Match_1?.split(/:|-/)[1]?.replace(/&nbsp;/g, ''))+"-dream11-prediction-today-match"}/${data.id}`} >

                                        <div className="col">
                                            {data.title}    
                                        </div>
                                        <div className="col">
                                            <p>{data.first_team} vs {data.second_team}</p>

                                        </div>
                                        <div className="col">
                                            <span>{data.date}</span> |<span>{data.time}</span>
                                        </div>
                                        <div className="col gap-3">
                                            <Image loader={imageLoader} src={`${data?.team_one_img}`} width={50} height={50} alt="G11-Fantasy " className='rounded-circle' style={{ width: "50px", height: '50px' }} />
                                            <span >VS</span>
                                            <Image loader={imageLoader} src={`${data?.team_two_img}`} width={50} height={50} alt="G11-Fantasy " className='rounded-circle' style={{ width: "50px", height: '50px' }} />
                                        </div>
                                        <div className="col">

                                        </div>

                                        <div className={`${style.location} col`} >
                                            <p className={`${style.city_location} m-0 py-1`}>View Match Prediction</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
               
            </ScrollContainer>
            {/* </div> */}
        </div>
    );
}

export default Match;