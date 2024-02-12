import React, { useState } from 'react'
import Shimmer from '../Shimmer';
import { Link, useParams } from 'react-router-dom';
import useRestaurantMenu from '../../utils/useRestaurantMenu';
import RestaurantMenuCategory from './RestaurantMenucategory';
import { useSelector } from 'react-redux';

const RestaurantMenu = () => {
   
    const {resId}=useParams()
    const items=useSelector((store)=>store.cart.items)
    let totalSum=0;
    items.forEach((item)=>{
       totalSum=totalSum+(item.card.info.price/100 || item.card.info.defaultPrice/100)
    })

    const resInfo=useRestaurantMenu(resId)

    const[shownIndex,setShownIndex]=useState(0);
    const[accordianToggle,setAccordianToggle]=useState(false);
    
    if (resInfo==="") return <Shimmer/>;

    const{areaName,city,locality,name,costForTwoMessage,cuisines,avgRatingString,totalRatingsString}=resInfo?.cards[0]?.card?.card?.info;

    const{slaString}=resInfo?.cards[0]?.card?.card?.info.sla

    const{itemCards}=resInfo?.cards[2]?.groupedCard?. cardGroupMap?.REGULAR?.cards[2]?.card?.card

    const filteredCard=resInfo?.cards[2]?.groupedCard?. cardGroupMap?.REGULAR?.cards.filter((x)=>x.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  return (
    <div className="w-9/12 m-auto my-12">
      <div className="flex justify-between">
        <div>
          <h2 className="font-semibold text-xl">{name}</h2>
          <p>{cuisines.join(",")}</p>
          <p>
            {areaName},{locality}
          </p>
          <p>{city}</p>
          
        </div>
        <div className="border border-solid border-gray-500 justify-center h-20 w-16 flex flex-wrap rounded-xl">
          <p className="font-bold text-green-500 justify-center">{"⭐" +avgRatingString}</p>
          <div className='w-32 bg-black h-[1px]'></div>
          <p className="px-3 text-xs font-medium">{totalRatingsString}</p>
          
        </div>
        
      </div>
      <div className=' bg-black h-[1px] my-9'></div>
      <div className='flex'>
      <h3 className='font-bold'>{"⌛"+slaString}</h3>
      <h3 className='px-4 font-bold'>{costForTwoMessage}</h3>
      </div>
      <div className=' bg-black h-[1px] my-9'></div>
          {filteredCard.map((menu,index) => (
            
              <RestaurantMenuCategory key={menu.card.card.title} data={menu?.card?.card}
              shownItems={index===shownIndex && accordianToggle}
              setShownIndex={()=>setShownIndex(index)}
              setAccordianToggle={()=>setAccordianToggle(!accordianToggle)}
              accordianToggle={accordianToggle}
              cartItemRestaurant={resInfo?.cards[0]?.card?.card?.info}
              />
          ))}
          {items.length!=0?<div className='bg-green-400 fixed h-11 bottom-1 w-[75%] rounded-sm'><span className='text-white font-bold text-sm px-2 my-3 float-left '>{items.length} items | ₹{totalSum}</span>
          <Link className='text-white font-bold text-sm px-2 my-3 float-right mx-4' to={"/cart"}>🛒 View Cart</Link>
           </div>:null}
          
    </div>
  );
}

export default RestaurantMenu