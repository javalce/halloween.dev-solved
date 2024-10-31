import { describe, expect, expectTypeOf, it } from 'vitest';

import { battleHorde } from './solution';

describe('reto #2: Horda de zombies', () => {
  it('return type', () => {
    const result = battleHorde('', '');

    expectTypeOf(result).toBeString();
  });

  it("battleHorde('242', '334')", () => {
    const result = battleHorde('242', '334');

    expect(result).toEqual('2h');
  });

  it("battleHorde('444', '282')", () => {
    const result = battleHorde('444', '282');

    expect(result).toEqual('x');
  });

  it("battleHorde('555', '666')", () => {
    const result = battleHorde('555', '666');

    expect(result).toEqual('3h');
  });

  it("battleHorde('321', '123')", () => {
    const result = battleHorde('321', '123');

    expect(result).toEqual('x');
  });

  it("battleHorde('4598', '7682')", () => {
    const result = battleHorde('4598', '7682');

    expect(result).toEqual('3z');
  });

  it("battleHorde('8989898999', '7779998811')", () => {
    const result = battleHorde('8989898999', '7779998811');

    expect(result).toEqual('20z');
  });

  it("battleHorde('57685849323', '98765438965')", () => {
    const result = battleHorde('57685849323', '98765438965');

    expect(result).toEqual('10h');
  });
});
