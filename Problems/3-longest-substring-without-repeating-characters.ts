function lengthOfLongestSubstring(s: string): number {
  const arr: string[] = s.split('');
  let res: string[] = [];
  let temp: string[] = [];
  for (const char of arr) {
    if (!temp.includes(char)) {
      temp.push(char);
      if (res.length < temp.length) res = [...temp];
    } else {
      const index = temp.findIndex((t) => t === char);
      temp.splice(0, index + 1);
      temp.push(char);
    }
  }
  return temp.length < res.length ? res.length : temp.length;
}
