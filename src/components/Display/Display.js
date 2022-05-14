import React from 'react'
import "./Display.css"

const Display = ({id,layout, name, capacity, status, image, onDelete}) => {

    const handleDelete = () => {
        onDelete(id);
        
    }
  return (
      
    <div className='tableDisplay'>
        
        <tr>
        <td><span>{layout}</span></td>
        <td><span>{name}</span></td>
        <td><span>{capacity}</span></td>
        <td><span>{status}</span></td>
        <td><span className='image1'><img src={image} height="30px"/></span></td>
        <td><span >
            
            <button className='btns' onClick={handleDelete}>delete</button>
        </span>
        </td>
        </tr>
    </div>
    )
}

export default Display