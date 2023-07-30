import React ,{useState} from 'react'
import RightSectionCsss from "../right-section/components/RightSection.module.css"

const Slider = () => {
    
    const rightWidth=window.innerWidth-200;
    const [width, setWidth] = useState(100); // Initial width is set to 100px

    const handleWidthChange = (event) => {
      setWidth(event.target.value);
    };


    
  return (
    <>
    hello
    <div className={RightSectionCsss.rightcontainer} style={{width:rightWidth}} >
        
        {/*<div  className={RightSectionCsss.box2} data-testid="inner-div">
            
        </div>
                <div className={RightSectionCsss.box1}>
                    
        </div>*/}
        <div>
            <div
                data-testid="inner-div"
                style={{ width: `${width}px`, height: '50px', backgroundColor: 'lightblue' }}
            />
            <input
                type="range"
                min="100"
                max="500"
                value={width}
                onChange={handleWidthChange}
                data-testid="width-slider"
            />
        </div>
    </div>
    </>
  )
}

export default Slider