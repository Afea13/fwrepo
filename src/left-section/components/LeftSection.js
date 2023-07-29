import React,{useState} from 'react'
import LeftSectionCss from "./LeftSection.module.css"

const LeftSection = () => {


    const createLevelsList=()=> {
        const levels = [1, 2, 3, 4, 5];

        const onOptionChangeHandler = (event) => {
            console.log("User Selected Value - ", event.target.value)
        }
       

      
      return (
        <select onChange={onOptionChangeHandler}>
 
                    <option>Please choose one option</option>
                    {levels.map((option, index) => {
                        return <option key={index} >
                            {option}
                        </option>
                    })}
                </select>
      );
    }

    return (
        <div className={LeftSectionCss.leftcontainer}>
        {createLevelsList()}
        <br/>
        <input type="number" id="gap" />
        <br/>
        <button type="button" onClick={()=>alert('Hello World!')}>Click Me!</button>
        </div>
  )
}

export default LeftSection