import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './p1-main/m1-ui/u1-app/App';

test('renders learn react link', () => {
    render(<App/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
