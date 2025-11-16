function numSub(s: string): number {
  const MODULO = 10 ** 9 + 7;
  const n = s.split('');
  let one = 0,
    res = 0;

  const sum = (n: number): number => {
    return (n * (n + 1)) / 2;
  };

  for (let i = 0; i < n.length; i++) {
    if (n[i] === '1') one++;
    if (n[i] === '0' || i === n.length - 1) {
      res = (res + sum(one)) % MODULO;
      one = 0;
    }
  }

  return res;
}
