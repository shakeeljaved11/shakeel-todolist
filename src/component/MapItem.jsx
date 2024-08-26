import React from 'react'
import "./Styles.css"
const MapItem = (props) => {
  return (
    <center>
    <div className='main '>
    <li>
    {props.item}
    
    <span className='icon'>
    <i class="fa-sharp fa-regular fa-trash" 
    onClick={()=>{props.deleteitem(props.index)}}></i>
    
    </span>
    </li>
    
    </div>
    </center>
  )
}

export default MapItem