import React from 'react'
import { useState,useEffect } from 'react';
import "./TitleandDesc.css";
const TitleandDesc = ({setHousess}) => {
  const[title,setTitle]=useState("");
  const[description,setDescription]=useState("");
  const[image,setImage]=useState("");
  
  let photoData=[];

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/photos").then((data)=>{
      return data.json();
    }).then((data)=>{
      photoData=data;
      //console.log(photoData[Math.floor(Math.random()*100)]);
      const p=Math.floor(Math.random()*30);
      //const img=photoData[Math.floor(Math.random()*100)].url;
      console.log(photoData[p].url)
    })
  
  },[]);
  
  
  return (
    <>
    <button onClick={()=>{
      setHousess(title,description);

    }}>Save</button>
    <div className='TileandDesc'>
      <form className='tanddesc'>

        <label htmlFor='title'>Title</label>
        <input type="text" value={title} cols="50" className='title' onChange={(e)=>{
          setTitle(e.target.value);

        }}></input>
        <br/>
         
        <label htmlFor='description'>Description</label>
        <textarea type="text" value={description} rows="4" cols="200" className='description' onChange={(e)=>{
          setDescription(e.target.value);
        }}></textarea>
       <img src={photoData[Math.floor(Math.random()*100)]}></img>
      </form>


    </div>
    </>
  )
}

export default TitleandDesc