import React from 'react';
import { render } from '@testing-library/react';
import Quote from '../Quotes';
import '@testing-library/jest-dom/extend-expect';

describe('Quote component', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Quote />);
    expect(container).toMatchSnapshot();
  });
});
