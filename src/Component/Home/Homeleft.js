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
  const number= 46 ;
  return (
    <div className='homeleftcontainer'>{
  
    }
    
        <div className='homeleftupper'>
            <div className='homeleft-left'><p> No of Users:<b>{number}</b></p></div>
            <div className='homeright-right'><p>Income: ${number*100}</p> </div>
        </div>
        <div className='homeleftdown'>
        <p>User List</p>
        <table>
  <tr>
    <th>Id</th>
    <th className="heading1">User-Name</th>
    <th className="heading2">Site_admin</th>
  </tr>
  {
    data && data.map((ele)=>
    {
      const {login,id,url} = ele;
      return(
        <>
        <tr>
    <td className='id'>{id}</td>
    <td className='user'>{login}</td>
    <td className='url'> {url}</td>
  </tr>
        </>
      )
    })
  }
  
  </table>
        </div>
    </div>
  )
}

export default Homeleft