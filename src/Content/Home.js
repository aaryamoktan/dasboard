import React, { useEffect, useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Setting from './Setting'
import Anaylist from './Anaylist'
import Product from './Product'
import HomeBranch from './HomeBranch'
import Left from './Left'
import Homeright from '../Component/Home/Homeright'
const Home = () => {
  const [data,setdata] =useState()
  
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
  return (
    <div className='homeConatiner'>
        <div className='leftHome'>
            <Left/>
        </div>
        <div className='middleHome'>
            <Routes>
                <Route path="/" element={<HomeBranch />}/>
                <Route path="/setting" element={<Setting/>}/>
                <Route path="/product" element={<Product data={data}/>}/>
                <Route path="/analyst" element={<Anaylist data={data}/>}/>
            </Routes>
        </div>
        <div className='rightHome'>
        <Homeright/>
        </div>
    </div>
  )
}

export default Home