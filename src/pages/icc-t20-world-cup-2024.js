import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic'
const Card = dynamic(() => import('../Component/card/index'), { ssr: true, loading: () => <p>Loading...</p> });
import  Seo  from '../Component/Seo/Seo';
import useSWR from 'swr';
import Cardskeleton from '../Component/skeleton/cardskeleton'
import style from "../styles/Style.module.scss"
const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

const Icc2024 = (props) => {
 const [propsdata, setPropsData] = React.useState(props?.initialData?.breaking || [])
  // const k = initialData
  // const { data: fetchedData, error } = useSWR(`/FilterbySubCategory/${8}`, fetcher, { k });

  // const data = fetchedData ; 
 

  // if (!data) return <div>Loading...</div>;

  function loadmorefun() {
    axios.get(`https://g11fantasy.com/NewsSection/Get-NewsBySubCategoryNewApi/?limit=${propsdata.length + 10}&offset=0&subcategory=8`)
      .then((data) => {
        setPropsData(prevPropsData => data.data);
      }).catch(error => console.log(error));
  }

 



  if (!propsdata) {
    return (
      <div className='container '>
        <div className={style.Breaking_new}>
          <div className={style.Breaking_newCardWrapper}>
            {
              [1, 5, 6, 6, 6, 6, 6, 6, 6, 6].map((e, i) => {
                return < Cardskeleton key={i} />
              })
            }
          </div>
        </div>

      </div>
    )
  }

  return (
    <>
      <Seo
        Breadcrumlist={[{Home:"https://g11prediction.com/" } , {News: "/icc-cricket-world-cup-2024/"}]}
        image={"https://www.g11fantasy.com/image/images/download/media/Static/favicon.jpg"}
        title={"ICC Men's T20 World Cup 2024 Latest News, Predictions, Analysis l G11prediction"}
        description={"ICC Men's T20 World Cup 2024 Live Updates, Latest News, Match Predictions, ICC Men's T20 World Cup 2024 Match Schedule, Venue Details, Points Table, Match Analysis And Much More Only On G11prediction"}
        keywords={"ICC T20 World Cup 2024,T20 schedule 2024, T20 teams 2024, T20 venues 2024, Dream11 prediction, T20 match prediction, T20 match analysis, T20 Latest News, T20 Live Updates, T20 Highlights,"}
        canonical={"https://g11prediction.com/icc-t20-world-cup-2024/"}
 ></Seo>
  <div className='container' style={{minHeight:"680px"}}>
      <Card fun={loadmorefun} slug={"icc t20 world cup 2024"} props={props.initialData.breaking} heading={<h1>Icc t20 world cup 2024</h1>} query={"icc-t20-world-cup-2024"} data1={"Icc2024"}></Card> 
      </div>
    </>
  );
};

export default Icc2024;



// export async function getStaticProps(ctx) {
//   try {
//     const [topNewsRes] = await Promise.all([
//       fetch(`https://g11fantasy.com/NewsSection/FilterbySubCategory/${8}`),
//     ]);

//     const [topNews] = await Promise.all([
//       topNewsRes.json(),
//     ]);


//     const responseData = {
//       breaking: topNews.data,
//     };
//     return {
//       props: {
//         initialData: responseData.breaking,
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

export async function getServerSideProps() {
  try {
    const [topNewsRes] = await Promise.all([
      fetch('https://g11fantasy.com/NewsSection/Get-NewsBySubCategoryNewApi/?limit=10&offset=0&subcategory=8'),
    ]);

    const [topNews] = await Promise.all([
      topNewsRes.json(),
    ]);


    const responseData = {
      breaking: topNews,
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
