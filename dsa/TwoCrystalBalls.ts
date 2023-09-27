export default function two_crystal_balls(breaks: boolean[]): number {
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));
  let i = jumpAmount;
  //  walk till sqrt of n
  for (; i < breaks.length; i += jumpAmount) {
    // console.log({ i, jumpAmount });
    if (breaks[i]) break;
  }
  // jump back sqrt of n
  i -= jumpAmount;
  // walk until sqrt of n
  for (let j = 0; j < jumpAmount && i < breaks.length; j++, i++) {
    // console.log({ i, jumpAmount, j });
    if (breaks[i]) return i;
  }
  return -1;
}
