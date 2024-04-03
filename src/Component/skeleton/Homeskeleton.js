import React from 'react'
import style from '../../styles/Style.module.css'
const Homeskeleton = () => {
  return (
    <div className={style.homepageskeleton}>
            <div className='container'>
                <div className={`${style.bannersectionskeleton} ${style.skeletonSign}`}></div>
                <div className={`${style.skeletoncardhomewrapper} `}>
                        {
                            [1, 2, 3,4,6].map((e, i) => {
                            return  <div className={`${style.skeletonCard}`} key={i}>
                                            <div className={`${style.skeletonSign} ${style.skeletonCardImage}`}></div>
                                            <div className={style.skeletonCardtexe}>
                                                <span className={style.skeletonSign}></span>
                                                <span className={style.skeletonSign}></span>
                                            </div>
                                            <div className={`${style.skeletonSign} ${style.skeletonCardbutton}`}></div>
                                        </div>
                        })
                        }
                </div>
                <div className={` ${style.skeletonhomecontent}`}>
                    <h4 className={`${style.skeletonSign}  ${style.title}`}></h4>
                    <div className={`${style.skeletonSign} ${style.subtitle}`}></div>
                    <p>
                        <span className={style.skeletonSign}></span>
                        <span className={style.skeletonSign}></span>
                        <span className={style.skeletonSign}></span>
                        <span className={style.skeletonSign}></span>
                    </p>
                    <p>
                        <span className={style.skeletonSign}></span>
                        <span className={style.skeletonSign}></span>
                        <span className={style.skeletonSign}></span>
                        <span className={style.skeletonSign}></span>
                    </p>
                </div>
                <div className={`${style.skeletoncardhomewrapper} `}>
                        {
                            [1, 2,6,5,6].map((e, i) => {
                            return  <div className={`${style.skeletonCard}  ${style.skeletonSign}`} key={i}>
                                            <div className={`${style.skeletonSign} ${style.skeletonCardImage}`}></div>
                                            <div className={`${style.skeletonSign}  ${style.skeletonCardtexe}`}>
                                                <span></span>
                                                <span></span>
                                            
                                            </div>
                                            <div className={` ${style.skeletonSign} ${style.skeletonCardbutton}`}></div>
                                        </div>
                            })
                        }
                </div>
                <div className={` ${style.latestnewsskeleton}`}>
                    <div className={`${style.skeletonSign} ${style.title}`}></div>
                    <div className='row'>
                        <div className='col-md-6 col-12'>
                           <div className={`${style.skeletonSign} ${style.latestnewsImgeskeleton}`}></div>
                        </div>
                        <div className='col-md-6 col-12'>
                       
                            <div className={` ${style.latestnewscontentkeleton}`}>
                                <h3 className={`${style.skeletonSign} ${style.title}`}></h3>
                                <p className={` ${style.description}`}>
                                   <span className={style.skeletonSign}></span>
                                   <span className={style.skeletonSign}></span>
                                   <span className={style.skeletonSign}></span>
                                   <span className={style.skeletonSign}></span>
                                   <span className={style.skeletonSign}></span>
                                    <span className={style.skeletonSign}></span>
                                    <span className={style.skeletonSign}></span>
                                    <span className={style.skeletonSign}></span>
                                </p>
                                <p className={` ${style.description}`}>
                                    <span className={style.skeletonSign}></span>
                                    <span className={style.skeletonSign}></span>
                                    <span className={style.skeletonSign}></span>
                                    <span className={style.skeletonSign}></span>
                                    <span className={style.skeletonSign}></span>
                                    <span className={style.skeletonSign}></span>
                                    <span className={style.skeletonSign}></span>
                                    <span className={style.skeletonSign}></span>
                                    <span className={style.skeletonSign}></span>
                                    <span className={style.skeletonSign}></span>
                                    <span className={style.skeletonSign}></span>
                                    <span className={style.skeletonSign}></span>

                                </p>
                                <button className={style.skeletonSign}></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={` ${style.highlightsskeleton}`}>
                    <div className={style.highlightcards}>
                        <div className={` ${style.skeletonSign} ${style.latestnewsImgeskeleton}`}></div>
                        <div className={` ${style.latestnewscontentkeleton}`}>
                            <h3 className={`${style.skeletonSign} ${style.title}`}></h3>
                            <h3 className={`${style.skeletonSign} ${style.title}`}></h3>
                            <p className={` ${style.description}`}>
                            <span className={style.skeletonSign}></span>
                            <span className={style.skeletonSign}></span>
                            <span className={style.skeletonSign}></span>
                            <span className={style.skeletonSign}></span>
                            <span className={style.skeletonSign}></span>
                            <span className={style.skeletonSign}></span>
                            <span className={style.skeletonSign}></span>
                            <span className={style.skeletonSign}></span>
                            </p>
                            <button className={style.skeletonSign}></button>
                        </div>
                    </div>
                    <div className={style.highlightcards}>
                        <div className={` ${style.skeletonSign} ${style.latestnewsImgeskeleton}`}></div>
                        <div className={` ${style.latestnewscontentkeleton}`}>
                        <h3 className={`${style.skeletonSign} ${style.title}`}></h3>
                        <h3 className={`${style.skeletonSign} ${style.title}`}></h3>
                        <p className={` ${style.description}`}>
                            <span className={style.skeletonSign}></span>
                            <span className={style.skeletonSign}></span>
                            <span className={style.skeletonSign}></span>
                            <span className={style.skeletonSign}></span>
                            <span className={style.skeletonSign}></span>
                            <span className={style.skeletonSign}></span>
                            <span className={style.skeletonSign}></span>
                            <span className={style.skeletonSign}></span>
                        </p>
                        <button className={style.skeletonSign}></button>
                        </div>
                    </div>
                </div>
                <div className={` ${style.skeletonhomecontent}`}>
                    <h4 className={`${style.skeletonSign}  ${style.title}`}></h4>
                    <div className={`${style.skeletonSign} ${style.subtitle}`}></div>
                    <p>
                        <span className={style.skeletonSign}></span>
                        <span className={style.skeletonSign}></span>
                        <span className={style.skeletonSign}></span>
                        <span className={style.skeletonSign}></span>
                    </p>
                    <p>
                        <span className={style.skeletonSign}></span>
                        <span className={style.skeletonSign}></span>
                        <span className={style.skeletonSign}></span>
                        <span className={style.skeletonSign}></span>
                    </p>
                </div>
            </div>
    </div>
  )
}

export default Homeskeleton