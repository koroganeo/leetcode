function prefixesDivBy5(nums: number[]): boolean[] {
  const answer: boolean[] = Array<boolean>(nums.length);
  let remainder = 0;
  for (let i = 0; i < nums.length; i++) {
    remainder = ((remainder << 1) | nums[i]) % 5;
    answer[i] = remainder === 0;
  }
  return answer;
}
