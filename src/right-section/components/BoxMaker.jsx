import React,{useEffect,useState} from 'react'
import Box from "./Box"
import {MINIMUM_BOX_SIZE} from "../../common/constants"

const BoxMaker = ({levels,levelGap,rightSectionWidth}) => {

const [msg,setMsg]=useState("")

  useEffect(()=>{
     
      if(levels==0)
        setMsg("select levels")
      else
        setMsg("")

  },[levels])

  const rectangles = [];  
  let boxDimension=100;

  const rightSectionHeight = window.innerHeight;

  for (let rectNo = 1; rectNo <= levels; rectNo++) {
    if(rectNo>1)
    {
      boxDimension=100+((rectNo-1)*levelGap);
    }

    //calculate pad-left
    const leftDistance=Math.floor((rightSectionWidth-boxDimension)/2)+200;
    //calculate pad-top
    const topDistance=Math.floor((rightSectionHeight-boxDimension)/2);



    rectangles.push(<Box key={rectNo}  boxDimension={boxDimension} leftDistance={leftDistance} topDistance={topDistance}/>);
  }

  return <>
    {msg}
    {(levels>0)&& <div>{rectangles}</div>}
   
  </>
}

export default BoxMaker