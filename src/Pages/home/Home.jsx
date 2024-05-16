import React, { useState } from 'react'
import Sidebar from '../../sidebar/Sidebar'
import Feed from '../../components/feed/Feed'

const Home = ({sidebar}) => {

  const[category,setcategory] =useState(0)
  return (<>
    <div >
    <Sidebar sidebar={sidebar} category={category} setcategory={setcategory}/>
    <div className={sidebar? "pl-[17%] pb-5":"pl-[7%]"}>
      <Feed category={category}/>
    </div>
    </div>
  </>)
}

export default Home;
