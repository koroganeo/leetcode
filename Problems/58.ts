function lengthOfLastWord(s: string): number {
  let sum = 0;
  let i = s.length - 1;
  while (s[i] === ' ') i--;
  while (i >= 0 && s[i] !== ' ') {
    sum++;
    i--;
  }
  return sum;
}
