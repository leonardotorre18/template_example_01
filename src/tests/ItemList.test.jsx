import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test } from 'vitest';
import ItemList from '../components/ItemList';

describe('ItemList Componet', () => {

  const defaultProps = {
    title: 'Título',
    subtitle: 'Subtítulo',
    description: 'Descripción genérica',
    year: 2022
  }

  beforeEach(() => render(<ItemList {...defaultProps} />));

  test('Render', () => {
    expect(screen).toBeDefined();
  })
  test('Title in document', () => {
    const { title } = defaultProps;
    expect(screen.getByText(title)).toBeInTheDocument();
  })
  test('Subtitle in document', () => {
    const { subtitle } = defaultProps;
    expect(screen.getByText(subtitle)).toBeInTheDocument();
  })
  test('Description in document', () => {
    const { description } = defaultProps;
    expect(screen.getByText(description)).toBeInTheDocument();
  })
  test('Year in document', () => {
    const { year } = defaultProps;
    expect(screen.getByText(year)).toBeInTheDocument();
  })
})