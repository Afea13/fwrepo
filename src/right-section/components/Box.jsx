import React from 'react'


 const Box = ({boxDimension, leftDistance ,topDistance }) => {





    return (
        <div
          style={{
            width: `${boxDimension}px`,
            height: `${boxDimension}px`,
          
            border: '1px solid hotpink',
            position: 'absolute',
            top:`${topDistance}px`,
            left:`${leftDistance}px`
           
          }}
          data-testid="rectangle"
        />
      );
    };

    export default  Box;