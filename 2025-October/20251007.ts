function avoidFlood(rains: number[]): number[] {
  const result: number[] = new Array(rains.length).fill(-1);
  const fullLakes = new Map<number, number>(); // lake -> day it was filled
  const dryDays: number[] = []; // indices of days with no rain

  for (let i = 0; i < rains.length; i++) {
    const lake = rains[i];
    if (lake === 0) {
      dryDays.push(i);
      result[i] = 1; // placeholder, will be updated if needed
    } else {
      if (fullLakes.has(lake)) {
        // Lake is already full, need to find a dry day to drain it
        const filledDay = fullLakes.get(lake)!;

        // Binary search for the first dry day after the lake was filled
        let left = 0,
          right = dryDays.length - 1;
        let dryDayIndex = -1;

        while (left <= right) {
          const mid = Math.floor((left + right) / 2);
          if (dryDays[mid] > filledDay) {
            dryDayIndex = mid;
            right = mid - 1;
          } else {
            left = mid + 1;
          }
        }

        if (dryDayIndex === -1) return []; // No dry day available

        const dryDay = dryDays[dryDayIndex];
        result[dryDay] = lake; // Drain this lake on that dry day
        dryDays.splice(dryDayIndex, 1); // Remove used dry day
      }

      fullLakes.set(lake, i); // Mark lake as full
    }
  }

  return result;
}
