import React from 'react';
import dynamic from 'next/dynamic'
const   Card = dynamic(() => import('../Component/card/index'), { ssr: true  , loading: () => <p>Loading...</p> });
import  Seo  from '../Component/Seo/Seo';
import useSWR from 'swr';
import { useRouter } from 'next/router'
import Cardskeleton from '../Component/skeleton/cardskeleton'
import style from "../styles/Style.module.scss"
const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

const Cricket_news = ({ initialData }) => {
  const router = useRouter()
  const k = initialData
  const { data: fetchedData, error } = useSWR(`https://grand11.in/g11/api/post`, fetcher, { k });
  
  if (router.asPath === "/Cricket-News/" || router.asPath === "/Cricket-news/") {
    router.push("/cricket-news"); // Redirect to the desired path
  }

  const data = fetchedData;  
  if (!data) {
    return (
      <div className='container '>
        <div className={style.Breaking_new}>
          <div className={style.Breaking_newCardWrapper}>
            {
              [1, 5, 6, 6, 6, 6, 6, 6, 6, 6].map((e, i) => {
                return < Cardskeleton key={i} />
              })
            }
          </div>
        </div>

      </div>
    )
  }

  return (
    <>
      <Seo
        image={"https://www.g11fantasy.com/image/images/download/media/Static/favicon.jpg"}
        title={"Breaking News | G11 Fantasy Cricket Prediction |"}
        description={"Breaking News on latest cricket updates. G11 Fantasy Cricket Prediction Website and Application for Today's match. # 1 Dream11 Fantasy Cricket Prediction tips."}
        keywords={"Breaking News, Cricket news, G11 Fantasy Cricket Prediction, Dream11 prediction, Cricket News Today, Live Cricket News, Online Cricket News, Cricket News Today Match, world cup 2023 cricket news,"}
        canonical={"https://g11prediction.com/cricket-news/"}
    ></Seo>
      <Card slug={"Cricket-News"} props={data.result} heading={<h1>cricket players</h1>} query={"cricket-news"}  data1={""} domain={"https://grand11.in/g11/"}></Card>
    </>
  );
};

export default Cricket_news;



export async function getStaticProps(ctx) {
  try {
    const [topNewsRes] = await Promise.all([
      fetch(`https://grand11.in/g11/api/post`),
    ]);

    const [topNews, images] = await Promise.all([
      topNewsRes.json(),
    ]);
 
    const responseData = {
      breaking: topNews.result,
    };
    return {
      props: {
        initialData: responseData.breaking,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        initialData: null,
        error: 'Failed to fetch data',
      },
    };
  }
}

