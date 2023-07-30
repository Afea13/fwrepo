import React from 'react';

const MyRectangleComponent = ({ width,rectNo ,gapVal }) => {
const boxDimension=100+((rectNo-1)*gapVal);

const rightSectionWidth=window.innerWidth-200;
const rightSectionHeight=window.innerHeight;
const topDistance=Math.floor((rightSectionHeight-boxDimension)/2);
const leftDistance=Math.floor((rightSectionWidth-boxDimension)/2);

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

const MyRectangleGenerator = ({ numberOfRectangles }) => {
  const rectangles = [];
  const gapVal=10; //coming from contextapi

  for (let i = 1; i <= numberOfRectangles; i++) {
    const width = i * 10;

    rectangles.push(<MyRectangleComponent key={i} width={width} rectNo={i} gapVal={gapVal}/>);
  }

  return <div>{rectangles}</div>;
};

export default MyRectangleGenerator;