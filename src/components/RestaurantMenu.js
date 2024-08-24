import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";


function RestaurantMenu() {
  const {resID} = useParams();
  const resInfo = useRestaurantMenu(resID);

  if (resInfo === null) return <Shimmer />;

  const { name } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <div>
        {itemCards.map((items) => (
          <li key={items.card.info.id}>
            {items.card.info.name} - {items.card.info.costForTwo}
            <ul> {items.card.info.defaultPrice} </ul>
            <ul>{items.card.info.description}</ul>
          </li>
        ))}
      </div>
    </div>
  );
}

export default RestaurantMenu;
