import React from 'react'
import './Table.css'

const Table = ({onAdd}) => {

  
  // const [image, setImage] = useState([]);

  // const fileSelectedHandler = event => {
  //   setImage( event.target.files[0])
  // }
  
  // const handleOnCancel = (el) => {
  //   el.myFormRef.reset();
  // }

  const handleOnSubmit = (e) =>{
    console.log(e.target.name.value)
    // console.log(e.target.capacity)
    // console.log(e.target.layout)
    // console.log(e.target.status)
    // console.log(e.target.image)
    e.preventDefault();
    onAdd(e.target.name.value, e.target.layout.value, e.target.capacity.value, e.target.status.value, e.target.image.value);
    e.target.name.value = "";
    e.target.capacity.value = "";
    e.target.layout.value = "";
    e.target.status.value = "";
    e.target.image.value = "";
  }

  return (
    <div className='table'>
        <div className='vl'></div>
        <div className='inside'>
            <b>Create Table<hr/></b>
            {/* <form className='content' onSubmit={handleOnSubmit} ref={(el) => el.myFormRef }> */}
            <form className='content'  onSubmit={handleOnSubmit}>
                  
                    <div>Layout: <select name="layout" className='select layout' >
                                    <option  className='list Default' disabled selected hidden >Select Layout</option>
                                    <option  className='list'>Horizontal</option>
                                    <option  className='list'>Vertical</option>
                                 </select>
                    </div>
                    <div>
                    Name: <input className='name' placeholder='Enter Name' name="name"/>
                    </div>
                    <div>
                    Capacity: <input className='capacity' placeholder='Enter number of capacity' name="capacity"/>
                    </div>
                    <div>
                    Status: <input type="checkbox" id="online" className='checkBox' name="status"/><label for="onilne">Online</label>
                    </div>
                    <div>
                    {/* Image: <input type="file" accept="image/*" className='imgselect' onChange={fileSelectedHandler} name="image"/>     */}
                    Image: <input type="file" accept="image/*" className='imgselect' name="image"/>    
                    </div>
                    <div className='buttons'>
                        <button className="button" onSubmit={handleOnSubmit}>Create Table</button>
                        <button className="button cancel" >Cancel</button>
                        {/* <button className="button cancel" onSubmit={handleOnCancel}>Cancel</button> */}
                    </div>
                
            </form>
        </div>
    </div>
  )
}

export default Table