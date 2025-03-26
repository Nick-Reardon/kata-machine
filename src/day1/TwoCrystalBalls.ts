export default function two_crystal_balls(breaks: boolean[]): number {
  
  // This formula can be arrived at with calculus & discrete optimization...
  // But the main thing is that it's BETTER than linear.
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));

  // ---- TESTING FIRST CRYSTAL BALL ----
  // test for breaks at each jump interval, beginning with the first one
  let i = jumpAmount;
  for (; i < breaks.length; i += jumpAmount) {
    // exit this loop once it breaks
    if (breaks[i]) {
      break;
    }
  }

  // ---- TESTING SECOND CRYSTAL BALL ----
  // jump back to the previous interval where the ball didnt break
  i -= jumpAmount;
  // walk one floor at a time, testing until it breaks
  // j represents the additional floor(s) being tested above i (the last safe jump interval)
  for (let j = 0; j < jumpAmount && i < breaks.length; i++, j++) {
    if (breaks[i]) {
      return i
    }
  }

  return -1
}