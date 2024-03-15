
import React from 'react';
import Image from 'next/image';
import parse from 'html-react-parser';
function Details({ data , h}) {
    const imageLoader = ({ src, width, height, quality }) => {
    const l  =  h ==="cricket-news" ? 'https://grand11.in/g11/': "https://www.g11fantasy.com/"
        return (`${l}/${src}?w=${width}&h=${height}&q=${quality || 100}`)
    }
    return (
        <div className="container " >

            <div className="row">
                <div className="col-12"> <h1 className="title_had">{data.Title || data.title}</h1></div>
                <div className="col-12 imag">
                    <div className="col">
                        <Image loader={imageLoader} src={`${data?.Image || data.image}`} priority={false} alt="G11-Fantasy Cricket Prediction for Today's Match"
                            width={100} height={100} quality={100}
                            style={{ width: "50%" }}
                        />
                    </div>
                    <div className="col">

                        {parse(data.Description || data.content)}
                    </div>
                    <div className="col-12 ViewCount">
                        <div className="col-6 ViewCountEye">
                            {/* <AiFillEye></AiFillEye>  <span>{data?.ViewCount + 1} view</span> */}
                        </div>
                        <div className="col-6 ViewCountDate">
                            <p >{data?.created?.slice(0, 10) || data.post_date}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Details;