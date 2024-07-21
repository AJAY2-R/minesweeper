export type Cell = {
    hasMine: boolean;
    isRevealed: boolean;
    isFlagged: boolean;
    neghborMines: number;
}

export type Gird = Cell[][];

export const DIRECTIONS = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],         [0, 1],
    [1, -1], [1, 0], [1, 1]
];