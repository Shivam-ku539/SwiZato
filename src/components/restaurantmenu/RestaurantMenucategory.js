import { useState } from "react";
import RestaurantMenuCategoryItem from "./RestaurantMenuCategoryItem";

const RestaurantMenuCategory=({data,shownItems,setShownIndex})=>{
    
    const handleClick=()=>{
        setShownIndex()
    }

    return(
        <div>
            <div className="w-6/12 mx-auto my-4 bg-slate-50 shadow-lg p-4 ">
                <div className="flex justify-between hover:cursor-pointer" onClick={handleClick} >
                <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
                <span>🔽</span>
                </div>
            {shownItems && <RestaurantMenuCategoryItem list={data.itemCards}/>}
            </div>
        </div>
    )
}
export default RestaurantMenuCategory;