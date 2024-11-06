const isValid = (grid, row, col, num) => {
  for (let i = 0; i < 9; i++) {
    if (grid[row][i] === num || grid[i][col] === num) return false;
    const boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const boxCol = 3 * Math.floor(col / 3) + (i % 3);
    if (grid[boxRow][boxCol] === num) return false;
  }
  return true;
};

export const solveSudoku = (grid) => {
  const solve = (grid) => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (grid[row][col] === 0) {
          for (let num = 1; num <= 9; num++) {
            if (isValid(grid, row, col, num)) {
              grid[row][col] = num;
              if (solve(grid)) return grid;
              grid[row][col] = 0; 
            }
          }
          return false;
        }
      }
    }
    return true;
  };

  const copiedGrid = JSON.parse(JSON.stringify(grid));
  return solve(copiedGrid) ? copiedGrid : null;
};


export const validateGrid = (grid) => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const num = grid[row][col];
      if (num !== 0 && !isValid(grid, row, col, num)) {
        return false;
      }
    }
  }
  return true;
};
