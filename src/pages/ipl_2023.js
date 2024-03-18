import React from 'react';
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
const Ipl2024 = ({initialData}) => { 
    const k = initialData
    const { data: fetchedData, error } = useSWR(`/FilterbySubCategory/${1}`,fetcher,{ k } );

    const data = fetchedData || k;

    if (!data) return <div>Loading...</div>;


    return (
        <>
            <Seo
             image={"https://www.g11fantasy.com/image/images/download/media/Static/favicon.jpg"}
                title={"Get IPL 2024 Latest News, Predictions, Analysis On G11predictions"}
                description={"PL 2024 Live Updates, Latest News, Match Predictions, IPL 2024 Match Schedule, Venue Details, Points Table, Match Analysis And Much More Only On G11prediction"}
                keywords={"IPL 2024,IPL schedule 2024, IPL teams 2024, IPL venues 2024, Dream11 prediction, IPL 2024 match prediction, IPL 2024"}
                canonical={"https://g11prediction.com/ipl-2023/"}
           ></Seo>
     <Card props={data} query={"ipl-2023"}  data={"ipl-2023"}></Card>
        </>
    );
};

export default Ipl2024;

export async function getStaticProps() {
    try {
      const [topNewsRes] = await Promise.all([
        fetch(`https://g11fantasy.com/NewsSection/FilterbySubCategory/1`),
      ]);
      const [topNews] = await Promise.all([
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
  
