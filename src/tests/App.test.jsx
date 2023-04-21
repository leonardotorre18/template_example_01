import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from '../App';

test('Render Application', () => {
  render(<App />);
  expect(screen).toBeDefined();
});