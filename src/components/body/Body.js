import React from 'react'
import RestCards from './Rest-cards'
import restaurants from '../../utils/mockData'


const resInfo=(restaurants.map((x)=>x.info))

const Body = () => {
  return (
    <div className='body'>
        <div className='Search'>
            SearchBar
        </div>
        <div className='res-container'>
            {resInfo.map((restrnt)=><RestCards key={restrnt.id} restData={restrnt}/>)}
        </div>
    </div>
  )
}

export default Body