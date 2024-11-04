import { describe, expect, expectTypeOf, it } from 'vitest';

import { findSafestPath } from './solution';

describe('reto #3: Escapa de la pesadilla de Freddy', () => {
  it('return type', () => {
    const result = findSafestPath([]);

    expectTypeOf(result).toBeNumber();
  });

  it('findSafestPath([[1, 3, 1], [1, 5, 1], [4, 2, 1]])', () => {
    const result = findSafestPath([
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1],
    ]);

    expect(result).toEqual(7);
  });

  it('findSafestPath([[5, 9], [4, 2]])', () => {
    const result = findSafestPath([
      [5, 9],
      [4, 2],
    ]);

    expect(result).toEqual(11);
  });

  it('findSafestPath([[1, 1, 1], [1, 1, 1], [1, 1, 1]])', () => {
    const result = findSafestPath([
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ]);

    expect(result).toEqual(5);
  });

  it('findSafestPath([[1, 2, 3], [3, 2, 1], [4, 4, 4]])', () => {
    const result = findSafestPath([
      [1, 2, 3],
      [3, 2, 1],
      [4, 4, 4],
    ]);

    expect(result).toEqual(10);
  });

  it('findSafestPath([[1, 2], [3, 4], [6, 5], [7, 8]])', () => {
    const result = findSafestPath([
      [1, 2],
      [3, 4],
      [6, 5],
      [7, 8],
    ]);

    expect(result).toEqual(20);
  });

  it('findSafestPath([[1, 2, 3], [4, 5, 6], [7, 8, 9]])', () => {
    const result = findSafestPath([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);

    expect(result).toEqual(21);
  });
});
