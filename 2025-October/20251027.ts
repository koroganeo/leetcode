function numberOfBeams(bank: string[]): number {
  let beams = new Array(bank.length).fill(0);

  for (let i = 0; i < bank.length; i++) {
    for (let j = 0; j < bank[i].length; j++) {
      if (bank[i][j] === '1') {
        beams[i]++;
      }
    }
  }

  let prev = 0;
  let total = 0;
  for (const count of beams) {
    if (count === 0) continue;
    if (prev > 0) {
      total += prev * count;
    }
    prev = count;
  }

  return total;
}
