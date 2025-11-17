function kLengthApart(nums: number[], k: number): boolean {
  let index = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (index >= 0 && i - index - 1 < k) return false;
      index = i;
    }
  }
  return true;
}
