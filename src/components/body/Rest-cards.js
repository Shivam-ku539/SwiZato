import React from 'react';
import { CDN_URL } from '../../utils/constants';


const RestCards = (props) => {
  const {restData}=props;

  const {cloudinaryImageId,name,cuisines,costForTwo,avgRating}=restData;

  return (
        <div className='m-4 p-4 w-52 bg-slate-100 rounded-xl'>
          <img className='rounded-lg' alt='res-logo' src={CDN_URL+cloudinaryImageId}/>
            <h3 className='font-bold py-2'>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating}</h4>
        </div>
  )
}

export default RestCards