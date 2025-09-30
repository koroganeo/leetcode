function triangularSum(nums: number[]): number {
  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      nums[j] = (nums[j] + nums[j + 1]) % 10;
    }
  }
  return nums[0];
}

// Inverses of digits 0..9 modulo 10.
const invMod10 = [0, 1, 0, 7, 0, 0, 0, 3, 0, 9];

// 2 4 8 6(16) 2(32) 4(64) 8(128) ...
const power2Mod10 = [6, 2, 4, 8]; // cycle length = 4

function triangularSum2(nums: number[]): number {
  const length = nums.length - 1;
  let result = 0;
  let mCk = 1; // mCk without 2's and 5's.
  let f2 = 0; // Number of 2's in the actual mCk.
  let f5 = 0; // Number of 5's in the actual mCk.

  for (let k = 0; k <= length; ++k) {
    // Actual mCk_ = (mCk * 2**f2 * 5**f5) % 10
    //
    // p2 > 0 && p5 > 0:
    //   mCk_ % 10 === 0, so nums[k] doesn't contribute to the answer.
    //
    // p2 > 0 && p5 === 0:
    //   mCk_ = (mCk * 2**p2) % 10 = (mCk * power2Mod10[p2 % 4]) % 10
    //
    // p2 === 0 && p5 > 0:
    //   mCk_ = (mCk * 5) % 10
    //
    // p2 === 0 && p5 === 0:
    //   mCk_ = mCk
    if (f2 === 0 || f5 === 0) {
      const mCk_ =
        f2 > 0
          ? (mCk * power2Mod10[f2 & 3]) % 10
          : f5 > 0
          ? (mCk * 5) % 10
          : mCk;
      result = (result + mCk_ * nums[k]) % 10;
    }

    if (k === length) break;

    // Calculate the next mCk:
    //   mC(k + 1) = mCk * (m - k) / (k + 1).

    let mul = length - k;
    let div = k + 1;

    while (mul % 5 === 0) {
      mul /= 5;
      ++f5;
    }
    while (mul % 2 === 0) {
      mul /= 2;
      ++f2;
    }
    while (div % 5 === 0) {
      div /= 5;
      --f5;
    }
    while (div % 2 === 0) {
      div /= 2;
      --f2;
    }

    mCk = (mCk * mul * invMod10[div % 10]) % 10;
  }

  return result;
}
