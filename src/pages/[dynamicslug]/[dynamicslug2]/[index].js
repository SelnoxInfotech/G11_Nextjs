import axios from "axios"
import parse from 'html-react-parser';
import Head from 'next/head';
import Image from 'next/image';
import Card from "./../../../Component/card/index"
export default function Detailpage({props , props1}) {
    console.log(props ,  props1)

    const imageLoader = ({ src, width, height, quality }) => {
        console.log(src)
        return (`https://www.g11fantasy.com${src}?w=${width}&h=${height}&q=${quality || 100}`)
    }

    return (
        <>
            {
                props?.map((data, index) => {
                    return (
                    <>
                        <Head>
                        <title>Breaking news</title>
                        <meta property="og:image" content={`https://www.g11fantasy.com${data?.Image}`} />
        
                        <meta property="og:title" content={data.Title} />
        
                        <meta property="og:description" content="A full description of the page." />
        
                        <meta property="og:image:width" content="1200" />
        
                        <meta property="og:image:height" content="630" />
        
                    </Head>
                        <div className="container " key={index}>

                            <div className="row">
                                <div className="col-12"> <h1 className="title_had">{data.Title}</h1></div>
                                <div className="col-12 imag">
                                    <div className="col">
                                        <Image loader={imageLoader}   src={`${data?.Image}`} alt="G11-Fantasy Cricket Prediction for Today's Match"
                                         width={100} height={100} quality={100}
                                         style={{width:"50%"}}
                                         />
                                    </div>
                                    <div className="col">

                                        {parse(data.Description)}
                                    </div>
                                    <div className="col-12 ViewCount">
                                        <div className="col-6 ViewCountEye">
                                            {/* <AiFillEye></AiFillEye>  <span>{data?.ViewCount + 1} view</span> */}
                                        </div>
                                        <div className="col-6 ViewCountDate">
                                            <p >{data.created.slice(0, 10)}</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </>
                    )
                })

            }
            <Card props={props1}></Card>
        </>
    )

}


export async function getServerSideProps(ctx) {
    // console.log(ctx.params.dynamicslug === "cricket-breaking-news" ,  ctx.params.dynamicslug2)
    try {
        const response = await axios.get(`https://www.g11fantasy.com/NewsSection/Get-Newsbyid/${ctx.params.index}`);
        const props = response.data.data;

        const res = await fetch('https://www.g11fantasy.com/NewsSection/Get-News/1')
        const props1 = await res.json()
        return { props: { props ,props1} };
    } catch (error) {
        console.error("Error fetching data:", error);
        return { props: { error: "Failed to fetch data" } };
    }
}
