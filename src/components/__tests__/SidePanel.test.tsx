import { render, screen } from '@testing-library/react';
import React from 'react';
import SidePanel from '../SidePanel';

describe('SidePanel', () => {
  test('renders children when open', () => {
    const onClose = jest.fn();
    render(
      <SidePanel open={true} onClose={onClose}>
        <div>Test Content</div>
      </SidePanel>
    );
    const content = screen.getByText('Test Content');
    expect(content).toBeInTheDocument();
  });

  it('renders children', () => {
    render(
      <SidePanel open={true} onClose={() => {}}>
        <div data-testid="child-element">Hello World</div>
      </SidePanel>
    );

    const childElement = screen.getByTestId('child-element');
    expect(childElement).toBeInTheDocument();
  });
});
