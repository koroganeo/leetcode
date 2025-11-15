function getNoZeroIntegers(n: number): number[] {
  let i = 1;
  while (i.toString().includes('0') || (n - i).toString().includes('0')) i++;
  return [i, n - i];
}
