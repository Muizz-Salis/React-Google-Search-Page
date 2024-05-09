import React from 'react'
import logo from './assets/Images/glogo.png'
import searchB from './assets/Images/search.svg'
import micImage from './assets/Images/mic.svg'
import cameraImage from './assets/Images/camera.svg'


const App = () => {
  return (
    <div>App
        <div>
          <img src={logo} alt="" className='glogo'/>
        </div>

        <div>
          <div className='box'>
            <div>
              <img src={searchB} alt="" />
              <input style ={{width: "80%", padding: "10px", outline:"none", border:"none"}} type="text" />
              <img src={micImage} alt="" className='mic'/>
              <img src={cameraImage} alt="" style={{width: "25px"}}/>
            </div>
          </div>
          
          <div>
            <div className='gs-fl'>
              <span className='gs'>Google Search</span>
              <span className='fl'>I'm feeling lucky</span>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default App