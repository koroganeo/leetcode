function finalValueAfterOperations(operations: string[]): number {
  let x: number = 0;
  for (let i = 0; i < operations.length; i++) {
    x += operations[i].includes('+') ? 1 : -1;
  }
  return x;
}
