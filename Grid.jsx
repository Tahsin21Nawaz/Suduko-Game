import React from 'react';

const Grid = ({ grid, setGrid }) => {
    const handleChange = (row, col, value) => {
        if (value === '' || (/^[1-9]$/.test(value))) {
            const updatedGrid = grid.map((r, rowIndex) =>
                r.map((cell, colIndex) =>
                    rowIndex === row && colIndex === col ? parseInt(value) || 0 : cell
                )
            );
            setGrid(updatedGrid);
        }
    };

    return (
        <div className="sudoku-grid">
            {grid.map((row, rowIndex) =>
                row.map((value, colIndex) => (
                    <input
                        key={`${rowIndex}-${colIndex}`}
                        type="text"
                        maxLength="1"
                        value={value === 0 ? '' : value}
                        onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
                        className="cell"
                    />
                ))
            )}
        </div>
    );
};

export default Grid;
