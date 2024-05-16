import React, { useEffect, useState } from 'react'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY } from '../../Data'
import { value_converter } from '../../Data'
import moment from 'moment'
import { useParams } from 'react-router-dom'


const Playvideo = () => {
    const{videoId}=useParams()

    const[apiData,setapiData] =useState(null)
    const[channelData,setChannelData] =useState(null)
    const[commentData,setcommentData]=useState([])
     
    const fetchVideoData =async ()=>{
        const videoDetailsurl=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY} `
        await fetch(videoDetailsurl).then((res)=>res.json()).then((data)=>setapiData(data.items[0]))
    }

    const fetchOtherdata=async()=>{
        const channelData_url =`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
       await fetch(channelData_url).then((res)=>res.json()).then(data=>setChannelData(data.items[0]))
      
       const comment_url=` https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResult=50&videoId=${videoId}&key=${API_KEY}`
             await fetch(comment_url).then((res)=>res.json()).then(data=>setcommentData(data.items))
    }

    useEffect(()=>{
        fetchVideoData();
    },[videoId])

  useEffect(()=>{
   fetchOtherdata()
  },[apiData])

  return (<>
    <div className='basis-[69%]'>
       
        <iframe className='w-[100%] h-[37vw]'src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h3 className='mt-2 text-[22px] font-bold'>{apiData?apiData.snippet.title:"title here"}</h3>
        <div className='flex items-center justify-between flex-wrap mt-2  text-[#5a5a5a] '>
            <p>{apiData? value_converter(apiData.statistics.viewCount):"16k"} views &bull; { apiData?moment(apiData.snippet.publishedAt).fromNow():""} </p>
            <div className='flex items-center gap-3'>
                <span className='inline-flex items-center '><img className='w-[20px] mr-2'  src={like} alt=''/>{apiData? value_converter(apiData.statistics.likeCount):1600}</span>
                <span className='inline-flex items-center '><img className='w-[20px] mr-2'  src={dislike} alt=''/></span>
                <span className='inline-flex items-center '><img className='w-[20px] mr-2'  src={share} alt=''/>share</span>
                <span className='inline-flex items-center '><img  className='w-[20px] mr-2' src={save} alt=''/>save</span>
            </div>
        </div>
        <hr className='border-[0] h-[1px] bg-[#ccc] my-2'/>
        <div className='flex items-center mt-4'>
            <img className='w-[40px] rounded-[50%] mr-4' src={channelData?channelData.snippet.thumbnails.default.url:""} alt=''/>
            <div className='flex-1 leading-[18px]'>
                <p className='text-[#000] font-[600] text-[18px]'>{apiData? apiData.snippet.channelTitle:""}</p>
                <span className='text-[13px] text-[#5a5a5a]'>{channelData?value_converter(channelData.statistics.subscriberCount):"1M"} Subscribers</span>
            </div>
            <button className='bg-[red] text-[#fff] py-2 px-7 rounded-md cursor-pointer outline-none '>Subscribe</button>
        </div>
        <div className='pl-[55px] my-[15px]'>
            <p className='text-[14xp] mb-1 text-[#5a5a5a]'>{apiData?apiData.snippet.description.slice(0,250):""}</p>
            <hr className='border-[0] h-[1px] bg-[#ccc] my-2'/>
           
            <h4 className='text-[14px] text-[#383737] mt-3'>{apiData?value_converter(apiData.statistics.commentCount):""}</h4>
            {commentData.map((item,index)=>{
               return(
                <div key={index} className='flex items-start my-5'>
                <img className='w-[35px] rounded-[50%] mr-4' src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}/>
                <div >
                    <h3 className='text-[14px] mb-[2px] font-semibold'>{item.snippet.topLevelComment.snippet.authorDisplayName} <span className='text-[12px] text-[#5a5a5a] font-[500] ml-2'>1 day ago</span></h3>
                    <p> {item.snippet.topLevelComment.snippet.textDisplay} </p>
                    <div className='flex items-center my-2 text-[14px]' >
                     <img className='w-5 mr-[5px]' src={like}/>
                     <span className='mr-5 text-[#5a5a5a]'>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                     <img className='w-5 mr-[5px]' src={dislike}/>
                     
                    </div>
                </div>
            </div>
               )
            })}
           
            
        </div>
        </div>
   

  </>)
}

export default Playvideo
