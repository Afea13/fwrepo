// RectangleGenerator.test.js
import React from 'react';
import { render } from '@testing-library/react';
import RectangleGenerator from './RectangleGenerator';

test('renders rectangles with correct widths', () => {
  const { getAllByTestId } = render(<RectangleGenerator numberOfRectangles={5} />);
  const rectangles = getAllByTestId('rectangle');

  rectangles.forEach((rectangle, index) => {
    const width = (index + 1) * 10;
    expect(rectangle).toHaveStyle(`width: ${width}px`);
  });
});