export const determineCellSize = (fieldSize: number): number => {
    if (fieldSize === 3) return 50;
    if (fieldSize <= 10) return 40;
    if (fieldSize > 10 && fieldSize <= 55) return 25;
    return 7;
  };
  
export const toggleCellColor = (
    cells: boolean[],
    index: number,
    setCells: React.Dispatch<React.SetStateAction<boolean[]>>
): void => {
    const newCells = [...cells];
    newCells[index] = !newCells[index];
    setCells(newCells);
};