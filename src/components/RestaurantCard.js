import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {cloudinaryImageId ,name, cuisines, costForTwo, sla: { deliveryTime }, avgRating} = resData
  
  
    return (
      <div className="m-4 p-4 w-[250px] bg-gray-200 rounded-lg hover:bg-gray-300">
        <img
          className=" rounded-lg h-[250px]"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <p className="font-bold py-4 text-lg">{name}</p>
        <p>{cuisines.join(", ")}</p>
        <p>{avgRating}</p>
        <p>{costForTwo}</p>
        <p>{deliveryTime} mins</p>
      </div>
    );
  };
  
  export default RestaurantCard;