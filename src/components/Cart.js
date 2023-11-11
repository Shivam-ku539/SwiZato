import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RestaurantMenuCategoryItem from './restaurantmenu/RestaurantMenuCategoryItem'
import { clearCart } from '../reduxStore/cartSlice'

const Cart = () => {

  const dispatch=useDispatch()

  const cartItems=useSelector((store)=>store.cart.items)

  const handleClearItem=(cartItems)=>{
    dispatch(clearCart(cartItems))
  }

  return (
    <div className='w-3/4 m-auto'>
      <RestaurantMenuCategoryItem
      list={cartItems}
      />
      {cartItems.length>0 ? <button onClick={()=>{handleClearItem(cartItems)}} className='border border-blue-300 p-2 rounded-md m-2'>Clear Cart</button> :<h1 className='font-bold m-auto'>Seems nothing here...</h1> }
      
    </div>
  )
}

export default Cart