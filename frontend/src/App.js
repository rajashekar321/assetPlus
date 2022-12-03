import './App.css';
import Posts from './Posts';
import {BrowserRouter as Router,Routes,Route, Navigate} from "react-router-dom";
import AddImage from './AddImage';
import Contentgalleryhome from './Contentgalleryhome';
import Home from './Home';
import { useState ,useEffect} from 'react';


function App() {
  
  const [house,setHouse]=useState({title:"",desc:""});
    const [houses,setHouses]=useState([]);
    const[newhouses,setNewHouses]=useState([]);
    const setHousess=(title,desc)=>{
         setHouse({title:title,desc:desc});
         setHouses([...houses,house]);
         console.log(houses)

    }
  const filterOptions=(search)=>{
    const p=houses.filter((curr)=>{
        return curr.title.includes(search);
    })
    setNewHouses(p);
    if(search!=" ")
    {
      setHouses(newhouses);

    }else{
      setHouses(houses)
    }

    console.log(newhouses);
  }
  return (
    
    <>
   <Router>
    
    <Routes>
    <Route path="/" element={<Home houses={houses} filterOptions={filterOptions}/>}></Route>
    <Route path="/addimage" element={<AddImage setHousess={setHousess}/>}></Route>
   </Routes>
   </Router>
  <Contentgalleryhome />
    </>
  );
}

export default App;
