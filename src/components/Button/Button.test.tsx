import React from 'react';

import { fireEvent, getByTestId, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Button } from '.';

describe('<Button />', () => {
  it('should render the component', () => {
    render(<Button>MyApp</Button>);
  });

  it('should event click on', () => {
    const testFunction = jest.fn();
    const { container } = render(
      <Button onClick={testFunction} onContrast>
        MyApp
      </Button>,
    );
    const button = getByTestId(container, 'component-button');
    expect(fireEvent.click(button));
  });

  it('should event click Disabled', () => {
    const testFunction = jest.fn();
    const { container } = render(
      <Button onContrast onClick={testFunction}>
        MyApp
      </Button>,
    );
    expect(getByTestId(container, 'component-button').getAttribute('disabled'));
  });
});
