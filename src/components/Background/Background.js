import React from 'react'
import Table from '../Table/Table'
import Tablecontents from '../Tablecontents/Tablecontents';
import Display from '../Display/Display.js';
import './Background.css'

const Background = () => {
    const myStyle ={
        backgroundImage: "url('./images/background.jpg')",
        height:'100%',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        margin: '0px',
        position:'absolute',
        width: '100%',
    };
  return (
      
    <div style={myStyle} className="background">
      <div><Table/></div>
      <div><Tablecontents/></div>
      <div><Display /></div>
    </div>
  )
}

export default Background