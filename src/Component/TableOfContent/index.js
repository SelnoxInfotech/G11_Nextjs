import React, { useEffect ,useState  } from 'react'
import style from '../../styles/Style.module.scss'
import Link from 'next/link';
const index = (props) => {
   const [recentnews , setrecentnews] = useState([]);
   const apicalling= async ()=>{
    const topNewsRes = await fetch('https://www.g11fantasy.com/NewsSection/Get-News/1');
     const topNews = await topNewsRes.json();
     await setrecentnews(topNews.slice(0,5))
}
    useEffect(()=>{
        apicalling()  
        
    },[])
  console.log(recentnews)
  function modifystr(str) {

    str = str?.replace(/[^a-zA-Z0-9/ ]/g, "-");
    str = str?.trim().replaceAll(' ', "-");
    let a = 0;
    while (a < 1) {
        if (str?.includes("--")) {
            str = str?.replaceAll("--", "-")
        } else if (str?.includes("//")) {
            str = str?.replaceAll("//", "/")
        } else if (str?.includes("//")) {
            str = str?.replaceAll("-/", "/")
        } else if (str?.includes("//")) {
            str = str?.replaceAll("/-", "/")
        } else {
            a++
        }
    }

    return str?.toLowerCase()
}
  return (
    <div className={style.breaknewssidebar}>
    <h4 className={style.breaknewssidebartitle}>Recent News</h4>
    <ul className={style.breaknewssidebarList}>
        
    {
        recentnews?.map((item)=>{
            console.log(item, 'item')
            return <Link href={`/cricket-breaking-news/${item?.urlslug !== (null || undefined) ? modifystr(item?.urlslug) : modifystr(item?.Title ||  item?.title)}/${item.id}`}><li className={style.breaknewssidebarListitem}>{item.Title}</li></Link>
        })
    }
    </ul>
   </div>
  )
}

export default index

