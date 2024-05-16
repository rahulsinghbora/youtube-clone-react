import React, { useEffect, useState } from 'react'
import { API_KEY, value_converter } from '../../Data'
import { Link } from 'react-router-dom';

const Recommended = ({categoryId}) => {

    const[apiData,setApiData]=useState([]);

    const fetchdata= async ()=>{
        const relatedVideo=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&videoCategoryId=${categoryId}&key=${API_KEY}`
       await fetch(relatedVideo).then(res=>res.json()).then(data=>setApiData(data.items))
    }

    useEffect(()=>{
      fetchdata();
    },[])

  return (<>
    <div className='basis-[30%]'>
        {apiData.map((item,index)=>{
            return(
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='flex content-between mb-2 gap-2'>
            <img className='basis-[49%] w-[50%]' src={item.snippet.thumbnails.medium.url} alt=''/>
            <div className='basis-[49%]'>
                <h4 className='text-[13px] mb-1 font-bold'>{item.snippet.title}</h4>
                <p className='font-semibold'>{item.snippet.channelTitle}</p>
                <p>{value_converter(item.statistics.viewCount)}</p>
            </div>
        </Link>
            )
        })}
        
    </div>
  </>)
}

export default Recommended
