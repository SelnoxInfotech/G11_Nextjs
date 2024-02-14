


import ScrollContainer from 'react-indiana-drag-scroll';
import style from "../../../styles/Style.module.scss"
import Link from 'next/link';
import Image from 'next/image';
function Match({updatematch ,image}) {
    const imageLoader = ({ src, width, quality }) => {
        return `https://grand11.in/g11/${src}?w=${width}&q=${quality || 75}`
      }
      const imageLoader1 = ({ src, width, quality }) => {
        return `https://www.g11fantasy.com/${src}?w=${width}&q=${quality || 75}`
    }
    return (
        <div className={`container-fluid ${style.update_match}`}  >
        {/* <div style={{width:"100%", overflowX: 'scroll'}}> */}
            <ScrollContainer  className={style.ScrollContainerRelative} >
              {/* <div className=''> */}
              {
                    updatematch?.map((data, index) => {
                         return (

                            <div className={` ${style.updatematch }`}  key={index}>
                     <Image
                                  style={{
                                    width:' 469px',
                                    borderRadius: '20px',
                                    height: '100%',
                                    position: "absolute",
                                    zIndex: "-1"
                                }}
                                 sizes="100vw" loader={imageLoader1} src={image[7].image} width={'100'} height={'100'} alt="G11-Fantasy " />
                                    <div className={` ${style.grid_row}`}>
                                <Link href={`cricket-prediction/${data.id}/${data.title.replace(/\s+/g, '-')}`} >
                              
                                        <div className="col">
                                            {data.title}
                                        </div>
                                        <div className="col">
                                            <p>{data.first_team} vs {data.second_team}</p>

                                        </div>
                                        <div className="col">
                                            <span>{data.date}</span> |<span>{data.time}</span>
                                        </div>
                                        <div className="col">
                                            <Image loader={imageLoader} src={`${data?.team_one_img}`} width={'50'} height={'50'} alt="G11-Fantasy " />
                                            <span >VS</span>
                                            <Image loader={imageLoader} src={`${data?.team_two_img}`} width={'50'} height={'50'} alt="G11-Fantasy " />
                                        </div>
                                        <div className="col">

                                        </div>

                                        <div  className={`${style.location} col`} >
                                            <p className="city_location"><span>match Location-</span>{data.city}</p>
                                        </div>
                                </Link>
                                    </div>
                            </div>
                        )
                    })
                }
              {/* </div> */}
        </ScrollContainer>  
        {/* </div> */}
        </div>
    );
}

export default Match;