function totalMoney(n: number): number {
  const completeWeeks: number = Math.floor(n / 7);
  const remainingDays: number = n % 7;

  const firstWeekSum: number = 28;
  const lastWeekSum: number = 28 + 7 * (completeWeeks - 1);
  const sumComplete: number = ((firstWeekSum + lastWeekSum) * completeWeeks) / 2;

  const firstDayAmount: number = completeWeeks + 1;
  const lastDayAmount: number = completeWeeks + remainingDays;
  const totalFromRemainingDays: number = ((firstDayAmount + lastDayAmount) * remainingDays) / 2;

  return sumComplete + totalFromRemainingDays;
}
