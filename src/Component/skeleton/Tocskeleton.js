import React from 'react'
import style from '../../styles/Style.module.css'
const Tocskeleton = () => {
  return (
    <div className={style.breaknewssidebar}>
        <h4 className={style.breaknewssidebartitle}>Recent News</h4>
  
        <div className={style.skeletontoc}>
        <div className={style.tocskeletonlist}>
            <ul>
                <li>
                    <span></span>
                    <span></span>
                </li>
                <li>
                    <span></span>
                    <span></span>
                </li>
                <li>
                    <span></span>
                    <span></span>
                </li>
                <li>
                    <span></span>
                    <span></span>
                </li>
                <li>
                    <span></span>
                    <span></span>
                </li>
            
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Tocskeleton