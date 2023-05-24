import React from 'react';
import '../styles/PreNavBar.css';
import { FaSearch } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';

import pic from '../pngwing.com.png';




const PreNavBar = () => {
  return (
    <div className='PreNavBar'>
        

        <div className='apple-logo'>
            <img src={pic}  alt="apple-logo" />
        </div>

        <div className='PreNavBarLinks'>
        <a href="#/">Store</a>
        <a href="#/">Mac</a>
        <a href="#/">iPad</a>
        <a href="#/">iPhone</a>
        <a href="#/">Watch</a>
        <a href="#/">AirPods</a>
        <a href="#/">Store</a>
        <a href="#/">TV & Home</a>
        <a href="#/">Entertainment</a>
        <a href="#/">Accesories</a>
        <a href="#/">Support</a>
        </div>

        <div className="PreNavBarBagIcon">
        <FaShoppingBag color='white'/>
        </div>
        <div className='PreNavBarSearchIcon'>
        <FaSearch color='white'/>
        {/* <AiOutlineSearch/> */}
        </div>
    </div>
  )
}

export default PreNavBar;