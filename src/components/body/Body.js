import React, { useEffect, useState } from "react";
import RestCards from "./Rest-cards";
import Shimmer from "../Shimmer";
import { Link } from "react-router-dom";
import useActiveStatus from "../../utils/useActiveStatus";


const Body = () => {
  const [restList, setRestList] = useState([]);
  const [filteredrestList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swigg.com/dapi/restaurants/list/v5?lat=28.6865235&lng=77.3470746&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    const json1 =
     await json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    let json2 =await json1.map((x) => x.info);
    setRestList(json2);
    setFilteredList(json2);
  };

  const onlineStatus = useActiveStatus();

  if (onlineStatus === false) return <h1>Seems you are offline!! Check your internet connection</h1>;

  if (restList.length === 0) return <Shimmer/>

     return (
    <div className="my-16">
      <div className="flex m-auto justify-center">
          <div>
          <input placeholder="Search your restaurant"
            type="text"
            className="border border-solid  border-blue-500 py-2 px-6 rounded-2xl"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          </div>
          <div>
          <button
            className="px-3 py-1 mx-1 my-1 rounded-2xl bg-blue-400"
            onClick={() => {
              const filteredRest = restList.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(filteredRest);
            }}
          >
            Search
          </button>
          </div>
          </div>
          <div className="flex justify-center mx-6 my-6">
            <div className="">
          <button
            className=" border border-gray-300 py-2 mx-3 rounded-2xl shadow-lg px-2 hover:bg-slate-300 my-1"
            onClick={() => {
              let res1 = restList.filter((filtered) => filtered.avgRating > 4);
              setFilteredList(res1);
            }}
          >
            Rating 4.0+
          </button>

          <button
            className="border border-gray-300 py-2 mx-3 rounded-2xl my-1 shadow-lg px-2 hover:bg-slate-300"
            onClick={() => {
              let res1 = restList.filter((restaurant) => parseInt(restaurant.costForTwo.slice(1, 4)) < 300);
              setFilteredList(res1);
            }}
          >
           Less than Rs. 300
          </button>

          <button
            className="border border-gray-300 py-2 mx-3 rounded-2xl shadow-lg my-1 px-2 hover:bg-slate-300"
            onClick={() => {
              let res1 = restList.filter((restaurant) => parseInt(restaurant.costForTwo.slice(1, 4)) < 500);
              setFilteredList(res1);
            }}
          >
           Less than Rs. 500
          </button>

          <button
            className="border border-gray-300 py-2 mx-3 rounded-2xl shadow-lg  px-2 hover:bg-slate-300"
            onClick={() => {
              setFilteredList(restList);
            }}
          >
           Show all
          </button>
          
          </div>
          </div>
      
      <div className="flex flex-wrap justify-center">
        {filteredrestList.map((restrnt) => (
          <Link key={restrnt.id} to={"/restaurant/" + restrnt.id}>
            <RestCards restData={restrnt}/>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
