import React from 'react'
import Playvideo from '../../components/Playvideo/Playvideo'
import Recommended from '../../components/recommended/Recommended'
import { useParams } from 'react-router-dom'

const Video = () => {
   const{videoId,categoryId}= useParams()
  return (
    <div className='bg-[#f9f9f9] px-[2%] py-5 flex gap-2 content-between flex-wrap' >
      <Playvideo videoId={videoId} categoryId={categoryId}/>
      <Recommended categoryId={categoryId}/>
    </div>
  )
}

export default Video
