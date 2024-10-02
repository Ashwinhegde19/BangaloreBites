import ItemList from "./ItemList";
import { useState } from 'react';

const RestaurantCategory = ({ data, showItems, setshowIndex}) => {

  handleClick = () => {
    setshowIndex();
  }

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 p-4  bg-gray-100 shadow-lg ">
        <div className="flex justify-between cursor-pointer"
        onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="text-lg">
            <i className="fa fa-caret-down"></i>
          </span>
        </div>
          {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
