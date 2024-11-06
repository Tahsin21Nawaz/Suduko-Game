import React, { useState } from 'react';
import Grid from './Grid';
import { solveSudoku, validateGrid } from './Solver';
import './App.css';

const App = () => {
  const [grid, setGrid] = useState(Array(9).fill(Array(9).fill(0))); 
  const [message, setMessage] = useState('');

  const handleValidate = () => {
    const isValid = validateGrid(grid);
    setMessage(isValid ? 'Valid puzzle!' : 'Invalid puzzle.');
  };

  const handleSolve = () => {
    const solution = solveSudoku(grid);
    if (solution) {
      setGrid(solution);
      setMessage('Puzzle solved!');
    } else {
      setMessage('No solution found.');
    }
  };

  const handleReset = () => {
    setGrid(Array(9).fill(Array(9).fill(0)));
    setMessage('');
  };

  return (
    <div className="app-container">
      <h1>Sudoku Solver</h1>
      <p>Enter values and solve your Sudoku puzzle</p>
      <Grid grid={grid} setGrid={setGrid} />
      <div className="button-group">
        <button onClick={handleValidate}>Validate</button>
        <button onClick={handleSolve}>Solve</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default App;
