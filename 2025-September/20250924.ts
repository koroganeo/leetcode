function fractionToDecimal(numerator: number, denominator: number): string {
  if (numerator === 0) return '0';
  let result: (string | number)[] = [];
  if (numerator > 0 !== denominator > 0) result.push('-');

  let a = Math.abs(numerator);
  let b = Math.abs(denominator);

  result.push(Math.floor(a / b));
  a = a % b;

  if (a === 0) return result.join('');

  result.push('.');

  const map: Map<number, number> = new Map();
  while (a !== 0) {
    map.set(a, result.length);
    a *= 10;
    result.push(Math.floor(a / b));
    a = a % b;
    if (map.has(a)) {
      const index = map.get(a);
      index && result.splice(index, 0, '(');
      result.push(')');
      break;
    }
  }
  return result.join('');
}
