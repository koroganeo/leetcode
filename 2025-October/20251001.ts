function numWaterBottles(numBottles: number, numExchange: number): number {
  if (numBottles < numExchange) return numBottles;
  const newBottles = Math.floor(numBottles / numExchange);
  const remainBottles = numBottles % numExchange;
  return numBottles - remainBottles + numWaterBottles(newBottles + remainBottles, numExchange);
}
