function canBeTypedWords(text: string, brokenLetters: string): number {
  const splitText = text.split(' ');
  const brokenArray = Array.from(brokenLetters);
  const total = splitText.reduce((acc: number, cur: string) => {
    const isBroken = brokenArray.some((letter) => cur.includes(letter));
    return acc + (isBroken ? 0 : 1);
  }, 0);
  return total;
}
