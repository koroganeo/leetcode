function reverseWords(s: string): string {
    const arr = s.trim().split(/\s+/);
    return arr.reverse().join(' ');
};