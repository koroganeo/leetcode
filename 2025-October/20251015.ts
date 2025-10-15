function maxIncreasingSubarrays(nums: number[]): number {
  let mx: number = 0,
    cur: number = 0,
    pre: number = 0;
  for (let i = 0; i < nums.length; i++) {
    cur++;
    if (nums[i] >= nums[i + 1] || i === nums.length - 1) {
      mx = Math.max(mx, Math.floor(cur / 2), Math.min(pre, cur));
      pre = cur;
      cur = 0;
    }
  }

  return mx;
}
