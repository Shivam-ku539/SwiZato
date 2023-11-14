import {Link} from 'react-router-dom'
import emptycart from "../../assets/emptycart.png"
const EmptyCart=()=>{
    return(
        <div className="w-2/4 my-16 m-auto">
            <div>
            <img alt='Empty cart logo' className="m-auto" src={emptycart}/>
            </div>
            <div className="m-auto text-center">
            <h1 className="my-2 font-semibold">Your cart is empty</h1>
            <h1 className="text-sm my-2">You can go to home page to view more restaurants</h1>
            </div>
            <div className="border border-black bg-orange-400 rounded-lg m-auto my-4 w-56 p-1">
                <Link to='/'>
                <button className="py-1">
                    SEE RESTAURANTS NEAR YOU
                </button>
                </Link>
                
            </div>

            
        </div>
    )
}
export default EmptyCart;