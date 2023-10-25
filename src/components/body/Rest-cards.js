import React from 'react';
import { CDN_URL } from '../../utils/constants';

const RestCards = (props) => {
  const {restData}=props;

  const {cloudinaryImageId,name,cuisines,costForTwo,avgRating}=restData;

  return (
        <div className='res-card'>
          <img className='res-logo' alt='res-logo' src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating}</h4>
        </div>
  )
}

export default RestCards