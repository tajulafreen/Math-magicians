import React from 'react';
import { render } from '@testing-library/react';
import Home from '../homepage';
import '@testing-library/jest-dom/extend-expect';

describe('Home component', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
