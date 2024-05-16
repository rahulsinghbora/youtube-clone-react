import React, { useEffect, useState } from 'react'
import thumbnail1 from "../../assets/thumbnail1.png"
import thumbnail2 from "../../assets/thumbnail2.png"
import thumbnail3 from "../../assets/thumbnail3.png"
import thumbnail4 from "../../assets/thumbnail4.png"
import thumbnail5 from "../../assets/thumbnail5.png"
import thumbnail6 from "../../assets/thumbnail6.png"
import thumbnail7 from "../../assets/thumbnail7.png"
import thumbnail8 from "../../assets/thumbnail8.png"
import { Link } from 'react-router-dom'
import { API_KEY, value_converter } from '../../Data'
import moment from 'moment'



const Feed = ({category}) => {
    const[data,setdata]=useState([])

    const fetchdata=async()=>{
      const videoAPI=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY} `
      
        await fetch(videoAPI).then(res=>res.json()).then(data=>setdata(data.items))
    }

   useEffect(()=>{
     fetchdata();
   },[category])

  return (<>
    <div className="grid  lg:grid-cols-4  gap-x-6 gap-y-4  mt-4">
   {data.map((item,index)=>{
    return (
         <Link key={index} to={`video/${item.snippet.categoryId}/${item.id}`}>
        <img className="w-[100%] rounded-[5px]"  src={item.snippet.thumbnails.medium.url}/>
        <h2 className="text-4 font-semibold my-1">{item.snippet.title}</h2>
        <h3 className='text-[14px] font-semibold my-[6px] text-[#555]'>{item.snippet.channelTitle}</h3>
        <p className="text-[14px]">{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
    </Link>
    )
   })}
    </div>
  </>)
}

export default Feed
