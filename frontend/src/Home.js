import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
const Home = ({houses,filterOptions}) => {

    const navigate=useNavigate();
    
  
  return (
    <>
    <div className='home'>
     <button onClick={()=>{
        navigate("/addimage")
     }} >+</button>
     <h2 className='content'>Content Gallery</h2>
     <input type="text" placeholder='Search' onChange={(e)=>{
        filterOptions(e.target.value)
     }}></input>
      
    </div>
    {houses.map((curr)=>{
        return <><h3>{curr.title}</h3>
        <h3>{curr.desc}</h3>
        </>
    })}
    </>
  )
}

export default Home