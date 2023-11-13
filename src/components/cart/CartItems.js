import { useSelector } from "react-redux";

const CartItems=()=>{
    const cartItems=useSelector((store)=>store.cart.items)
    console.log(cartItems)
    return(
        <div className="py-3">
            {cartItems.map((data)=>(
                <div className="flex">
                <div key={data.card.info.id} className="w-2/3 p-2">
                <h1 >{data.card.info.name} </h1>
                </div>
                <div className="m-auto space-x-5">
                    <span>₹{data.card.info.price/100}</span>
                </div>
                </div>
            ))}
        </div>
    )
}
export default CartItems;