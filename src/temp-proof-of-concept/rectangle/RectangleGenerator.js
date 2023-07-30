import React from 'react';

const Rectangle = ({ width,rectNo ,gapVal }) => {
const rectGap=(rectNo-1)*gapVal;
  return (
    <div
      style={{
        width: `${width}px`,
        height: '100px',
       
        border: '1px solid hotpink',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      data-testid="rectangle"
    />
  );
};

const RectangleGenerator = ({ numberOfRectangles }) => {
  const rectangles = [];
  const gapVal=10;

  for (let i = 1; i <= numberOfRectangles; i++) {
    const width = i * 10;

    rectangles.push(<Rectangle key={i} width={width} rectNo={i} gapVal={gapVal}/>);
  }

  return <div>{rectangles}</div>;
};

export default RectangleGenerator;