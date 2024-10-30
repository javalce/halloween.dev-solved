export function createMagicPotion(potions: number[], target: number): number[] | undefined {
  const potionMap = new Map<number, number>();

  for (let i = 0; i < potions.length; i++) {
    const complement = target - potions[i];

    if (potionMap.has(complement)) {
      return [potionMap.get(complement)!, i];
    }
    potionMap.set(potions[i], i);
  }

  return undefined;
}
