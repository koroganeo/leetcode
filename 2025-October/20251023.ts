function hasSameDigits(s: string): boolean {
  let arr: number[] = s.split('').map(Number);
  while (arr.length > 2) {
    const tempArr: number[] = [];
    for (let i = 0; i < arr.length - 1; i++) {
      tempArr.push((Number(arr[i]) + Number(arr[i + 1])) % 10);
    }
    arr = tempArr;
  }
  return arr[0] === arr[1];
}
