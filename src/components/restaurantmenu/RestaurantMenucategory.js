import RestaurantMenuCategoryItem from "./RestaurantMenuCategoryItem";

const RestaurantMenuCategory=({data})=>{
    // console.log(props)
    return(
        <div>
            <div className="w-6/12 mx-auto my-4 bg-slate-50 shadow-lg p-4 ">
                <div className="flex justify-between">
                <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
                <span>🔽</span>
                </div>
            <RestaurantMenuCategoryItem list={data.itemCards}/>
            </div>
        </div>
    )
}
export default RestaurantMenuCategory;