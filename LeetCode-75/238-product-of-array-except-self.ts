function productExceptSelf(nums: number[]): number[] {
  let zeros = 0;
  let product = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) zeros++;
    else product *= nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    if (zeros >= 1 || (zeros === 1 && nums[i] !== 0)) nums[i] = 0;
    else if (zeros === 1 && nums[i] === 0) nums[i] = product;
    else nums[i] = product / nums[i];
  }

  return nums;
}
