import { describe, expect, expectTypeOf, it } from 'vitest';

import { findTheKiller } from './solution';

describe('reto #4: Encuentra al asesino', () => {
  it('return type', () => {
    const result = findTheKiller('', []);

    expectTypeOf(result).toBeString();
  });

  it("findTheKiller('d~~~~~a', ['Dracula', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers'])", () => {
    const result = findTheKiller('d~~~~~a', [
      'Dracula',
      'Freddy Krueger',
      'Jason Voorhees',
      'Michael Myers',
    ]);

    expect(result).toEqual('Dracula');
  });

  it("findTheKiller('~r~dd~', ['Freddy', 'Freddier', 'Fredderic'])", () => {
    const result = findTheKiller('~r~dd~', ['Freddy', 'Freddier', 'Fredderic']);

    expect(result).toEqual('Freddy,Freddier,Fredderic');
  });

  it("findTheKiller('~r~dd$', ['Freddy', 'Freddier', 'Fredderic'])", () => {
    const result = findTheKiller('~r~dd$', ['Freddy', 'Freddier', 'Fredderic']);

    expect(result).toEqual('');
  });

  it("findTheKiller('mi~~def', ['Midudev', 'Midu', 'Madeval'])", () => {
    const result = findTheKiller('mi~~def', ['Midudev', 'Midu', 'Madeval']);

    expect(result).toEqual('');
  });

  it("findTheKiller('~~~~~~', ['Pennywise', 'Leatherface', 'Agatha'])", () => {
    const result = findTheKiller('~~~~~~', ['Pennywise', 'Leatherface', 'Agatha']);

    expect(result).toEqual('Pennywise,Leatherface,Agatha');
  });

  it("findTheKiller('~~~~~~$', ['Pennywise', 'Leatherface', 'Agatha'])", () => {
    const result = findTheKiller('~~~~~~$', ['Pennywise', 'Leatherface', 'Agatha']);

    expect(result).toEqual('Agatha');
  });

  it("findTheKiller('s~v~r~', ['Severus Snape', 'Sirius Black', 'Salazar Slytherin'])", () => {
    const result = findTheKiller('s~v~r~', ['Severus Snape', 'Sirius Black', 'Salazar Slytherin']);

    expect(result).toEqual('Severus Snape');
  });

  it("findTheKiller('~~~~~y$', ['Chucky', 'Tiffany', 'Freddy', 'Mickey'])", () => {
    const result = findTheKiller('~~~~~y$', ['Chucky', 'Tiffany', 'Freddy', 'Mickey']);

    expect(result).toEqual('Chucky,Freddy,Mickey');
  });
});
