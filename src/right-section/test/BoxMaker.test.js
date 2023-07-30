import React from 'react';
import { render ,fireEvent} from '@testing-library/react';
import BoxMaker from "../components/BoxMaker"

test('renders rectangles with correct widths', () => {
    const rightWidth=window.innerWidth-200;
  const { getAllByTestId } = render(<BoxMaker levels={2} levelGap={10} rightSectionWidth={rightWidth} />);
  const rectangles = getAllByTestId('rectangle');

  rectangles.forEach((rectangle, index) => {
    const width =100+(index*10) ;
    expect(rectangle).toHaveStyle(`width: ${width}px`);
  });
});