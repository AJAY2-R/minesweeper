export type Cell = {
    hasMine: boolean;
    isRevealed: boolean;
    isFlagged: boolean;
    neghborMines: number;
}

export type Gird = Cell[][];

