const ItemList = ({ items }) => {
  console.log("ITEMS", items);

  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="p-2 m-2  border-grey-200 border-b-2 text-left">
            <div className=" py-2 my-2">
                <span className="font-bold">{item.card.info.name}</span>
                <span>- ₹ {item.card.info.defaultPrice/ 100 || item.card.info.finalPrice / 100 || item.card.info.price / 100}</span>
            </div>
            <p className="t text-xs">{item.card.info.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
