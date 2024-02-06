


import ScrollContainer from 'react-indiana-drag-scroll';
import style from "../../styles/Style.module.scss"
import Link from 'next/link';
function Match(updatematch) {
  
    return (
        <div className={`container-fluid ${style.update_match}`}  >
        {/* <div style={{width:"100%", overflowX: 'scroll'}}> */}
            <ScrollContainer  className={style.ScrollContainerRelative} >
        {
                    updatematch?.updatematch?.map((data, index) => {
                        return (

                            <div className={`container-fluid  ${style.updatematch }`}  key={index}>
                                
                                <Link href={`cricket-prediction/${data.id}/${data.title.replace(/\s+/g, '-')}`} >

                                    <div className={`row ${style.grid_row}`}>
                                        <div className="col-12 center color">
                                            {data.title}
                                        </div>
                                        <div className="col-12 center fonting">
                                            <p>{data.first_team} vs {data.second_team}</p>

                                        </div>
                                        <div className="col-12 center fonting">
                                            <span>{data.date}</span> |<span>{data.time}</span>
                                        </div>
                                        <div className="col-12 center">
                                            <img src={`https://grand11.in/g11/${data?.team_one_img}`} width="50" height="50" alt="G11-Fantasy " />
                                            <span >VS</span>
                                            <img src={"https://grand11.in/g11/"+ data?.team_two_img} width="50" height="50" alt="G11-Fantasy " />
                                        </div>
                                        <div className="col-12 center">

                                        </div>

                                        <div className="col-12 center location_match">
                                            <p className="city_location"><span className="location">match Location-</span>{data.city}</p>
                                        </div>
                                    </div>
                                </Link>
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