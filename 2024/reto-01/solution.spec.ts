import { describe, expect, it } from 'vitest';

import { createMagicPotion } from './solution';

describe('reto #1: Crea la poción perfecta', () => {
  it('return type', () => {
    const potions = [1, 2, 3, 4];
    const goal = 5;

    const result = createMagicPotion(potions, goal);

    expect(result).toBeInstanceOf(Array);
  });

  it('createMagicPotion([13, 5, 6, 2], 8)', () => {
    const result = createMagicPotion([13, 5, 6, 2], 8);

    expect(result).toEqual([2, 3]);
  });

  it('createMagicPotion([11, 3, 7, 5], 10)', () => {
    const result = createMagicPotion([11, 3, 7, 5], 10);

    expect(result).toEqual([1, 2]);
  });

  it('createMagicPotion([4, 3, 2, 3, 4], 6)', () => {
    const result = createMagicPotion([4, 3, 2, 3, 4], 6);

    expect(result).toEqual([0, 2]);
  });

  it('createMagicPotion([0, 0, -2, 3], 2)', () => {
    const result = createMagicPotion([0, 0, -2, 3], 2);

    expect(result).toBeUndefined();
  });

  it('createMagicPotion([10, 5, 2, 3, 7, 5], 10)', () => {
    const result = createMagicPotion([10, 5, 2, 3, 7, 5], 10);

    expect(result).toEqual([3, 4]);
  });

  it('createMagicPotion([1, 2, 3, 4, 5], 8)', () => {
    const result = createMagicPotion([1, 2, 3, 4, 5], 8);

    expect(result).toEqual([2, 4]);
  });

  it('createMagicPotion([5, 1, 4, 6, 2], 9)', () => {
    const result = createMagicPotion([5, 1, 4, 6, 2], 9);

    expect(result).toEqual([0, 2]);
  });

  it('createMagicPotion([1, -2, 3, -4, 5], -1)', () => {
    const result = createMagicPotion([1, -2, 3, -4, 5], -1);

    expect(result).toEqual([0, 1]);
  });

  it('createMagicPotion([10, 20, 30, 40], 50)', () => {
    const result = createMagicPotion([10, 20, 30, 40], 50);

    expect(result).toEqual([1, 2]);
  });

  it('createMagicPotion([], 10)', () => {
    const result = createMagicPotion([], 10);

    expect(result).toBeUndefined();
  });
});
