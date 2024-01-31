import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages/home/Home';
import { NavLink } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  NavLink: jest.fn(({ children, to }) => (
    <a href={to} data-testid={children}>
      {children}
    </a>
  )),
}));

test('renders nav buttons', () => {
  render(<Home />);

  const menuItems: string[] = ['Meals', 'Shopping', 'Chores'];

  menuItems.forEach((menuItem: string) => {
    const navButton = screen.getByTestId(menuItem);
    expect(navButton).toBeInTheDocument();
    expect(navButton).toHaveTextContent(menuItem);
  });
});
