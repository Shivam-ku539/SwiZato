import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RestaurantMenuCategoryItem from '../restaurantmenu/RestaurantMenuCategoryItem'
import { clearCart } from '../../reduxStore/cartSlice'
import { CDN_URL } from '../../utils/constants'
import CartItems from './CartItems'

const Cart = () => {

  const dispatch=useDispatch()

  const restData=useSelector((store)=>store.cart.restaurant)
  const restMappedData=restData.map((x)=>x.cloudinaryImageId)
  console.log(restMappedData)
 

  const handleClearItem=()=>{
    dispatch(clearCart())
  }

 if (restData.length===0)  return (<h1 className='font-bold m-auto'>Seems nothing here...</h1>) 

  return(
  <div className='bg-slate-100 shadow-lg w-2/3 m-auto my-8'>
      <div className='flex  m-auto'>
        <div className='w-14 mx-2'>
        <img className='rounded-md my-2' alt='Logo' src={CDN_URL+ restMappedData}/>
        </div>
        <div className='my-2  border-b-2 border-slate-500'>
          <span className='font-semibold'>{restData.map((x)=>x.name)}</span><br/>
          <span className='m'>{restData.map((x)=>x.areaName)}</span>
        </div>
      </div>
      <CartItems/>
      <div>
      {restData.length>0 ? <button onClick={()=>{handleClearItem()}} className='border border-blue-300 p-2 rounded-md m-2'>Clear Cart</button> :<h1 className='font-bold m-auto'>Seems nothing here...</h1> }
      </div>
    </div>
  )
    
}

export default Cart


{/* <div>
        
        </div>
      <div className='w-3/4 m-auto'>
        <RestaurantMenuCategoryItem
        list={cartItems}
        />
        {cartItems.length>0 ? <button onClick={()=>{handleClearItem(cartItems)}} className='border border-blue-300 p-2 rounded-md m-2'>Clear Cart</button> :<h1 className='font-bold m-auto'>Seems nothing here...</h1> }
        
      </div> */}