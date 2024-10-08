import { useEffect, useState , useContext} from "react";
import RestaurantCard, { withDiscount } from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const cors = require('cors');
const fetch = require('cross-fetch')

const   Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardDiscount = withDiscount(RestaurantCard);
  // console.log(listOfRestaurant);

 

  const fetchData = async () => {
    const response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    // console.log(json);
    
    // console.log(
    //   json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    // );

    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const online = useOnlineStatus();

  if (online === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );

    useEffect(() => {
      fetchData();
    }, []);

    const {loggedInUser, setuserName} = useContext(UserContext);

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="filter flex">
        <div className="search p-4 m-4">
          <input
            type="text"
            placeholder="Search for restaurants"
            className=" border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-0.5 bg-green-300 m-4 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setListOfRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>

          <label> UserName : </label>
          <input className="border border-black p-1"
          value={loggedInUser}
          onChange={(e) => {
            setuserName(e.target.value);
          }}
          />
        </div>
        <div className="p-4 m-4">
          <button
            className="px-2 py-1 bg-gray-100 flex  rounded-lg mt-3"
            onClick={() => {
              setListOfRestaurant(
                listOfRestaurant.filter((res) => res.info.avgRating > 4.3)
              );
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {listOfRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.aggregatedDiscountInfoV3 ? (
              <RestaurantCardDiscount resData={restaurant?.info} />
            ) : (
              <RestaurantCard resData={restaurant?.info} />
            )}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
