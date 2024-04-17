import { render, screen } from '@testing-library/react';
import App from './App';
import { describe, expect, test } from 'vitest';

describe('App components test', () => {
    test('should show title all the time', () => {
        render(<App />);
        
        expect(screen.getByText(/ivory-orca/i)).toBeDefined();
    })
    test("should show 'All' link in the menu", () => {
        render(<App />);
        
        expect(screen.getByRole('link', { name: /All/i })).toBeDefined();
    })
    test("should show 'Home' heading in the 'H1' tag", () => {
        render(<App />);
        
        expect(screen.getByRole('heading', { level: 1, name: /Home/i })).toBeDefined();
    })
})

