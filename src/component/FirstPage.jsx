import React, { useState } from 'react'

const FirstPage = (props) => {
  const [inputtext,setInputtext]=useState("");
  return (
    <div>
    <input type='text' placeholder='Enter Todo Text' onChange={(e)=>setInputtext(e.target.value)} value={inputtext} ></input>
    <button type='button' onClick={()=>{props.addList(inputtext)
      setInputtext("")
    }} >+</button>
    </div>
  )
}

export default FirstPage