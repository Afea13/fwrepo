import React,{useState} from 'react'
import LeftSectionCss from "./LeftSection.module.css"
import { useStateValue } from "../../StateProvider";

const LeftSection = () => {
    const [{ totalLevels}, dispatch] = useStateValue();
    const noOfLevels = totalLevels;
    const [levelSelected,setLevelSelected]= useState(0)
    const [gapEntered,setGapEntered]=useState(0)

    const createLevelsList=()=> {
        const onOptionChangeHandler = (event) => {
            setLevelSelected(event.target.value);
        }
       
        return (
                <select onChange={onOptionChangeHandler} className={LeftSectionCss.levels} value={levelSelected} > 
                    <option value="0">select level</option>
                    {noOfLevels.map((option, index) => {
                        return <option key={index}  value={option}>
                            {option} levels
                        </option>
                    })}
                </select>
        );
    }

    const onOkBtnClick=()=> {
          dispatch({
            type: "SET_LEVELS_AND_GAPS",
            levels: levelSelected,
            levelGap: gapEntered          
          });
        
    }

    const onGapEntered = (e) => {
        setGapEntered(e.target.value)
    }
    return (
        <div className={LeftSectionCss.leftcontainer}>
        {createLevelsList()}
        <br/>
        <div className={`${LeftSectionCss.pixelvalues} ${LeftSectionCss.levels} `}>
            <input type="number" id="boxgapvalue" min="1" step="1" onChange={onGapEntered}  /> px</div>
           
        <br/>
        <button type="button" onClick={onOkBtnClick}>ok</button>
        </div>
  )
}

export default LeftSection