function numberOfSubstrings(s: string): number {
  const count: Record<string, number> = { a: 0, b: 0, c: 0 };
  let left = 0;
  let result = 0;

  for (let right = 0; right < s.length; right++) {
    count[s[right]]++;

    while (count.a > 0 && count.b > 0 && count.c > 0) {
      count[s[left]]--;
      left++;
    }

    result += left;
  }

  return result;
}
