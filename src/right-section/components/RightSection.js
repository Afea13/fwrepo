import React from 'react'
import RightSectionCsss from "./RightSection.module.css"
const RightSection = () => {
    
    const rightWidth=window.innerWidth-400;

  return (
    <div className={RightSectionCsss.rightcontainer} style={{width:rightWidth}}>
        
        <div  className={RightSectionCsss.box2}>
            
        </div>
        <div className={RightSectionCsss.box1}>
            
            </div>
    </div>
  )
}

export default RightSection