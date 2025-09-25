function minimumTotal(triangle: number[][]): number {
  const sum: number[] = Array(triangle.length + 1).fill(0);
  for (let row = triangle.length - 1; row >= 0; row--) {
    for (let col = 0; col <= row; col++) {
      sum[col] = Math.min(sum[col], sum[col + 1]) + triangle[row][col];
    }
  }
  return sum[0];
}
