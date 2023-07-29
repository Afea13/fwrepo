import React from 'react'
import MainComponentCSS from "./MainComponent.module.css"
import LeftSection from "../left-section/components/LeftSection"
import RightSection from '../right-section/components/RightSection'

const MainComponent = () => {
 
  

  return (
    <div className={MainComponentCSS.maincontainer}>
      <LeftSection  />
      <RightSection  />
    </div>
  )
}

export default MainComponent
