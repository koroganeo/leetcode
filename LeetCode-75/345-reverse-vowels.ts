const vowels = 'aeiouAEIOU';

function reverseVowels(s: string): string {
  const arr = s.split('');
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    while (left < right && !vowels.includes(arr[left])) left++;
    while (left < right && !vowels.includes(arr[right])) right--;
    if (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return arr.join('');
}
