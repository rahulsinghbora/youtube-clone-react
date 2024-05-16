import React from 'react'
import home from '../../src/assets/home.png'
import game_icon from '../../src/assets/game_icon.png'
import automobiles from '../../src/assets/automobiles.png'
import sports from '../../src/assets/sports.png' 
import entertainment from '../../src/assets/entertainment.png' 
import tech from '../../src/assets/tech.png' 
import music from '../../src/assets/music.png' 
import blogs from '../../src/assets/blogs.png' 
import news from '../../src/assets/news.png' 
import jack from '../../src/assets/jack.png' 
import simon from '../../src/assets/simon.png' 
import tom from '../../src/assets/tom.png'
import megan from '../../src/assets/megan.png' 
import cameron from '../../src/assets/cameron.png' 


const Sidebar = ({sidebar, category ,setcategory}) => {
    
  return (<>
    
    <div className={`sidebar ${sidebar ? "w-[15%]" : "w-[5%] "} h-[100vh] fixed top-0 bg-[#fff] pl-[2%] pt-[80px]  `}>

        <div >
            <div onClick={()=>setcategory(0)} className={`${category===0? "pb-[2px]  border-b-[1px] border-red-500 flex items-center mb-[10px] flex-wrap cursor-pointer":"flex items-center mb-[10px] flex-wrap cursor-pointer"}`}>
                <img className={`${sidebar?"" :"mb-[8px]" }  w-[20px] mr-[20px]`} src={home}/><p className={sidebar?"": "hidden"}>Home</p>
            </div>
            <div onClick={()=>setcategory(20)} className={`${category===20? "pb-[2px] border-b-[1px] border-red-500 ":"flex items-center mb-[10px] flex-wrap cursor-pointer"}flex items-center mb-[10px] flex-wrap cursor-pointer`}>
                <img className={`${sidebar?"" :"mb-[8px]"}   w-[20px] mr-[20px]`} src={game_icon}/><p className={sidebar?"": "hidden"}>Gaming</p>
            </div>
            <div onClick={()=>setcategory(2)} className={`${category===2? "pb-[2px] border-b-[1px] border-red-500 ":"flex items-center mb-[10px] flex-wrap cursor-pointer"}flex items-center mb-[10px] flex-wrap cursor-pointer`}>
                <img className={`${sidebar?"" :"mb-[8px]"} w-[20px] mr-[20px]`} src={automobiles}/><p className={sidebar?"": "hidden"}>automobiles</p>
            </div>
            <div  onClick={()=>setcategory(17)}className={`${category===17? "pb-[2px] border-b-[1px] border-red-500 ":"flex items-center mb-[10px] flex-wrap cursor-pointer"}flex items-center mb-[10px] flex-wrap cursor-pointer`}>
                <img className={`${sidebar?"" :"mb-[8px]"} w-[20px] mr-[20px]`} src={sports}/><p className={sidebar?"": "hidden"}>Sports</p>
            </div>
            <div onClick={()=>setcategory(24)} className={`${category===24? "pb-[2px] border-b-[1px] border-red-500 ":"flex items-center mb-[10px] flex-wrap cursor-pointer"}flex items-center mb-[10px] flex-wrap cursor-pointer`}>
                <img className={`${sidebar?"" :"mb-[8px]"} w-[20px] mr-[20px]`} src={entertainment}/><p className={sidebar?"": "hidden"}>Entertainment</p>
            </div>
            <div onClick={()=>setcategory(28)} className={`${category===28? "pb-[2px] border-b-[1px] border-red-500 ":"flex items-center mb-[10px] flex-wrap cursor-pointer"}flex items-center mb-[10px] flex-wrap cursor-pointer`}>
                <img className={`${sidebar?"" :"mb-[8px]"} w-[20px] mr-[20px]`} src={tech}/><p className={sidebar?"": "hidden"}>Technology</p>
            </div>
            <div onClick={()=>setcategory(10)} className={`${category===10? "pb-[2px] border-b-[1px] border-red-500 ":"flex items-center mb-[10px] flex-wrap cursor-pointer"}flex items-center mb-[10px] flex-wrap cursor-pointer`}>
                <img className={`${sidebar?"" :"mb-[8px]"} w-[20px] mr-[20px]`} src={music}/><p className={sidebar?"": "hidden"}>music</p>
            </div>
            <div onClick={()=>setcategory(22)} className={`${category===22? "pb-[2px] border-b-[1px] border-red-500 ":"flex items-center mb-[10px] flex-wrap cursor-pointer"}flex items-center mb-[10px] flex-wrap cursor-pointer`}>
                <img className={`${sidebar?"" :"mb-[8px]"} w-[20px] mr-[20px]`} src={blogs}/><p className={sidebar?"": "hidden"}>blogs</p>
            </div>
            <div onClick={()=>setcategory(25)} className={`${category===25? "pb-[2px] border-b-[1px] border-red-500 ":"flex items-center mb-[10px] flex-wrap cursor-pointer"}flex items-center mb-[10px] flex-wrap cursor-pointer`}>
                <img  className={`${sidebar?"" :"mb-[8px]"} w-[20px] mr-[20px]`}src={news}/><p className={sidebar?"": "hidden"}>news</p>
            </div>
           <hr className={`border-0 h-[1px] bg-[#bdb6b6] w-[85%]  "" :"mb-4 w-[15%]" }`}/>
        </div>
        <div >
            <h3 className={`text-[13px] my-5 text-[#5a5a5a] ${sidebar? "": "hidden"}`}>Suscribed</h3>
            <div className='flex items-center mb-[10px] flex-wrap cursor-pointer'>
                <img className={`${sidebar?"" :"mb-[1px]"} w-6 rounded-[50%] mr-5`} src={jack}/><p className={sidebar ? "" : "hidden"}>jack</p>
            </div>
            <div className='flex items-center mb-[10px] flex-wrap cursor-pointer'>
                <img  className={`${sidebar?"" :"mb-[1px]"} w-6 rounded-[50%] mr-5`}src={simon}/><p className={sidebar ? "" : "hidden"}>MrBeast</p>
            </div>
            <div className='flex items-center mb-[10px] flex-wrap cursor-pointer'>
                <img className={`${sidebar?"" :"mb-[1px]"} w-6 rounded-[50%] mr-5`} src={tom}/><p className={sidebar ? "" : "hidden"}>JustinBieber</p>
            </div>
            <div className='flex items-center mb-[10px] flex-wrap cursor-pointer'>
                <img className={`${sidebar?"" :"mb-[1px]"} w-6 rounded-[50%] mr-5`} src={megan}/><p className={sidebar ? "" : "hidden"}>5-min Craft</p>
            </div>
            <div className='flex items-center mb-[10px] flex-wrap cursor-pointer'>
                <img className={`${sidebar?"" :"mb-[1px]"} w-6 rounded-[50%] mr-5`} src={cameron}/><p className={sidebar ? "" : "hidden"}>Nas Daily</p>
            </div>
        </div>
    </div>           

        
  </>)
}

export default Sidebar
