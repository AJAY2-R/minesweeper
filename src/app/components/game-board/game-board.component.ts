import { Component } from '@angular/core';
import { CellComponent } from '../cell/cell.component';
import { Cell, DIRECTIONS, Gird } from '../../models/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'game-board',
  standalone: true,
  imports: [CellComponent, CommonModule],
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.scss'
})
export class GameBoardComponent {
  grid: Gird = []
  rows: number = 6;
  cols: number = 6;
  directions = DIRECTIONS;
  constructor() {
    this.initilize();
  }

  private initilize() {
    this.intitilizeBoard();
    this.placeMines(6);
    this.calculateNeighboringMines();
  }

  private intitilizeBoard() {
    for (let i = 0; i < this.rows; i++) {
      const cells: Cell[] = []
      for (let j = 0; j < this.cols; j++) {
        cells.push({
          isFlagged: false,
          isRevealed: false,
          hasMine: false,
          neghborMines: 0
        })
      }
      this.grid[i] = cells;
    }
  }

  private placeMines(mineCount: number): void {
    let minesPlaced = 0;
    while (minesPlaced < mineCount) {
      const row = Math.floor(Math.random() * this.rows);
      const col = Math.floor(Math.random() * this.cols);
      this.grid[row][col].hasMine = true;
      minesPlaced++;
    }
  }

  private calculateNeighboringMines(): void {
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        if (this.grid[row][col].hasMine)
          continue;
        else {
          let mineCount = 0;
          for (const [dx, dy] of this.directions) {
            const neighborRow = dx + row;
            const neighborCol = dy + col;
            if (neighborRow >= 0 && neighborRow < this.rows && neighborCol >= 0 &&
              neighborCol < this.cols && this.grid[neighborRow][neighborCol].hasMine) {
              mineCount++;
            }
            this.grid[row][col].neghborMines = mineCount;
          }
        }
      }
    }
  }

  public revealCell(row: number, col: number): void {
    if (row < 0 || row >= this.rows || col < 0 || col >= this.cols || this.grid[row][col].isRevealed ||
      this.grid[row][col].isFlagged) {
      return;
    }
    this.grid[row][col].isRevealed = true;
    if (this.grid[row][col].hasMine) {
      console.log("Game Over!");
      return;
    }

    if (this.grid[row][col].neghborMines === 0) {
      for (const [dx, dy] of this.directions) {
        this.revealCell(row + dx, col + dy);
      }
    }
  }
  
}