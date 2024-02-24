import React from 'react';
import style from "../styles/Style.module.scss"
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
const Breakingnews = (props) => {
    
    const imagePerRow = 8
    const [next, setNext] = React.useState(imagePerRow);
    function modifystr(str) {
        str = str?.replace(/[^a-zA-Z0-9/ ]/g, "-");
        str = str.trim().replaceAll(' ', "-");
        let a = 0;
        while (a < 1) {
            if (str.includes("--")) {
                str = str.replaceAll("--", "-")
            } else if (str.includes("//")) {
                str = str.replaceAll("//", "/")
            } else if (str.includes("//")) {
                str = str.replaceAll("-/", "/")
            } else if (str.includes("//")) {
                str = str.replaceAll("/-", "/")
            } else {
                a++
            }
        }

        return str
    }
    const imageLoader = ({ src, width, height, quality }) => {
        return `https://www.g11fantasy.com/${src}?w=${width}&q=${quality || 75}`
    }


    const handleMoreImage = () => {
        setNext(next + imagePerRow);
    };
    const handlelessImage = () => {
        setNext(next - imagePerRow);
    };

    return (
        <>
            <Head>
                <title>Breaking news</title>
                <meta property="og:image" content={`https://www.g11fantasy.com/${props.ImageData[8].image}`} />

                <meta property="og:title" content="Your Title" />

                <meta property="og:description" content="A full description of the page." />

                <meta property="og:image:width" content="1200" />

                <meta property="og:image:height" content="630" />

            </Head>
            <div className='container-fluid center'>
                <div className={`${"row"} ${style.Breaking_new}`}>
                    <div className={`col-12 ${style.breaking_news_hed}`}>
                        <h1> Cricket Breaking News ON TRENDING TOPICS</h1>
                    </div>

                    {
                        props.l?.slice(0, next)?.map((breakingnews, index) => {
                            return (

                                <div className={`col-xs-12 col-sm-6 col-md-3  ${style.Breaking_news_gap}`} key={index}>
                                    <div className="card1 card">
                                        <div className="video text-center">

                                            <div className='col ShareOption'>
                                                {/* <RWebShare
                                            data={{
                                                url: `https://g11prediction.com/cricket-breakingnews/${breakingnews.id}/${modifystr(breakingnews?.urlslug !== null ? breakingnews?.urlslug?.toLowerCase() : breakingnews?.Title)}`
                                            }}
                                            onClick={() => console.log("shared successfully!")}
                                        >
                                            <Button className="ShareButton">
                                                <BsFillShareFill color='#c2121c'></BsFillShareFill>
                                            </Button>
                                        </RWebShare> */}

                                            </div>
                                            <Link className={`${style.hovereffect}`} href={`/cricket-breaking-news/${modifystr(breakingnews?.urlslug !== null ? breakingnews?.urlslug?.toLowerCase() : breakingnews?.Title)}/${breakingnews.id}`}>
                                                <Image className={style.News_image} loader={imageLoader} src={`${breakingnews.Image}`} height={10} width={100} alt="news_image" quality={100} />
                                                <div className={style.News_image_title}>
                                                    <h2 className={`card-text  ${style.card_text}`}>{breakingnews.Title.slice(0, 80)}</h2>
                                                </div>
                                            </Link>
                                            <div className={`col-12 ${style.viewCount}`}>
                                                <div className={`col-6 ${style.viewCounteye}`}>
                                                    {/* <AiFillEye></AiFillEye>  <span>{breakingnews?.ViewCount} view</span> */}
                                                </div>
                                                <div className={`col-6 ${style.ViewCountDate}`}>
                                                    <p >{breakingnews.created.slice(0, 10)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })

                    }
                    <div className={`${'row'} ${style.BreakingButton}`}>
                        <div className='col-12 ' id='Buttongap'>
                            {next < props.l?.length && (
                                <button className="btn readleft" onClick={handleMoreImage}
                                >
                                    Load more
                                </button>
                            )}
                            {next < props.l?.length && (
                                <button className={next <= 5 ? 'hidden' : "btn readleft"} onClick={handlelessImage}
                                >
                                    Read Less
                                </button>
                            )}
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
};

export default Breakingnews;

export const getStaticProps = async (context) => {

    const res = await fetch('https://www.g11fantasy.com/NewsSection/Get-News/1')
    const props = await res.json()
    const l = props

    const Image = await fetch('https://www.g11fantasy.com/NewsSection/Get-StaticImage/')
    const Imageprops = await Image.json()
    const ImageData = Imageprops
  
    return { props: { l , ImageData } }


}