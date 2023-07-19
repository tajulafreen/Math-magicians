import React from 'react';
import renderWithRouter from '../test-utils';
import Navigation from '../navbar';
import '@testing-library/jest-dom/extend-expect';

describe('Navigation component', () => {
  it('should match the snapshot', () => {
    const { container } = renderWithRouter(<Navigation />);
    expect(container).toMatchSnapshot();
  });
});
