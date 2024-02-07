
import Image from "next/image";
import { Inter } from "next/font/google";
import dynamic from 'next/dynamic'
const Home = dynamic(() => import('../Component/Home/index'), { ssr: true, loading: () => <p>Loading...</p> });
const inter = Inter({ subsets: ["latin"] });



export default function Dashboard(props) {
  return (
    <>
      <Home props={[props?.l]}  match={props.l1} updatematch={props.l2} Breaking={props.Breaking} latestnews={props.l3}></Home>
    </>
  );
}

export const getStaticProps = async (context) => {
  
  const res = await fetch('https://www.g11fantasy.com/NewsSection/Get-TopNews/1')
  const props = await res.json()
  const l = props[0]
  const Breaking = props
  const res1 = await fetch('https://grand11.in/g11/api/matches')
  const props1 = await res1.json()
  const l1 = props1
  const res2 = await fetch('https://grand11.in/g11/all_matches_api.php')
  const props2 = await res2.json()
  const l2 = props2.reverse().slice(0,100)
  const res3 = await fetch('https://grand11.in/g11/api/post')
  const props3 = await res3.json()
  const l3 = [props3.result[0]]
  return { props: { l ,l1,l2,Breaking , l3} }

}

