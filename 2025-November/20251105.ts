function findXSum2(nums: number[], k: number, x: number): number[] {
  const answer: number[] = [];
  const freq = new Map<number, number>();

  // Two sets to maintain top x elements
  const topX = new Map<number, number>(); // Elements in top x
  const candidates = new Map<number, number>(); // Elements not in top x
  let topXSum = 0;

  // Helper function to get the "score" for comparison
  const getScore = (num: number, freq: number): number => {
    return freq * 1e9 + num; // Encode frequency and value for comparison
  };

  // Add element to window
  const addElement = (num: number) => {
    const oldFreq = freq.get(num) || 0;
    const newFreq = oldFreq + 1;
    freq.set(num, newFreq);

    // Remove from old position
    if (oldFreq > 0) {
      if (topX.has(num)) {
        topX.delete(num);
        topXSum -= num * oldFreq;
      } else {
        candidates.delete(num);
      }
    }

    // Add to appropriate set
    if (topX.size < x) {
      topX.set(num, newFreq);
      topXSum += num * newFreq;
    } else {
      // Check if this element should be in topX
      let minInTopX = Infinity;
      let minNum = -1;

      for (const [n, f] of topX) {
        const score = getScore(n, f);
        if (score < minInTopX) {
          minInTopX = score;
          minNum = n;
        }
      }

      if (getScore(num, newFreq) > minInTopX) {
        // Swap
        const minFreq = topX.get(minNum)!;
        topX.delete(minNum);
        topXSum -= minNum * minFreq;
        candidates.set(minNum, minFreq);

        topX.set(num, newFreq);
        topXSum += num * newFreq;
      } else {
        candidates.set(num, newFreq);
      }
    }
  };

  // Remove element from window
  const removeElement = (num: number) => {
    const oldFreq = freq.get(num)!;
    const newFreq = oldFreq - 1;

    if (newFreq === 0) {
      freq.delete(num);
    } else {
      freq.set(num, newFreq);
    }

    // Remove from old position
    if (topX.has(num)) {
      topX.delete(num);
      topXSum -= num * oldFreq;

      if (newFreq > 0) {
        // Try to find best candidate to promote
        let maxCandidate = -Infinity;
        let maxNum = -1;

        for (const [n, f] of candidates) {
          const score = getScore(n, f);
          if (score > maxCandidate) {
            maxCandidate = score;
            maxNum = n;
          }
        }

        if (maxNum !== -1 && getScore(num, newFreq) < maxCandidate) {
          // Promote candidate
          const maxFreq = candidates.get(maxNum)!;
          candidates.delete(maxNum);
          topX.set(maxNum, maxFreq);
          topXSum += maxNum * maxFreq;

          candidates.set(num, newFreq);
        } else {
          topX.set(num, newFreq);
          topXSum += num * newFreq;
        }
      } else if (candidates.size > 0) {
        // Find best candidate to promote
        let maxCandidate = -Infinity;
        let maxNum = -1;

        for (const [n, f] of candidates) {
          const score = getScore(n, f);
          if (score > maxCandidate) {
            maxCandidate = score;
            maxNum = n;
          }
        }

        if (maxNum !== -1) {
          const maxFreq = candidates.get(maxNum)!;
          candidates.delete(maxNum);
          topX.set(maxNum, maxFreq);
          topXSum += maxNum * maxFreq;
        }
      }
    } else if (candidates.has(num)) {
      candidates.delete(num);
      if (newFreq > 0) {
        candidates.set(num, newFreq);
      }
    }
  };

  // Process windows
  for (let i = 0; i < nums.length; i++) {
    addElement(nums[i]);

    if (i >= k - 1) {
      answer.push(topXSum);
      removeElement(nums[i - k + 1]);
    }
  }

  return answer;
}
