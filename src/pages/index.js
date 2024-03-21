// // import React from "react";
import dynamic from 'next/dynamic'
const Home = dynamic(() => import('../Component/Home/index'));
import useSWR from 'swr';
import { Seo } from '../Component/Seo/Seo';

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
      <Home props={[data?.l]} match={data.l1} updatematch={data.l2} Breaking={data.breaking} latestnews={data.l3} Teamsdata={data.teamsData} image={data.imageData} ipl={data.ipl} ></Home>
    </div>
  );
}

export async function getStaticProps() {
  const handleError = (error) => {
    console.error('Error fetching data:', error);
    return {
      props: {
        initialData: null,
        error: 'Failed to fetch data',
      },
      revalidate: 60 * 5, // Revalidate every 5 minutes if an error occurs
    };
  };

  try {
    const [topNewsRes, matchesRes, allMatchesRes, postRes, teamsRes, imageRes, iplRes] = await Promise.all([
      fetch('https://www.g11fantasy.com/NewsSection/Get-TopNews/1').catch(handleError),
      fetch('https://grand11.in/g11/api/matches').catch(handleError),
      fetch('https://grand11.in/g11/all_matches_api.php').catch(handleError),
      fetch('https://grand11.in/g11/api/post').catch(handleError),
      fetch('https://grand11.in/g11/api/teams').catch(handleError),
      fetch('https://www.g11fantasy.com/NewsSection/Get-StaticImage/').catch(handleError),
      fetch('https://www.g11fantasy.com/NewsSection/Get-News/1').catch(handleError)
    ]);

    const [topNews, matches, allMatches, posts, teams, images, ipl] = await Promise.all([
      topNewsRes.json().catch(handleError),
      matchesRes.json().catch(handleError),
      allMatchesRes.json().catch(handleError),
      postRes.json().catch(handleError),
      teamsRes.json().catch(handleError),
      imageRes.json().catch(handleError),
      iplRes.json().catch(handleError)
    ]);

    // Assuming breaking news is the first item in topNews array
    const responseData = {
      breaking: topNews,
      l: topNews[0],
      l1: matches,
      l2: allMatches?.reverse()?.slice(0, 100),
      l3: posts?.result,
      teamsData: teams?.result,
      imageData: images,
      ipl: ipl
    };

    return {
      props: {
        initialData: responseData,
      },
      revalidate: 60,
    };
  } catch (error) {
    return handleError(error);
  }
}

export default MyComponent;
