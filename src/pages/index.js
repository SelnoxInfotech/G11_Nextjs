// // import React from "react";
import dynamic from 'next/dynamic'
const Home = dynamic(() => import('../Component/Home/Index'));
import useSWR from 'swr';
import  Seo  from '../Component/Seo/Seo';

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

function MyComponent({ initialData }) {

  const data = initialData;
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <Seo
        image={"https://www.g11fantasy.com/image/images/download/media/Static/favicon.jpg"}
        title={"G11- Fantasy Cricket Prediction for Today's Match |"}
        description={"G11- Fantasy Cricket Prediction for Today's Match. Dream11, My11Circle, Playerzpot, Howzat, Gamezy and Many More apps. Dream 11 Tips Cricket Prediction."}
        keywords={"G11- Fantasy Cricket Prediction for Today's Match. Dream11, My11Circle, Playerzpot, Howzat, Gamezy and Many More apps. Dream 11 Tips Cricket Prediction."}
        canonical={"https://g11prediction.com/"}
      ></Seo>
       <Home props={[data?.ipl[0]]} match={data.l1} updatematch={data.l1} Breaking={data.ipl} latestnews={data.l3} Teamsdata={data.teamsData} image={data.imageData} ipl={data.ipl}></Home>
    </div>
  );
}

export async function getServerSideProps() {
  const handleError = (error) => {
    console.error('Error fetching data:', error);
    return {
      props: {
        initialData: [],
        error: 'Failed to fetch data',
      },
      // revalidate: 60 * 5, // Revalidate every 5 minutes if an error occurs
    };
  };

  try {
    const [ matchesRes, postRes, teamsRes, iplRes ] = await Promise.all([
      fetch('https://grand11.in/g11/api/matches').catch(handleError),
      fetch('https://grand11.in/g11/api/post').catch(handleError),
      fetch('https://grand11.in/g11/api/teams').catch(handleError),
      fetch('https://www.g11fantasy.com/NewsSection/Get-TopNews/1').catch(handleError),
      
    ]);

    const [ matches, posts, teams, ipl ] = await Promise.all([
      matchesRes.json().catch(handleError),
      postRes.json().catch(handleError),
      teamsRes.json().catch(handleError),
      iplRes.json().catch(handleError),

    ]);

    // Assuming breaking news is the first item in topNews array
    const responseData = {
      l1: matches.result,
      l3: posts?.result,
      teamsData: teams?.result,
      ipl: ipl,
      
    };

    return {
      props: {
        initialData: responseData,
      },
      // revalidate: 60,
    };
  } catch (error) {
    return handleError(error);
  }
}

export default MyComponent;
