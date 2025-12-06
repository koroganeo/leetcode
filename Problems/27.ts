function removeElement(nums: number[], val: number): number {
  let n = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[n] = nums[i];
      n++;
    }
  }
  return n;
}
