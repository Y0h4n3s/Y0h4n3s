import React from 'react'
import {ReactComponent as Wave} from '../images/wave.svg'
function UnderConstruction(props) {
  return (
    <div className="under-construction-container">
      <div className="construction-wrapper">
        <h1 className="construction-header" >This Page is Under Construction!</h1>
        <Wave />
      </div>
    </div>
  
  )
}


export default UnderConstruction