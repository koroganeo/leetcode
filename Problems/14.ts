function longestCommonPrefix(strs: string[]): string {
  if (!strs.length) return '';
  let prefix = strs[0];

  const getPrefix = (a: string, b: string): string => {
    if (!a?.length || !b?.length) return '';
    let s = [];
    const length = a.length > b.length ? b.length : a.length;
    for (let i = 0; i < length; i++) {
      if (a[i] !== b[i]) break;
      s.push(a[i]);
    }
    return s.join('');
  };

  for (let i = 1; i < strs.length; i++) {
    prefix = getPrefix(prefix, strs[i]);
  }

  return prefix;
}
