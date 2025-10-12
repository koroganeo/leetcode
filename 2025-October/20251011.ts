function maximumTotalDamage(power: number[]): number {
  const length = power.length;
  power.sort((a, b) => a - b);

  const nextValidIndex: number[] = new Array(length).fill(0);

  const frequency: Record<number, number> = {};

  const cachedValue: number[] = new Array(length).fill(0);

  for (let i = 0; i < length; i++) {
    frequency[power[i]] = (frequency[power[i]] || 0) + 1;

    let left: number = i + 1;
    let right: number = length;

    while (left < right) {
      const mid = (left + right) >> 1;
      power[mid] > power[i] + 2 ? (right = mid) : (left = mid + 1);
    }

    nextValidIndex[i] = left;
  }

  const maxCalculateDamage = (index: number): number => {
    if (index >= length) return 0;
    if (cachedValue[index]) return cachedValue[index];

    const nextValue: number = maxCalculateDamage(index + frequency[power[index]]);
    const currentValue: number = power[index] * frequency[power[index]] + maxCalculateDamage(nextValidIndex[index]);

    cachedValue[index] = Math.max(nextValue, currentValue);
    return cachedValue[index];
  };

  return maxCalculateDamage(0);
}
