import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Navbar from '../components/Navbar';

describe('Testing Navbar Component', () => {

  beforeEach(() => render(<Navbar />))

  test('About Item in List Navigation', () => {
    expect(screen.getByText('About')).toBeInTheDocument();
  })
  test('Projects Item in List Navigation', () => {
    expect(screen.getByText('Projects')).toBeInTheDocument();
  })
  test('Resume Item in List Navigation', () => {
    expect(screen.getByText('Resume')).toBeInTheDocument();
  })
  test('Contact Item in List Navigation', () => {
    expect(screen.getByText('Contact')).toBeInTheDocument();
  })
})