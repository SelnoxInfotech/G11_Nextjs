import React from 'react'

const Prediction = ({predictiondata}) => {

     console.log(predictiondata ,'predictiondata')
  return (
    <div className={style.newcardwrapper}>
    {
      predictiondata.map((items , index)=>{
       

         return   <div className={style.newcard}  key={index}>
                                    <div className={`${"col"}`}>
                                          <RWebShare  data={{
                                                  // url: `http://weedx.site/cricket-breaking-news/${modifystr(breakingnews?.urlslug !== null ? breakingnews?.urlslug?.toLowerCase() : breakingnews?.Title || breakingnews?.title)}/${breakingnews.id}`
                                          }}  onClick={() => console.log("shared successfully!")}  >
                                              <button className={style.ShareButton}>
                                                  <BsFillShareFill  color='#c2121c'></BsFillShareFill>
                                              </button>
                                          </RWebShare>

                                      </div>
                                      <Link className={`${style.hovereffect}`} href={`/ipl2024dream11predictions/${items?.urlslug !== (null || undefined) ? modifystr(items?.urlslug) : modifystr(items?.Title ||  items?.title)}/${items.id}`} >
                                          <Image className={style.News_image} loader={imageLoader} src={items?.Image} height={10} width={100} alt="news_image" quality={100} />
                                          <div className={style.News_image_title}>
                                              <h2 className={`card-text  ${style.card_text}`}>{items?.Title}</h2>
                                          </div>
                                      </Link>
                                      <div className={`col-12 ${style.viewCount}`}>
                                          {/* <div className={`col-md-6 col-4 ${style.viewCounteye}`}>
                                              <span>{breakingnews?.ViewCount}</span><AiFillEye></AiFillEye>
                                          </div> */}
                                          <div className={`col-md-6 col-8 ${style.ViewCountDate}`}>
                                              <p >{items?.created?.slice(0, 10)}</p>
                                          </div>
                                      </div>
                  </div>
            
      })
    }
   
  </div>
  )
}
export default Prediction