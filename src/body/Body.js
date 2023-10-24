import React from 'react'
import RestCards from './Rest-cards'

const Body = () => {
  return (
    <div className='body'>
        <div className='Search'>
            SearchBar
        </div>
        <div className='res-container'>
            <RestCards resname="Meghana foods" cuisine="Hyderabadi biryani,North Indian"/>
            <RestCards resname="KFC" cuisine="Chicken, Non-veg"/>
            <RestCards resname="Burger king" cuisine="Burger,Fast food"/>
            {/* <RestCards/>
            <RestCards/>
            <RestCards/> */}
        </div>
    </div>
  )
}

export default Body