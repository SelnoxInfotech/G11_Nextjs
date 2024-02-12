


import ScrollContainer from 'react-indiana-drag-scroll';
import style from "../../../styles/Style.module.scss"
import Link from 'next/link';
import Image from 'next/image';
function Match(updatematch) {
  
    return (
        <div className={`container-fluid ${style.update_match}`}  >
        {/* <div style={{width:"100%", overflowX: 'scroll'}}> */}
            <ScrollContainer  className={style.ScrollContainerRelative} >
              {/* <div className=''> */}
              {
                    updatematch?.updatematch?.map((data, index) => {
                         return (

                            <div className={` ${style.updatematch }`}  key={index}>
                                
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
                                            <Image src={`${data?.team_one_img}`} width={'50'} height={'50'} alt="G11-Fantasy " />
                                            <span >VS</span>
                                            <Image src={data?.team_two_img} width={'50'} height={'50'} alt="G11-Fantasy " />
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