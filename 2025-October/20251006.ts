function swimInWater(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  const visitedHead: boolean[][] = Array.from({ length: rows }, () => new Array(cols).fill(false));
  const visitedTail: boolean[][] = Array.from({ length: rows }, () => new Array(cols).fill(false));

  const headSet: Set<string> = new Set();
  const tailSet: Set<string> = new Set();

  const directions: number[][] = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
  ];

  const stringify = (a: number, b: number) => `${a}-${b}`;
  const dfs = (gridSet: Set<string>, visited: boolean[][], t: number) => {
    const currentPositions: string[] = Array.from(gridSet);

    for (const pos of currentPositions) {
      const [x, y] = pos.split('-').map(Number);
      directions.forEach((direction) => {
        const [a, b] = direction;
        const i: number = a + x;
        const j: number = b + y;
        if (i >= 0 && i < rows && j >= 0 && j < cols && !visited[i][j] && grid[i][j] <= t) {
          gridSet.add(stringify(i, j));
          visited[i][j] = true;
        }
      });
    }
  };

  headSet.add(stringify(0, 0));
  visitedHead[0][0] = true;
  tailSet.add(stringify(rows - 1, cols - 1));
  visitedTail[rows - 1][cols - 1] = true;

  let t = 0;

  const checkDuplicate = (set1: Set<string>, set2: Set<string>): boolean => {
    for (const pos of set1) {
      if (set2.has(pos)) return true;
    }
    return false;
  };

  while (!checkDuplicate(headSet, tailSet) && t <= rows * cols) {
    t++;
    dfs(headSet, visitedHead, t);
    dfs(tailSet, visitedTail, t);
    console.log(headSet, tailSet);
  }

  return t;
}

[
  [0, 1, 2, 3, 4],
  [24, 23, 22, 21, 5],
  [12, 13, 14, 15, 16],
  [11, 17, 18, 19, 20],
  [10, 9, 8, 7, 6],
];
