function numOfStrings(patterns: string[], word: string): number {
  let sum = 0;
  for (let i = 0; i < patterns.length; i++) {
    if (word.includes(patterns[i])) sum++;
  }
  return sum;
}
