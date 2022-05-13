import React, { useEffect, useState } from 'react'
import './Table.css'

const Table = () => {

  

  return (
    <div className='table'>
        <div className='vl'></div>
        <div className='inside'>
            <b>Create Table<hr/></b>
            <div className='content'>
                
                    <div>Layout: <select name="Select Layout" className='select layout'>
                                    <option value="" className='list Default' disabled selected hidden >Select Layout</option>
                                    <option value="horizontal" className='list'>Horizontal</option>
                                    <option value="vertical" className='list'>Vertical</option>
                                 </select>
                    </div>
                    <div>
                    Name: <input className='name' placeholder='Enter Name'></input>
                    </div>
                    <div>
                    Capacity: <input className='capacity' type='number' placeholder='Enter number of capacity'></input>
                    </div>
                    <div>
                    Status: <input type="checkbox" value="online" className='checkBox'></input>
                    </div>
                    <div>
                    Image: <input type="file" accept="image/*" className='imgselect'/>    
                    </div>
                    <div className='buttons'>
                        <button className="button">Create Table</button>
                        <button className="button cancel">Cancel</button>
                    </div>
                
            </div>
        </div>
    </div>
  )
}

export default Table