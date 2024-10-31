export function battleHorde(zombies: string, humans: string): string {
  let power = 0;

  for (let i = 0; i < zombies.length; i++) {
    power += zombies.charCodeAt(i) - humans.charCodeAt(i);
  }

  return power > 0 ? `${power}z` : power < 0 ? `${-power}h` : 'x';
}
