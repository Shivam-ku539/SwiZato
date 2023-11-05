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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6865235&lng=77.3470746&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const json1 =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    let json2 = json1.map((x) => x.info);
    setRestList(json2);
    setFilteredList(json2);
  };

  const onlineStatus = useActiveStatus();
  if (onlineStatus === false)
    return <h1>Seems you are offline!! Check your internet connection</h1>;

  return restList.length === 0 ? (
    <Shimmer />
    
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-3 p-3">
          <input
            type="text"
            className="border border-solid border-black py-1 mx-2 rounded-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="px-3 py-1 rounded-md bg-green-200"
            onClick={() => {
              console.log(searchText);
              const filteredRest = restList.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(filteredRest);
            }}
          >
            Search
          </button>

          <button
            className="bg-slate-200 py-2 mx-3 rounded-md px-1"
            onClick={() => {
              let res1 = restList.filter((filtered) => filtered.avgRating > 4);
              setRestList(res1);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredrestList.map((restrnt) => (
          <Link key={restrnt.id} to={"/restaurant/" + restrnt.id}>
            {" "}
            <RestCards restData={restrnt} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
