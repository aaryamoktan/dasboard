import React, { useEffect, useState } from 'react'
const Homeleft = () => {
  const [data,setdata] =useState()
  console.log(data)
  useEffect(()=>
  {
    const fetchApi = async()=>
    {
      const serponse = await fetch("https://api.github.com/users");
      const response = await  serponse.json();
      setdata(response);
      
      
    }
    fetchApi() 
  },[])
  const number= 30;
  return (
    <div className='homeleftcontainer'>{
  
    }
    
        <div className='homeleftupper'>
            <div className='homeleft-left'><p> No of Users:<b>{number}</b></p></div>
            <div className='homeright-right'><p>Income: ${number*100}</p> </div>
        </div>
        <div className='homeleftdown'>
        </div>
    </div>
  )
}

export default Homeleft