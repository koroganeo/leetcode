function maxBottlesDrunk(numBottles: number, numExchange: number): number {
  let drunk = numBottles;
  let empty = numBottles;

  while (empty >= numExchange) {
    drunk++;
    empty -= numExchange - 1;
    numExchange++;
  }

  return drunk;
}
