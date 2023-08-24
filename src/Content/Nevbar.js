import React from 'react'
import { AiOutlineMail,AiOutlineBell,AiOutlineUser } from "react-icons/ai";
const Nevbar = () =>{
    return (
        <div className='NevbarContainer'>
            <div className='innerContainer'>
                <div className='innerleft'>ABPP</div>
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