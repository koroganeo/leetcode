function minTime(skill: number[], mana: number[]): number {
  const sum = skill.reduce((a: number, b: number) => a + b);
  let prevWizardDone = sum * mana[0];

  for (let j = 1; j < mana.length; ++j) {
    let prevPotionDone = prevWizardDone;
    for (let i = skill.length - 2; i >= 0; --i) {
      prevPotionDone -= skill[i - 1] * mana[j - 1];
      prevWizardDone = Math.max(prevPotionDone, prevWizardDone - skill[i] * mana[j]);
    }
    prevWizardDone += sum * mana[j];
  }

  return prevWizardDone;
}
