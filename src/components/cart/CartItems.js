import { useSelector } from "react-redux";

const CartItems=()=>{
    const cartItems=useSelector((store)=>store.cart.items)
    let totalSum=0;
    cartItems.forEach((item)=>{
       totalSum=totalSum+(item.card.info.price/100 || item.card.info.defaultPrice/100)
    })
    return(
        <div className="py-3">
            {cartItems.map((data)=>(
                <div className="flex border-b-2 border-gray-400">
                <div key={data.card.info.id} className="w-2/3 p-2">
                <h1 >{data.card.info.name} </h1>
                </div>
                <div className="m-auto space-x-5">
                    <span>₹{data.card.info.price/100}</span>
                </div>
                </div>
                
            ))}
            <div className=" flex py-2 shadow-md ">
                <div className="w-2/3 p-2">
                <h1>To Pay : </h1>
                </div>
                <div className="m-auto space-x-5">
                <h1 className="mx-2">{totalSum} </h1>
                </div>
            </div>
        </div>
    )
}
export default CartItems;