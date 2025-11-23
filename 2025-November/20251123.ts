function maxSumDivThree(nums: number[]): number {
  const maxSums: number[] = Array.from({ length: 3 }, () => 0);

  for (const num of nums) {
    const prevMaxSums = [...maxSums];

    for (const prevMaxSum of prevMaxSums) {
      const reminder = (prevMaxSum + num) % 3;
      maxSums[reminder] = Math.max(maxSums[reminder], prevMaxSum + num);
    }
  }

  return maxSums[0];
}
