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

const Cricket_rules_and_regulation = ({ initialData }) => {

  const k = initialData
  const { data: fetchedData, error } = useSWR(`/Filterbycategory/${2}`, fetcher, { k });

  const data = fetchedData || k;
  if (!data) return <div>Loading...</div>;
console.log(data)

  return (
    <>
      <Seo
        image={"https://www.g11fantasy.com/image/images/download/media/Static/favicon.jpg"}
        title={"Cricket Rules And Regulations | Playing Conditions- G11 Prediction |"}
        description={"Cricket Rules And Regulations, Playing Conditions by G11 Fantasy Cricket Prediction Website and Application for Today's Match. # 1 Fantasy Cricket Prediction tips."}
        keywords={"Cricket Playing Conditions, Cricket Rules and Regulations, Cricket Laws, Cricket Playing Rules, ODI laws, T20 rules, Cricket match playing rules, cricket penalty conditions,"}
        canonical={"https://g11prediction.com/cricket-rules-and-regulation/"}
    ></Seo>
      <Card props={data} heading={<h1>cricket rules and regulation</h1>} query={"cricket-rules-and-regulation"} data1={null}></Card>
    </>
  );
};

export default Cricket_rules_and_regulation;



export async function getServerSideProps(ctx) {
  try {
    const [topNewsRes] = await Promise.all([
      fetch(`https://g11fantasy.com/NewsSection/FilterbyCategory/${2}`),
    ]);
    const [topNews, images] = await Promise.all([
      topNewsRes.json(),
    ]);


    const responseData = {
      breaking: topNews.data,
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

