
import { Inter } from "next/font/google";
import dynamic from 'next/dynamic'
const Home = dynamic(() => import('../Component/Home/index'), { ssr: true, loading: () => <p>Loading...</p> });
// const {SeoHomepage} = dynamic(() => import('../Component/Seo/Seo'), { ssr: false, loading: () => <p>Loading...</p> });
import { Seo } from "@/Component/Seo/Seo";
const inter = Inter({ subsets: ["latin"] });




export default function Dashboard(props) {
  return (
    <>
      <Seo
        image={props.ImageData[9].image}
        title={"G11- Fantasy Cricket Prediction for Today's Match |"}
        description="G11- Fantasy Cricket Prediction for Today's Match. Dream11, My11Circle, Playerzpot, Howzat, Gamezy and Many More apps. Dream 11 Tips Cricket Prediction."
        keywords={"G11 Fantasy Cricket Prediction, cricket news, Today's match Prediction, Latest Cricket News, Cricket Betting Tips & Predictions, fantasy cricket prediction, dream 11 today prediction, today best cricket match prediction"}
      ></Seo>
      <Home props={[props?.l]} match={props.l1} updatematch={props.l2} Breaking={props.Breaking} latestnews={props.l3} Teamsdata={props.Teamsdata} image={props.ImageData} ></Home>
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
  const l2 = props2.reverse().slice(0, 100)
  const res3 = await fetch('https://grand11.in/g11/api/post')
  const props3 = await res3.json()
  const l3 = props3.result
  const Team = await fetch('https://grand11.in/g11/api/teams')
  const TeamProps = await Team.json()
  const Teamsdata = TeamProps.result

  const Image = await fetch('https://www.g11fantasy.com/NewsSection/Get-StaticImage/')
  const Imageprops = await Image.json()
  const ImageData = Imageprops

  return { props: { l, l1, l2, Breaking, l3, Teamsdata, ImageData } }


}

// https://www.g11fantasy.com/NewsSection/Get-VideoNews/