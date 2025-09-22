function maxFrequencyElements(nums: number[]): number {
  const map: Map<number, number> = new Map();
  let maxFreq = 0;
  let count = 0;
  for (const num of nums) {
    const freq = (map.get(num) || 0) + 1;
    map.set(num, freq);
    if (freq > maxFreq) {
      maxFreq = freq;
      count = 1;
    } 
    if (freq === maxFreq) {
      count++;
    }
  }
  return count * maxFreq;
}
