import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Setting from './Setting'
import Anaylist from './Anaylist'
import Product from './Product'
import HomeBranch from './HomeBranch'
import Left from './Left'
const Home = () => {
  return (
    <div className='homeConatiner'>
        <div className='leftHome'>
            <Left/>
        </div>
        <div className='rightHome'>
            <Routes>
                <Route path="/" element={<HomeBranch/>}/>
                <Route path="/setting" element={<Setting/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path="/analyst" element={<Anaylist/>}/>
            </Routes>
        </div>
    </div>
  )
}

export default Home