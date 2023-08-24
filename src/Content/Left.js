import React from 'react'
import { AiOutlineHome,AiOutlineShoppingCart,AiOutlineBarChart,AiOutlineSetting } from "react-icons/ai";
import { Link } from 'react-router-dom';
const Left = () => {
  return (
    <div className='leftcontainer'>
        <div className='leftInner'>
            <ul>
                <li><Link to="/" style={{color:"black",textDecoration:"none"}}><AiOutlineHome/> <p>Home</p></Link></li>
                <li><Link to="/product" style={{color:"black",textDecoration:"none"}}><AiOutlineShoppingCart/><p>Products</p></Link></li>
                <li><Link to="/analyst" style={{color:"black",textDecoration:"none"}}><AiOutlineBarChart/><p>Analytics</p></Link></li>
                <li><Link to="/setting" style={{color:"black",textDecoration:"none"}}><AiOutlineSetting/><p>Setting</p></Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Left