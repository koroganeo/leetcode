function maxArea(height: number[]): number {
  let l = 0;
  let r = height.length - 1;
  let maxWater = 0;

  while (l !== r) {
    const water = Math.min(height[l], height[r]) * (r - l);
    maxWater = Math.max(maxWater, water);
    height[l] < height[r] ? l++ : r--;
  }

  return maxWater;
}
