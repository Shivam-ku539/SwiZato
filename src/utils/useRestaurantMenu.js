import { useEffect, useState } from "react";
import { SELECTED_REST_URL } from "./constants";

const useRestaurantMenu=(resId)=>{

    const [resInfo,setResInfo]=useState("");

    useEffect(()=>{
      fetchData();
    },[])

    const fetchData=async()=>{
        const data=await fetch(
            SELECTED_REST_URL+resId
        )
        const json=await data.json();
        setResInfo(json.data)
    }
    return resInfo;
}

export default useRestaurantMenu;