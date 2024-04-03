import React from 'react'
import style from '../../styles/Style.module.css'
const Videocardskeleton = () => {
  return (
        <div className={style.videoSkeetonwrapper}>
            {
                [1, 2, 3,4,5,5,5,6].map((e, i) => {
                    return    <div className={`${style.skeletonVideroCard}`} key={i}>
                                    <div className={`${style.skeletonCardvideo} ${style.skeletonSign}`}></div>
                                    <div className={style.skeletonCardtexe}>
                                        <span className={style.skeletonSign}></span>
                                        <span className={style.skeletonSign}></span>
                                    </div>
                                    <div className={`${style.skeletonSign}  ${style.skeletonCardbutton}`}></div>
                                </div>
                })
            }
        </div>
  )
}

export default Videocardskeleton