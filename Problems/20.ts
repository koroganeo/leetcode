function isValid(s: string): boolean {
  const map = new Map<string, string>([
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
  ]);
  const arr: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const char = map.get(s[i]);
    if (char) {
      arr.push(s[i]);
    } else {
      const last = arr.pop();
      if (!last || map.get(last) !== s[i]) return false;
    }
  }
  return arr.length === 0;
}
