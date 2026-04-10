import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const AddToCart = () => {
    const cartSelector = useSelector((state) => state.cart.items);
    console.log("selector value", cartSelector.length);
  return (
    <div className='cart'>
        {/* <img src="" alt="Add to Cart"/> */}
        <Link to="/cart">
        <FaCartShopping /><span className='cart-count'>{cartSelector.length ? cartSelector.length : 0}</span></Link>
    </div>
  )
}

export default AddToCart



//useSelector: store data display purpose