import React from 'react'
import Table from '../Table/Table'

const Background = () => {
    const myStyle ={
        backgroundImage: "url('./images/background.jpg')",
        height:'100vh',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        margin: '0px',
        position:'absolute',
        width: '100%',
    };
  return (
      
    <div style={myStyle}>
        <Table/>
    </div>
  )
}

export default Background