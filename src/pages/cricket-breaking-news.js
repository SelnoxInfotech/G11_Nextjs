// import React from 'react';
// import Head from 'next/head';
// import dynamic from 'next/dynamic'
// const Card = dynamic(() => import('../Component/card/index'), { ssr: false, loading: () => <p>Loading...</p> });
// import { Seo } from '../Component/Seo/Seo';
// import useSWR from 'swr';
//   import { useRouter } from 'next/router'
// const fetcher = async (url) => {
//   const res = await fetch(url);
//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   return res.json();
// };

// const Breakingnews = ({ initialData }) => {
//   // console.log(FilterbyidNews())
//   const router = useRouter()
//   const { data: fetchedData, error } = useSWR('/api/utils/breakingnew', fetcher, { initialData });
// if(router.asPath === "/breaking-news/" || router.asPath === "/BreakingNews/"){
//   window.history.replaceState({}, '', `/cricket-breaking-news`);
// }

//   const data = fetchedData?.breaking || initialData?.breaking;
//   // if (error) return <div>Error loading data</div>;
//   if (!data) return <div>Loading...</div>;
//   console.log(fetchedData?.breaking)
//   return (
//     <>
//       <Seo
//         image={"https://www.g11fantasy.com/image/images/download/media/Static/favicon.jpg"}
//         title="Breaking News | G11 Fantasy Cricket Prediction |"
//         description={"Breaking News on latest cricket updates. G11 Fantasy Cricket Prediction Website and Application for Today's match. # 1 Dream11 Fantasy Cricket Prediction tips."}
//         keywords={"Breaking News, Cricket news, G11 Fantasy Cricket Prediction, Dream11 prediction, Cricket News Today, Live Cricket News, Online Cricket News, Cricket News Today Match, world cup 2023 cricket news,"}
//         canonical={"https://g11prediction.com/breaking-news/"}
//       ></Seo>
//       <Card props={data}  heading={<h1>cricket breaking news</h1>}query={"cricket-breaking-news"}></Card>
//     </>
//   );
// };

// export default Breakingnews;




// export async function getServerSideProps() {
//   try {
//     const [topNewsRes] = await Promise.all([
//       fetch('https://www.g11fantasy.com/NewsSection/Get-News/1'),
//     ]);

//     const [topNews] = await Promise.all([
//       topNewsRes.json(),
//     ]);


//     const responseData = {
//       breaking: topNews,
//     };
//     return {
//       props: {
//         initialData: responseData,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return {
//       props: {
//         initialData: null,
//         error: 'Failed to fetch data',
//       },
//     };
//   }
// }


import React from 'react';
import dynamic from 'next/dynamic';
import  Seo from '../Component/Seo/Seo';
import { useRouter } from 'next/router';
const Card = dynamic(() => import('../Component/card/index'), { ssr: false, loading: () => <p>Loading...</p> });

const Breakingnews = ({ breakingData }) => {
  const router = useRouter();
     
React.useEffect(()=>{
  
    // redirect("/cricket-breaking-news/");
    router.push({ pathname: '/cricket-breaking-news/'});
  

},[])
     
  if (!breakingData) return <div>Loading...</div>;
  // if(router.asPath === "/breakingnews/" || "/breakingnews") {
  //   // redirect("/cricket-breaking-news/");
  //   router.push({ pathname: '/cricket-breaking-news/'});
  // }
  return (
    <React.Fragment>
      <Seo
        image={"https://www.g11fantasy.com/image/images/download/media/Static/favicon.jpg"}
        title="Breaking News | G11 Fantasy Cricket Prediction |"
        description={"Breaking News on latest cricket updates. G11 Fantasy Cricket Prediction Website and Application for Today's match. # 1 Dream11 Fantasy Cricket Prediction tips."}
        keywords={"Breaking News, Cricket news, G11 Fantasy Cricket Prediction, Dream11 prediction, Cricket News Today, Live Cricket News, Online Cricket News, Cricket News Today Match, world cup 2023 cricket news,"}
        canonical={"https://g11prediction.com/breaking-news/"}
      />
      <div className='container'>
       <Card props={breakingData} heading={<h1>Cricket breaking news</h1>} query={"cricket-breaking-news"} data1={''} />
       </div>
    </React.Fragment>
  );
};

export default Breakingnews;

export async function getStaticProps() {
  try {
    const topNewsRes = await fetch('https://www.g11fantasy.com/NewsSection/Get-News/1');
    const topNews = await topNewsRes.json();
    return {
      props: {
        breakingData: topNews,
      },
      revalidate: 60 , // Revalidate every hour (in seconds)
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        breakingData: null,
        error: 'Failed to fetch data',
      },
      revalidate: 60 * 5, // Revalidate every 5 minutes if an error occurs
    };
  }
}



