import React, { useEffect, useState } from 'react'
import RestCards from './Rest-cards'
import Shimmer from '../Shimmer'


const Body = () => {
  const [restList,setRestList]=useState([])
  
  useEffect(()=>{fetchData()},[])

  const fetchData=async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6865235&lng=77.3470746&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json=await data.json()
    const json1=json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    let json2=json1.map((x)=>x.info)
    setRestList(json2)
    // console.log(json2[0].name);
    // console.log(json1)
  }

  if(restList.length===0){
    return <Shimmer/>
  }

  return (
    <div className='body'>
        <div className='filter'>
            <button className='filter-btn' onClick={()=>{let res1=restList.filter((filtered)=>filtered.avgRating>4)
            setRestList(res1)}}>Top Rated Restaurants</button>
        </div>
        <div className='res-container'>
            {restList.map((restrnt)=><RestCards key={restrnt.id} restData={restrnt}/>)}
        </div>
    </div>
  )
}

export default Body