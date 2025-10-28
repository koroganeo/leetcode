function countValidSelections(nums: number[]): number {
  const sum = nums.reduce((a, b) => a + b);
  let l = 0;
  let ans = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) l += nums[i];
    if (nums[i] === 0) {
      if (l * 2 === sum) ans += 2;
      if (Math.abs(l * 2 - sum) === 1) ans++;
    }
  }

  return ans;
}
