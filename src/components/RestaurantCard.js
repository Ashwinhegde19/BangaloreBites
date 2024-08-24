import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    sla: { deliveryTime },
    avgRating,
    
  } = resData;

  return (
    <div className="m-4 p-6 w-[250px] bg-gray-200 rounded-lg hover:bg-gray-300">
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

export const withDiscount = (RestaurantCard) => {
  return (props) => {
    const { resData } = props
    return (
      <>
        <div className="absolute px-4 m-4  rounded-lg bg-transparent">
          <span className="discount-header">{resData.aggregatedDiscountInfoV3.header} </span>
          <span className="discount-subheader">{resData.aggregatedDiscountInfoV3.subHeader}</span>
        </div>
        <RestaurantCard {...props}/>
      </>
    );
  };
};

export default RestaurantCard;
