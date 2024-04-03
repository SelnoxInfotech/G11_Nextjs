import React from 'react'
import style from '../../styles/Style.module.css'
const Cardskeleton = () => {
  return (
    <div className={`${style.skeletonCard}`} >
    <div className={`${style.skeletonSign} ${style.skeletonCardImage}`}></div>
    <div className={style.skeletonCardtexe}>
        <span className={style.skeletonSign}></span>
        <span className={style.skeletonSign}></span>
    </div>
    <div className={`${style.skeletonSign} ${style.skeletonCardbutton}`}></div>
</div>
  )
}

export default Cardskeleton