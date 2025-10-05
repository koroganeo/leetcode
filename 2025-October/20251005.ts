function pacificAtlantic(heights: number[][]): number[][] {
  const vis1 = new Set<string>();
  const vis2 = new Set<string>();

  const q1: number[][] = [];
  const q2: number[][] = [];

  const row = heights.length;
  const col = heights[0].length;
  const directions: number[][] = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
  ];

  const stringify = (i: number, j: number) => `${i}-${j}`;
  const dfs = (q: number[][], vis: Set<string>) => {
    while (q.length) {
      const item = q.pop();
      if (!item) continue;
      const [i, j]: number[] = item;
      directions.forEach((direction) => {
        const [a, b] = direction;
        const x: number = a + i;
        const y: number = b + j;
        if (0 <= x && x < row && 0 <= y && y < col) {
          if (!vis.has(stringify(x, y)) && heights[x][y] >= heights[i][j]) {
            q.push([x, y]);
            vis.add(stringify(x, y));
          }
        }
      });
    }
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i === 0 || j === 0) {
        q1.push([i, j]);
        vis1.add(stringify(i, j));
      }
      if (i === row - 1 || j === col - 1) {
        q2.push([i, j]);
        vis2.add(stringify(i, j));
      }
    }
  }

  dfs(q1, vis1);
  dfs(q2, vis2);

  const result: number[][] = [];

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (vis1.has(stringify(i, j)) && vis2.has(stringify(i, j))) {
        result.push([i, j]);
      }
    }
  }

  return result;
}
