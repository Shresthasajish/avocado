import React, {useState} from 'react'
import "./Navbar.css"


function Navbar() {
    // const [drop, setDrop] = useState(false)
  return (
    <div className='navBar'>
        <div className='left'>
            <a href="https://app.prntscr.com/en/">
            <div className='logo'>
                <img src="./images/logo.png" alt="lightshot" className='logoimg'/>
                <div className='logoTexts'>
                    <h1>LightShot</h1>
                    <h2>screen capture tool</h2>
                </div>
            </div>
            </a>
            <select name="cars" id="cars" className='dropDown'>
                <option value="volvo" className='list'>English</option>
                <option value="saab" className='list'>Nepali</option>
                <option value="opel" className='list'>French</option>
                <option value="audi" className='list'>Spanish</option>
            </select>
            {/* <div className='dropDown' onClick={() => {setDrop(!drop)}}>
                English <i class="arrow"></i>
                {drop &&<ul className='droppedDown'>
                    <li>Nepali</li>
                    <li>Spanish</li>
                    <li>French</li>
                    <li>German</li>
                </ul>
                }
            </div> */}
            <div className='signIn'>
                Sign in
            </div>
        </div>


        <div className='right'>
                <a href="https://twitter.com/Light_shot"><img src="./images/twitter.png" alt="twitter" className='image'/></a>
                <a href="https://www.facebook.com/Lighshot"><img src="./images/facebook.png" alt="facebook" className='image'/></a>
                
                <a href="https://app.prntscr.com/en/download.html">
                    <button className="btn"><i className="fa fa-download"></i> Download Lightshot for free</button>
                </a>
                
                
        </div>
    </div>
  )
}

export default Navbar