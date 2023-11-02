import React, { useState } from 'react'
import { useEffect } from 'react'
import Shimmer from './Shimmer';
import { REST_MENU_IMG_URL, SELECTED_REST_URL } from '../utils/constants';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
   
    const {resId}=useParams()

    const resInfo=useRestaurantMenu(resId)
    

    if (resInfo==="") return <Shimmer/>;

    const{areaName,city,locality,name,costForTwoMessage,cuisines,avgRatingString}=resInfo?.cards[0]?.card?.card?.info;

    const{itemCards}=resInfo?.cards[2]?.groupedCard?. cardGroupMap?.REGULAR?.cards[2]?.card?.card

  return(
    <div className='menu'>
        <h2>{name}</h2>
        <p>{cuisines.join(",")}</p>
        <p>{areaName},{locality}</p>
        <p>{city}</p>
        <h3>{costForTwoMessage}</h3>
        <p>{avgRatingString}</p>
        <h3>Recommended</h3>
        <ul>
            {itemCards.map((menu)=><li key={menu.card.info.id}>
                <img src={REST_MENU_IMG_URL+menu.card.info.imageId}></img>
                <h3>{ menu.card.info.name}</h3>
            <h4>Rs. { menu.card.info.price/100}</h4>
            <p>{menu.card.info.description} </p> 
                </li>)}
        </ul>
    </div>
  )
}

export default RestaurantMenu