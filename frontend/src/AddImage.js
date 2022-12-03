import React from 'react'
import AddnewImageHome from './addImage/AddnewImageHome'
import TitleandDesc from './addImage/TitleandDesc'

const AddImage = ({setHousess}) => {
  return (
    <>
  
  
    <AddnewImageHome />

    <TitleandDesc setHousess={setHousess}/>

    </>
    
  )
}

export default AddImage