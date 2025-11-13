function maxOperations(s: string): number {
  const chain = s.split('');
  let one = 0,
    sum = 0;

  for (let i = 0; i < chain.length - 1; i++) {
    if (chain[i] === '1') one++;
    if (chain[i] === '1' && chain[i + 1] === '0') sum += one;
  }

  return sum;
}
