import React,{useState} from 'react'
import { useStateValue } from "../../StateProvider"
import RightSectionCsss from "./RightSection.module.css"
import BoxMaker from "./BoxMaker"

const RightSection = ({rightWidth}) => {

    const [{ levels,levelGap}, dispatch] = useStateValue(); 
   
    
  return (
    <div className={RightSectionCsss.rightcontainer} style={{width:rightWidth}} >
        <BoxMaker levels={levels} levelGap={levelGap} rightSectionWidth={rightWidth} />
  
    </div>
  )
}

export default RightSection