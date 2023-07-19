import React from 'react';
import renderWithRouter from '../test-utils';
import Layout from '../layout';
import '@testing-library/jest-dom/extend-expect';

describe('Layout component', () => {
  it('should match the snapshot', () => {
    const { container } = renderWithRouter(<Layout />);
    expect(container).toMatchSnapshot();
  });
});
