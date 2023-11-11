import RestaurantMenuCategoryItem from "./RestaurantMenuCategoryItem";

const RestaurantMenuCategory=({data,shownItems,setShownIndex,setAccordianToggle,accordianToggle})=>{
    
    const handleClick=()=>{
        setShownIndex()
        setAccordianToggle()
    }

    return(
        <div>
            <div className=" mx-auto my-4 bg-slate-50 shadow-lg p-4 ">
                <div className="flex justify-between hover:cursor-pointer" onClick={handleClick} >
                <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
                <span>{accordianToggle===true ? "🔼": "🔽"} </span>
                </div>
            {shownItems && <RestaurantMenuCategoryItem list={data.itemCards}
            
            />}
            </div>
        </div>
    )
}
export default RestaurantMenuCategory;