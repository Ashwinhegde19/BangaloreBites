import { useSelector, useDispatch } from 'react-redux';
import ItemList from './ItemList';
import { removeFromCart } from '../utils/cartSlice';
function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

 

  return (
    <div className='text-center m-4 p-4'>
      <h1 className='text-4xl font-bold'>Cart</h1>
      <p className='text-xl font-semibold'>You have {cartItems.length} items in your cart</p>
      <div className='flex justify-center'>
        <div className='6/12 w-auto'>
          <ItemList items={cartItems}  />
        </div>
      </div>
     
    </div>
  );
}

export default Cart;