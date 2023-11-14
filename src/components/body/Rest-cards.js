import React from 'react';
import { CDN_URL } from '../../utils/constants';


const RestCards = (props) => {
  const {restData}=props;

  const {cloudinaryImageId,name,cuisines,costForTwo,avgRating,areaName}=restData;

  return (
        <div className='m-4 p-4 w-52 rounded-xl shadow-md hover:cursor-pointer hover:bg-slate-100'>
          <img className='rounded-lg' alt='res-logo' src={CDN_URL+cloudinaryImageId}/>
            <h3 className='font-bold py-2'>{name}</h3>
            <h3 className='font-bold'>{"⭐"+avgRating}</h3>
            <p className='overflow-hidden'>{"🍽️ "+cuisines.join(",")}</p>
            <h3>{costForTwo}</h3>
            <h3>{areaName}</h3>
        </div>
  )
}

export default RestCards