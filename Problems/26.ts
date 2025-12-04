function removeDuplicates(nums: number[]): number {
  let n = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[n] !== nums[i]) {
      n++;
      nums[n] = nums[i];
    }
  }
  return n + 1;
}
