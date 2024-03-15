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

  const { data: fetchedData, error } = useSWR('/api/utils/api', fetcher, { initialData });

  const data = fetchedData || initialData;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <Seo
        image={"https://www.g11fantasy.com/image/images/download/media/Static/favicon.jpg"}
        title={"G11- Fantasy Cricket Prediction for Today's Match |"}
        description={"G11- Fantasy Cricket Prediction for Today's Match. Dream11, My11Circle, Playerzpot, Howzat, Gamezy and Many More apps. Dream 11 Tips Cricket Prediction."}
        keywords={"G11- Fantasy Cricket Prediction for Today's Match. Dream11, My11Circle, Playerzpot, Howzat, Gamezy and Many More apps. Dream 11 Tips Cricket Prediction."}
      ></Seo>
      <Home props={[data?.l]} match={data.l1} updatematch={data.l2} Breaking={data.breaking} latestnews={data.l3} Teamsdata={data.teamsData} image={data.imageData} ></Home>
    </div>
  );
}


export async function getStaticProps() {
  try {
    const [topNewsRes, matchesRes, allMatchesRes, postRes, teamsRes, imageRes] = await Promise.all([
      fetch('https://www.g11fantasy.com/NewsSection/Get-TopNews/1'),
      fetch('https://grand11.in/g11/api/matches'),
      fetch('https://grand11.in/g11/all_matches_api.php'),
      fetch('https://grand11.in/g11/api/post'),
      fetch('https://grand11.in/g11/api/teams'),
      fetch('https://www.g11fantasy.com/NewsSection/Get-StaticImage/')
    ]);

    const [topNews, matches, allMatches, posts, teams, images] = await Promise.all([
      topNewsRes.json(),
      matchesRes.json(),
      allMatchesRes.json(),
      postRes.json(),
      teamsRes.json(),
      imageRes.json()
    ]);

    // Assuming breaking news is the first item in topNews array

    const responseData = {
      breaking: topNews,
      l: topNews[0],
      l1: matches,
      l2: allMatches.reverse().slice(0, 100),
      l3: posts.result,
      teamsData: teams.result,
      imageData: images
    };
    return {
      props: {
        initialData: responseData,
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

export default MyComponent;