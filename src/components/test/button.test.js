import React from 'react';
import { render } from '@testing-library/react';
import Buttons from '../button';
import '@testing-library/jest-dom/extend-expect';

describe('Buttons component', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Buttons />);
    expect(container).toMatchSnapshot();
  });
});
