// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SupervisedStudy title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SupervisedStudy/i);
    expect(titleElement).toBeInTheDocument();
});
