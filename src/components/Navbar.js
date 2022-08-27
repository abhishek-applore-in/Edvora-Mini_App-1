import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='navbar'>
        <div className='navbar__title navbar__item '>Edvora Mini App</div>
       <Link to="/users"> <div className='navbar__item'>Users</div></Link>
        <Link to="/products"><div className='navbar__item'>Products</div></Link>
       <Link to="/orders"> <div className='navbar__item'>Orders</div></Link>  
    </header>
  )
}



export default Navbar

