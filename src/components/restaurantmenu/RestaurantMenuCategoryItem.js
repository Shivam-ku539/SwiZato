import React from 'react'

const RestaurantMenuCategoryItem = ({list}) => {
  return (
    <div>
        {list.map((item)=>(
            <div key={item.card.info.id} className='p-2 m-2  border-gray-400 border-b-2 text-left'>
                <div className='py-2'><span>{item.card.info.name}</span>
                <span>Rs.{item.card.info.price?item.card.info.price/100 :item.card.info.defaultPrice}</span>
                </div>
                <div>
                    <p className='text-sm'>{item.card.info.description}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default RestaurantMenuCategoryItem