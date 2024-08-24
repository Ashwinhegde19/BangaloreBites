import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  // console.log("This is DATA", data);

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 p-4  bg-gray-100 shadow-lg ">
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="text-lg">
            <i class="fa fa-caret-down"></i>
          </span>
        </div>
          <ItemList items={data.itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategory;
