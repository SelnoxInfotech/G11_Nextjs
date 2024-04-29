// // import React from "react";
import dynamic from 'next/dynamic'
import  Review from "../Component/Home/Static/Review"
import Customerrate from "../Component/Home/Static/Customerrate"

const Seo = dynamic(() => import('../Component/Seo/Seo'));
const ScrollBreaking = dynamic(() => import('../Component/Home/ScrollBreakingnews/index'), { ssr: false, loading: () => <p>Loading...</p> });
const UpdateMatch = dynamic(() => import('../Component/Home/Updatematch/Match'), { ssr: true, loading: () => <p>Loading...</p> });
import Banner from "../Component/Home/Banner/index"
import Static_Content from "../Component/Home/Banner/WelcomestaticContant"
const Breakingnews = dynamic(() => import('../Component/Home/BreakingNews/Breakingnews'), { ssr: true, loading: () => <p>Loading...</p> })
const LatestNews = dynamic(() => import('../Component/Home/LatestNews/LatestNews'), { ssr: true, loading: () => <p>Loading...</p> })
const HightLight = dynamic(() => import('../Component/Home/HightLight/HightLight'), { ssr: true, loading: () => <p>Loading...</p> })
import Static from "../Component/Home/Static/Static"
import SecondStatic from "../Component/Home/Static/SecondStatic"
const Teams = dynamic(() => import('../Component/Home/Team/Team'), { ssr: true, loading: () => <p>Loading...</p> })

// const Review = dynamic(() => import('../Component/Home/Static/Review'), { ssr: true, loading: () => <p>Loading...</p> })
// const Customerrate = dynamic(() => import('../Component/Home/Static/Customerrate'), { ssr: true, loading: () => <p>Loading...</p> })
const Staticres = dynamic(() => import('../Component/Home/Static/Staticres'), { ssr: true, loading: () => <p>Loading...</p> })
const Companyexpi = dynamic(() => import('../Component/Home/Static/Companyexpi'), { ssr: true, loading: () => <p>Loading...</p> })
const Footer = dynamic(() => import('../Component/Home/FooterBanner/FooterBanner'))



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
      <ScrollBreaking props={[data?.ipl[0]]}></ScrollBreaking>
      <Banner match={data.l1}></Banner>
      <div className="container">
        <UpdateMatch updatematch={data.l1}></UpdateMatch>
        <Static_Content></Static_Content>
        <Breakingnews Breaking={data.ipl}></Breakingnews>
        <LatestNews latestnews={[data.ipl[0]]}></LatestNews>
        <HightLight post={data.post} ></HightLight>
        <Static></Static>
        <SecondStatic></SecondStatic>
        <Teams ></Teams>
        <Review></Review>
        <Customerrate ></Customerrate>
        <Staticres></Staticres>
      </div>
      <Companyexpi></Companyexpi>
      <Footer></Footer>
    </div>
  );
}

export async function getStaticProps() {
  const handleError = (error) => {
    console.error('Error fetching data:', error);
    return {
      props: {
        initialData: [],
        error: 'Failed to fetch data',
      },
    };
  };

  try {
    const [matchesRes, post, iplRes] = await Promise.all([
      fetch('https://grand11.in/g11/api/matches').catch(handleError),
      fetch('https://g11fantasy.com/NewsSection/tbl_pageApi/').catch(handleError),
      fetch('https://www.g11fantasy.com/NewsSection/Get-TopNews/1').catch(handleError),

    ]);

    const [matches, Post, ipl] = await Promise.all([
      matchesRes.json().catch(handleError),
      post.json().catch(handleError),
      iplRes.json().catch(handleError),

    ]);

    // Assuming breaking news is the first item in topNews array
    const responseData = {
      l1: matches.result,
      post: Post,
      ipl: ipl,

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
