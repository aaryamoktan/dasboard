import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineMail,AiOutlineBell,AiOutlineUser } from "react-icons/ai";
const Nevbar = () =>{
    
    return (
        <div className='NevbarContainer'>
            <div className='innerContainer'>
                <div className='innerleft'><Link to="/" style={{color:"black",textDecoration:"none"}}>ABPP</Link></div>
                <div className='innerright'>
                    <ul>
                        <li><AiOutlineMail/></li>
                        <li><AiOutlineBell/></li>
                        <li><AiOutlineUser/></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nevbar