function largestTriangleArea(points: number[][]): number {
  let result: number = 0.0;

  const area = (p1, p2, p3) => {
    return (
      Math.abs(
        p1[0] * (p2[1] - p3[1]) +
          p2[0] * (p3[1] - p1[1]) +
          p3[0] * (p1[1] - p2[1])
      ) / 2
    );
  };

  for (let i = 0; i < points.length - 2; i++) {
    for (let j = 0; j < points.length - 1; j++) {
      for (let k = 0; k < points.length; k++) {
        result = Math.max(area(points[i], points[j], points[k]), result);
      }
    }
  }
  return result;
}
