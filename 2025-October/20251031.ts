function getSneakyNumbers(nums: number[]): number[] {
  const duplicates: number[] = [];
  const map: Map<number, number> = new Map();

  for (const num of nums) {
    const value = map.get(num) || 0 + 1;
    map.set(num, value + 1);
    if (value > 1) duplicates.push(num);
  }

  return duplicates;
}
