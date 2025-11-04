function findXSum(nums: number[], k: number, x: number): number[] {
  const map: Map<number, number> = new Map();
  const answer: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    if (i >= k - 1) {
      const arr: number[][] = Array.from(map);
      arr.sort((a, b) => (a[1] === b[1] ? b[0] - a[0] : b[1] - a[1]));
      let sum = 0;
      for (let j = 0; j < Math.min(x, arr.length); j++) {
        sum += arr[j][0] * arr[j][1];
      }
      answer.push(sum);
      const leftElement = nums[i - k + 1];
      const freq = map.get(leftElement)! - 1;
      freq === 0 ? map.delete(leftElement) : map.set(leftElement, freq);
    }
  }

  return answer;
}
