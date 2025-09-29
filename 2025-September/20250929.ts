function minScoreTriangulation(values: number[]): number {
  const length = values.length;

  const memo: number[][] = Array.from({ length: length }, () =>
    Array.from({ length: length }, () => 0)
  );

  const calculateMinScore = (start: number, end: number) => {
    if (start + 1 === end) return 0;
    if (memo[start][end] > 0) return memo[start][end];

    let minScore = 1 << 30;

    for (let k = start + 1; k < end; k++) {
      const currentScore: number =
        calculateMinScore(start, k) +
        calculateMinScore(k, end) +
        values[start] * values[k] * values[end];

      minScore = Math.min(minScore, currentScore);
    }

    memo[start][end] = minScore;
    return minScore;
  };

  return calculateMinScore(0, length - 1);
}
