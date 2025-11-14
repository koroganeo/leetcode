function rangeAddQueries(n: number, queries: number[][]): number[][] {
  const mat: number[][] = Array.from({ length: n }, () => Array(n).fill(0));
  for (const [x0, y0, x1, y1] of queries) {
    for (let i = x0; i <= x1; i++) {
      for (let j = y0; j <= y1; j++) {
        mat[i][j]++;
      }
    }
  }
  return mat;
}
