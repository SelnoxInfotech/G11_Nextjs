// // import React from "react";
import dynamic from 'next/dynamic'
const Home = dynamic(() => import('../Component/Home/index'), { ssr: true, loading: () => <p>Loading...</p> });
// // // const {SeoHomepage} = dynamic(() => import('../Component/Seo/Seo'), { ssr: false, loading: () => <p>Loading...</p> });
// // // import { Seo } from "../Component/Seo/Seo";
// // import useSWR, { SWRConfig } from 'swr'
// // // const url = 'https://www.g11fantasy.com/NewsSection/Get-TopNews/1'
// // const fetcher = (...args) => fetch(...args).then((res) => res.json())

// // export default function Dashboard({fallback}) {
// //   // const { data: result, error } = useSWR(url, fetcher)
// //   // const [s, d] = React.useState("")

// //   // if (error) return <h1>Something went wrong!</h1>
// //   //   if (!result) return <h1>Loading...</h1>

// //   //  console.log(result[1]?.id ,"kdjfhkd")

// //   return (
// //     <>
// //       {/* <p>{result[1]?.id}</p> */}
// //       <SWRConfig value={{refreshInterval: 300000,  fallback }}>
// //         {GetData()}
// //       </SWRConfig>
// //       {/* <Seo
// //         image={props.imageData[9].image}
// //         title={"G11- Fantasy Cricket Prediction for Today's Match |"}
// //         description="G11- Fantasy Cricket Prediction for Today's Match. Dream11, My11Circle, Playerzpot, Howzat, Gamezy and Many More apps. Dream 11 Tips Cricket Prediction."
// //         keywords={"G11 Fantasy Cricket Prediction, cricket news, Today's match Prediction, Latest Cricket News, Cricket Betting Tips & Predictions, fantasy cricket prediction, dream 11 today prediction, today best cricket match prediction"}
// //       ></Seo> */}
// //       {/* <Home props={[props?.l]} match={props.l1} updatematch={props.l2} Breaking={props.breaking} latestnews={props.l3} Teamsdata={props.teamsData} image={props.imageData} ></Home> */}
// //     </>
// //   );
// // }


// // // export const getStaticProps = async (context) => {

// // //   const res = await fetch('https://www.g11fantasy.com/NewsSection/Get-TopNews/1')
// // //   const props = await res.json()
// // //   const l = props[0]
// // //   const Breaking = props
// // //   const res1 = await fetch('https://grand11.in/g11/api/matches')
// // //   const props1 = await res1.json()
// // //   const l1 = props1
// // //   const res2 = await fetch('https://grand11.in/g11/all_matches_api.php')
// // //   const props2 = await res2.json()
// // //   const l2 = props2.reverse().slice(0, 100)
// // //   const res3 = await fetch('https://grand11.in/g11/api/post')
// // //   const props3 = await res3.json()
// // //   const l3 = props3.result
// // //   const Team = await fetch('https://grand11.in/g11/api/teams')
// // //   const TeamProps = await Team.json()
// // //   const Teamsdata = TeamProps.result

// // //   const Image = await fetch('https://www.g11fantasy.com/NewsSection/Get-StaticImage/')
// // //   const Imageprops = await Image.json()
// // //   const ImageData = Imageprops

// // //   return { props: { l, l1, l2, Breaking, l3, Teamsdata, ImageData } }


// // // }

// // export const getStaticProps = async (context) => {

// //   // console.log("sdhfgsjgfjsdgfjhsdfgdsb")
// //   // try {
// //   //   const [topNewsRes] = await Promise.all([
// //   //     fetch('http://localhost:3000/api/utils/api'),
// //   //     // fetch('https://grand11.in/g11/api/matches'),
// //   //     // fetch('https://grand11.in/g11/all_matches_api.php'),
// //   //     // fetch('https://grand11.in/g11/api/post'),
// //   //     // fetch('https://grand11.in/g11/api/teams'),
// //   //     // fetch('https://www.g11fantasy.com/NewsSection/Get-StaticImage/')
// //   //   ]);

// //     // const [topNews] = await Promise.all([
// //     //   topNewsRes.json(),
// //     //   // matchesRes.json(),
// //     //   // allMatchesRes.json(),
// //     //   // postRes.json(),
// //     //   // teamsRes.json(),
// //     //   // imageRes.json()
// //     // ]);

// //     // const breaking = topNews;
// //     const topNews =  await fetch('http://localhost:3000/api/utils/api')
// //     const l = await topNews.json();
// //     // const l1 = matches;
// //     // const l2 = allMatches.reverse().slice(0, 100);
// //     // const l3 = posts.result;
// //     // const teamsData = teams.result;
// //     // const imageData = images;
// //     // console.log(topNewsRes)
// //     // context.res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate = 3600');
// //     // l, l1, l2, breaking, l3, teamsData, imageData
// //     console.log("appi call compelete", l)
// //     return {
// //       props: {

// //         fallback: {
// //           "/api/utils/api": l
// //         }

// //       }
// //     };

// //   // } catch (error) {
// //   //   console.error('Error fetching data:', error);
// //   //   return { props: { error: 'Failed to fetch data' } };
// //   // }
// // };

// // // https://www.g11fantasy.com/NewsSection/Get-VideoNews/



// // function GetData() {
// //   const { data, error } = useSWR("http://localhost:3000/api/utils/api", fetcher , { refreshInterval: 10000 })
// //   console.log(data, error)
// //   return (
// //     <>
// //       <h1>{data[1]?.id} *</h1>
// //     </>
// //   )
// // }

// import useSWR from 'swr';
// import { SWRConfig } from 'swr';
// import fetch from 'isomorphic-unfetch'; // Use isomorphic-unfetch for both client and server-side data fetching.

// async function fetcher(url) {
//   const res = await fetch(url);
//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   return res.json();
// }

// export async function getServerSideProps  () {
//   try {
//     const article = await fetch('http://localhost:3000/api/utils/api'); // Assuming `getArticleFromAPI` is defined elsewhere.
//   const k = await article.json()
//   console.log(k)
//     return {
//       props: {
//         fallback: {
//           'http://localhost:3000/api/utils/api': k,
//         },
//       },
//     };

//   } catch (error) {
//     return {
//       props: {
//         fallback: {
//           'http://localhost:3000/api/utils/api': null, // Passing null in case of failure
//         },
//       },
//     };
//   }
// }

// function Article() {
//   // `data` will always be available as it's in `fallback`.
//   const { data, error } = useSWR('http://localhost:3000/api/utils/api', fetcher , { refreshInterval: 50000 });

//   if (error) return <div>Error fetching data</div>;
//   if (!data) return <div>Loading...</div>;
// console.log(data)
// return(
//    <Home props={[data?.l]} match={data.l1} updatematch={data.l2} Breaking={data.breaking} latestnews={data.l3} Teamsdata={data.teamsData} image={data.imageData} ></Home> 
// );
// }

// export default function Page({ fallback }) {
//   // SWR hooks inside the `SWRConfig` boundary will use those values.
//   return (
//     <SWRConfig value={{ fallback }}>
//       <Article />
//     </SWRConfig>
//   );
// }


import useSWR from 'swr';

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

function MyComponent({ initialData }) {
     
  const { data: fetchedData, error } = useSWR('/api/utils/api',fetcher,{ initialData } );

  const data = fetchedData || initialData;
  // if (error) return <div>Error loading data</div>;
  if (!data) return <div>Loading...</div>;


  return (
    <div>
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