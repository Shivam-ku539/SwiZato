import React from 'react'
import { REST_MENU_IMG_URL } from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getTotal } from '../../reduxStore/cartSlice';
import { addRest } from '../../reduxStore/cartSlice';

const RestaurantMenuCategoryItem = ({list,cartItemRestaurant}) => {

  const dispatch=useDispatch();

  const handleaddItem=(item,cartItemRestaurant)=>{
    dispatch(addItem(item))
    dispatch(getTotal(item))
    dispatch(addRest(cartItemRestaurant))
  }

  return (
    <div>
        {list.map((item)=>(
            <div
             key={item.card.info.id} className='p-2 m-2  border-gray-400 border-b-2 text-left flex justify-between'>
              
              <div className='w-9/12'>
                <div className='font-semibold'>
                  <span>{item.card.info.name}</span>
                  <br/>
                <span>Rs.{item.card.info.price?item.card.info.price/100 :item.card.info.defaultPrice/100}</span>
                </div>
                    <p className='text-sm py-2'>{item.card.info.description}</p>
                </div>
                 <div className='w-3/12 relative mx-3 my-6'>
              <img className='rounded-lg' src={REST_MENU_IMG_URL+item.card.info.imageId}></img>
                  <button
                   onClick={()=>handleaddItem(item,cartItemRestaurant)}  
                   className='py-1 px-2 bg-white shadow-lg rounded-lg absolute sm:top-1/2 sm:left-1/4 md:top-2/3 lg:top-3/4 lg:left-1/3 left-2'>Add+</button>
              
              </div>
            </div>
        ))}
    </div>
  )
}

export default RestaurantMenuCategoryItem
