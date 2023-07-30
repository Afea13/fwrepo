import React from 'react';

const DynamicComponent = ({ width }) => {
  return (
    <div>
      <div style={{ width: `${width}px`, height: '50px', backgroundColor: 'blue' }}></div>
    </div>
  );
};

export default DynamicComponent;