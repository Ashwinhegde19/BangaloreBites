import React from 'react'
import { useSelector } from 'react-redux'
import ItemList from "./ItemList"

function Cart() {
    const cartItems = useSelector((store) => store.cart.items)

  return (
    <div className='text-center m-4 p-4'>
        <h1 className='text-4xl font-bold'>Cart</h1>
        <p className='text-xl font-semibold'>You have {cartItems.length} items in your cart</p>
        <div className='flex justify-center'>
            <button className='px-4 py-2 bg-green-400 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-shadow'>Checkout</button>
            <div>
                <ItemList items={cartItems} />
            </div>
        </div>

    </div>
  )
}

export default Cart