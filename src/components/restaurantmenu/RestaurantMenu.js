import React from 'react'
import Shimmer from '../Shimmer';
import { REST_MENU_IMG_URL } from '../../utils/constants';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../../utils/useRestaurantMenu';
import RestaurantMenuCategory from './RestaurantMenucategory';

const RestaurantMenu = () => {
   
    const {resId}=useParams()

    const resInfo=useRestaurantMenu(resId)
    console.log(resInfo)
    

    if (resInfo==="") return <Shimmer/>;

    // console.log(resInfo)

    const{areaName,city,locality,name,costForTwoMessage,cuisines,avgRatingString,totalRatingsString}=resInfo?.cards[0]?.card?.card?.info;

    const{slaString}=resInfo?.cards[0]?.card?.card?.info.sla

    const{itemCards}=resInfo?.cards[2]?.groupedCard?. cardGroupMap?.REGULAR?.cards[2]?.card?.card

    const filteredCard=resInfo?.cards[2]?.groupedCard?. cardGroupMap?.REGULAR?.cards.filter((x)=>x.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(filteredCard)

  return (
    <div className="w-5/6 m-auto my-12">
      <div className="flex justify-between">
        <div>
          {/* <img className='m-auto' src={REST_MENU_IMG_URL+cloudinaryImageId}/> */}
          <h2 className="font-semibold text-xl">{name}</h2>
          <p>{cuisines.join(",")}</p>
          <p>
            {areaName},{locality}
          </p>
          <p>{city}</p>
          
          {/* <h3>{costForTwoMessage}</h3> */}
          
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
      <h3 className='font-bold text-xl'>Recommended</h3>
        {/* <ul> */}
          {filteredCard.map((menu) => (
            
            // <li key={menu.card.info.id}>
            //   <div className='flex'>
            //   <div className='w-10/12'>
            //   <h3 className='font-bold py-4'>{menu.card.info.name}</h3>
            //   <h4 className='py-3'>{"₹ "+menu.card.info.price / 100}</h4>
            //   <p>{menu.card.info.description} </p>
            //   </div>
            //   <div className='relative w-28 my-auto'>
            //   <img className=''
            //     alt="restaurant logo"
            //     src={REST_MENU_IMG_URL + menu.card.info.imageId}
            //   ></img>
            //   <button className='absolute w-24 top-3/4 left-1/4 bg-slate-100 border border-solid border-black rounded-lg text-green-500' onClick={()=>{console.log("Added to cart")}}>ADD</button>
            //   </div>
            //   </div>
            //   <div className=' bg-gray-400 h-[1px] my-3'></div> 
            //   </li>
              <RestaurantMenuCategory data={menu?.card?.card}/>
          ))}
        {/* </ul> */}
    </div>
  );
}

export default RestaurantMenu