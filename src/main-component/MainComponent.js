import React from 'react'

import MainComponentCSS from "./MainComponent.module.css"
import LeftSection from "../left-section/components/LeftSection"
import RightSection from '../right-section/components/RightSection'

const MainComponent = () => { 
  
  const rightWidth=window.innerWidth-200;

  return (
    <div className={MainComponentCSS.maincontainer}>
      <LeftSection  />    
      <RightSection rightWidth={rightWidth} />
    </div>
  )
}

export default MainComponent
