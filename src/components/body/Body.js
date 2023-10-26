import React, { useState } from 'react'
import RestCards from './Rest-cards'
import restaurants from '../../utils/mockData'


const Body = () => {
  const [restList,setRestList]=useState(restaurants.map((x)=>x.info))
  // const resInfo=(restaurants.map((x)=>x.info))
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