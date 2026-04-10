import React from 'react'
import AddToCart from './AddToCart';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
    <header className='header'>
        <div className="logo">
            My Shop
        </div>
        <nav className='nav'>
            <ul>
                <li><Link to="/"> Home </Link></li>
                <li><a href="#">Products</a></li>
            </ul>
        </nav>
        <AddToCart/> 
    </header>
    </>
  )
}
export default Header;