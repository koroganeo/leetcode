function strStr(haystack: string, needle: string): number {
  for (let i = 0; i < haystack.length; i++) {
    if (needle[0] === haystack[i]) {
      if (needle.length === 1) return i; // ← add this
      for (let j = 1; j < needle.length; j++) {
        if (needle[j] !== haystack[j + i]) break;
        if (j === needle.length - 1) return i;
      }
    }
  }
  return -1;
}

function solution(haystack: string, needle: string): number {
  let index = haystack.indexOf(needle);
  return index;
}
