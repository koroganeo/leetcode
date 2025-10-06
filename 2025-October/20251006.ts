function swimInWater(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  const visited: boolean[][] = Array.from({ length: rows }, () => new Array(cols).fill(false));

  const directions: number[][] = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
  ];

  const priorityQueue: number[][] = [[0, 0, grid[0][0]]];
  visited[0][0] = true;

  let maxElevation = 0;

  while (priorityQueue.length) {
    const cell: number[] | undefined = priorityQueue.shift();
    if (!cell) break;

    const [row, col]: number[] = cell;
    maxElevation = Math.max(grid[row][col], maxElevation);

    if (row === rows - 1 && col === cols - 1) break;

    for (const [a, b] of directions) {
      const nextRow: number = a + row;
      const nextCol: number = b + col;
      if (nextRow >= 0 && nextRow < rows && nextCol >= 0 && nextCol < cols && !visited[nextRow][nextCol]) {
        visited[nextRow][nextCol] = true;
        priorityQueue.push([nextRow, nextCol, grid[nextRow][nextCol]]);
      }
    }

    priorityQueue.sort((a: number[], b: number[]) => a[2] - b[2]);
  }

  return maxElevation;
}
