function minOperations(nums: number[]): number {
  let count = 0;
  const stack: number[] = [0];

  for (const num of nums) {
    while (stack.length && stack[0] > num) stack.shift();
    if (!stack.length || stack[0] < num) {
      ++count;
      stack.unshift(num);
    }
  }

  return count;
}
