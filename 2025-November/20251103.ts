function minCost(colors: string, neededTime: number[]): number {
  let sum: number = 0;
  for (let i: number = 0; i < colors.length - 1; i++) {
    if (colors[i] === colors[i + 1]) {
      sum += Math.min(neededTime[i], neededTime[i + 1]);
      neededTime[i + 1] = Math.max(neededTime[i], neededTime[i + 1]);
    }
  }
  return sum;
}
