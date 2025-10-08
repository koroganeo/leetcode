function successfulPairs(spells: number[], potions: number[], success: number): number[] {
  spells = spells.map((spell: number) => (spell = Math.ceil(success / spell)));
  potions.sort((a: number, b: number) => a - b);

  for (let i = 0; i < spells.length; i++) {
    let left = 0;
    let right = potions.length - 1;
    let minIndex = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (potions[mid] >= spells[i]) {
        minIndex = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    spells[i] = minIndex === -1 ? 0 : potions.length - minIndex;
  }

  return spells;
}
