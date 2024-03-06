import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic'
const Card = dynamic(() => import('../Component/card/index'), { ssr: true, loading: () => <p>Loading...</p> });
import { Seo } from '../Component/Seo/Seo';
import useSWR from 'swr';

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

const cricket_rules_and_regulation = ({ initialData }) => {

  const k = initialData
  const { data: fetchedData, error } = useSWR(`/Filterbycategory/${3}`, fetcher, { k });

  const data = fetchedData || k;
  if (!data) return <div>Loading...</div>;


  return (
    <>
      <Seo
        image={"https://www.g11fantasy.com/image/images/download/media/Static/favicon.jpg"}
        title={"Breaking News | G11 Fantasy Cricket Prediction |"}
        description={"Breaking News on latest cricket updates. G11 Fantasy Cricket Prediction Website and Application for Today's match. # 1 Dream11 Fantasy Cricket Prediction tips."}
        keywords={"Breaking News, Cricket news, G11 Fantasy Cricket Prediction, Dream11 prediction, Cricket News Today, Live Cricket News, Online Cricket News, Cricket News Today Match, world cup 2023 cricket news,"}
      ></Seo>
      <Card props={data} query={"cricket-players"}></Card>
    </>
  );
};

export default cricket_rules_and_regulation;



export async function getStaticProps(ctx) {
  try {
    const [topNewsRes] = await Promise.all([
      fetch(`http://localhost:3000/Filterbycategory/${3}`),
    ]);

    const [topNews, images] = await Promise.all([
      topNewsRes.json(),
    ]);


    const responseData = {
      breaking: topNews,
    };
    return {
      props: {
        initialData: responseData.breaking,
      },
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

