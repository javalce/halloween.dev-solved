function findSafestPath(dream: number[][]): number {
  if (dream.length === 0) return 0;

  const n = dream.length;
  const m = dream[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 && j === 0) continue;

      const fromTop = i > 0 ? dream[i - 1][j] : Number.MAX_SAFE_INTEGER;
      const fromLeft = j > 0 ? dream[i][j - 1] : Number.MAX_SAFE_INTEGER;

      dream[i][j] += Math.min(fromTop, fromLeft);
    }
  }

  return dream[n - 1][m - 1];
}

export { findSafestPath };
