function findSmallestInteger(nums: number[], value: number): number {
  const remainderCount: number[] = new Array(value).fill(0);

  for (const num of nums) {
    const remainder: number = Math.abs(num % value);
    remainderCount[remainder]++;
  }

  for (let candidate = 0; ; candidate++) {
    const remainderClass: number = candidate % value;

    if (remainderCount[remainderClass] === 0) {
      return candidate;
    }

    remainderCount[remainderClass]--;
  }
}
