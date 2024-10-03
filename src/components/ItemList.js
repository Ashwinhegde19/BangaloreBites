import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleCart = (item) => {
    dispatch(addToCart(item));
  }

  return (
    <div className="p-4">
      {items.map((item) => (
        item.card && item.card.info ? (
          <div
            key={item.card.info.id}
            className="flex justify-between p-4 mb-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow bg-white"
          >
            {/* Left section for text */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800">{item.card.info.name}</h3>
              
              <p className="text-green-600 text-lg font-semibold mt-2">
                ₹{item.card.info.defaultPrice / 100 || item.card.info.finalPrice / 100 || item.card.info.price / 100}
              </p>
              <p className="text-gray-600 text-sm mt-2">{item.card.info.description}</p>
            </div>

            {/* Right section for image and button */}
            <div className="relative w-40 p-2">
              <img
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-full h-24 object-cover rounded-lg mb-4"
              />
              <div className="absolute bottom-0 left-8">
                <button
                  className="px-4 py-2 mx-4 bg-orange-500 text-white font-semibold shadow-md rounded-full hover:bg-orange-600 transition-all"
                  onClick={() => handleCart(item)}
                >
                  Add +
                </button>
              </div>
            </div>
          </div>
        ) : null
      ))}
    </div>
  );
};

export default ItemList;
