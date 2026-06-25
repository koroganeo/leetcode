function countMajoritySubarrays(nums: number[], target: number): number {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = i; j < nums.length; j++) {
      count += nums[j] === target ? 1 : -1;
      if (count > 0) res++;
    }
  }
  return res;
}
