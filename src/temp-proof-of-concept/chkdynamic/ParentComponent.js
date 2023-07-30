import React, { useState } from 'react';
import DynamicComponent from './DynamicComponent';

const ParentComponent = () => {
  const [width, setWidth] = useState(100);

  const handleButtonClick = () => {
    // You can change this logic to get the desired width value from any source.
    // For this example, I'll simply increase the width by 50 on each click.
    setWidth((prevWidth) => prevWidth + 50);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Increase Width</button>
      <DynamicComponent width={width} />
    </div>
  );
};

export default ParentComponent;