function isPalindrome(x: number): boolean {
  if (x < 0) return false;

  let n = x;
  let rev: number = 0;
  while (x > 0) {
    rev = 10 * rev + (x % 10);
    x = (x / 10) | 0;
  }
  return rev === n;
}
