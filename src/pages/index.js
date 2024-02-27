import React from "react";
import dynamic from 'next/dynamic'
const Home = dynamic(() => import('../Component/Home/index'), { ssr: false, loading: () => <p>Loading...</p> });
// const {SeoHomepage} = dynamic(() => import('../Component/Seo/Seo'), { ssr: false, loading: () => <p>Loading...</p> });
// import { Seo } from "../Component/Seo/Seo";
import useSWR from 'swr'
const url = 'https://www.g11fantasy.com/NewsSection/Get-TopNews/1'
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Dashboard(props) {
  const { data: result, error } = useSWR(url, fetcher)
  const [s, d] = React.useState("")
  React.useEffect(() => {
  }, [])
  console.log("index.js call from useeffect")
  if (error) return <h1>Something went wrong!</h1>
    if (!result) return <h1>Loading...</h1>

  //  console.log(result[1]?.id ,"kdjfhkd")

  return (
    <>
    <p>{result[1]?.id}</p>

      {/* <Seo
        image={props.imageData[9].image}
        title={"G11- Fantasy Cricket Prediction for Today's Match |"}
        description="G11- Fantasy Cricket Prediction for Today's Match. Dream11, My11Circle, Playerzpot, Howzat, Gamezy and Many More apps. Dream 11 Tips Cricket Prediction."
        keywords={"G11 Fantasy Cricket Prediction, cricket news, Today's match Prediction, Latest Cricket News, Cricket Betting Tips & Predictions, fantasy cricket prediction, dream 11 today prediction, today best cricket match prediction"}
      ></Seo> */}
      {/* <Home props={[props?.l]} match={props.l1} updatematch={props.l2} Breaking={props.breaking} latestnews={props.l3} Teamsdata={props.teamsData} image={props.imageData} ></Home> */}
    </>
  );
}


// export const getStaticProps = async (context) => {

//   const res = await fetch('https://www.g11fantasy.com/NewsSection/Get-TopNews/1')
//   const props = await res.json()
//   const l = props[0]
//   const Breaking = props
//   const res1 = await fetch('https://grand11.in/g11/api/matches')
//   const props1 = await res1.json()
//   const l1 = props1
//   const res2 = await fetch('https://grand11.in/g11/all_matches_api.php')
//   const props2 = await res2.json()
//   const l2 = props2.reverse().slice(0, 100)
//   const res3 = await fetch('https://grand11.in/g11/api/post')
//   const props3 = await res3.json()
//   const l3 = props3.result
//   const Team = await fetch('https://grand11.in/g11/api/teams')
//   const TeamProps = await Team.json()
//   const Teamsdata = TeamProps.result

//   const Image = await fetch('https://www.g11fantasy.com/NewsSection/Get-StaticImage/')
//   const Imageprops = await Image.json()
//   const ImageData = Imageprops

//   return { props: { l, l1, l2, Breaking, l3, Teamsdata, ImageData } }


// }

// export const getServerSideProps = async (context) => {

//   console.log("sdhfgsjgfjsdgfjhsdfgdsb")
//   try {
//     const [topNewsRes, matchesRes, allMatchesRes, postRes, teamsRes, imageRes] = await Promise.all([
//       fetch('https://www.g11fantasy.com/NewsSection/Get-TopNews/1'),
//       fetch('https://grand11.in/g11/api/matches'),
//       fetch('https://grand11.in/g11/all_matches_api.php'),
//       fetch('https://grand11.in/g11/api/post'),
//       fetch('https://grand11.in/g11/api/teams'),
//       fetch('https://www.g11fantasy.com/NewsSection/Get-StaticImage/')
//     ]);

//     const [topNews, matches, allMatches, posts, teams, images] = await Promise.all([
//       topNewsRes.json(),
//       matchesRes.json(),
//       allMatchesRes.json(),
//       postRes.json(),
//       teamsRes.json(),
//       imageRes.json()
//     ]);

//     const breaking = topNews;
//     const l = topNews[0];
//     const l1 = matches;
//     const l2 = allMatches.reverse().slice(0, 100);
//     const l3 = posts.result;
//     const teamsData = teams.result;
//     const imageData = images;
//     // console.log(topNewsRes)
//     context.res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate = 3600');

//     console.log("appi call compelete")
//     return { props: { l, l1, l2, breaking, l3, teamsData, imageData } };

//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return { props: { error: 'Failed to fetch data' } };
//   }
// };

// https://www.g11fantasy.com/NewsSection/Get-VideoNews/