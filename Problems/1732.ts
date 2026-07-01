function largestAltitude(gain: number[]): number {
    let max = 0;
    let g = 0
    for (let i = 0; i < gain.length; i++) {
        g += gain[i];
        max = (g > max) ? g : max;
    }
    return max;
};
