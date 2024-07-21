import { Component, input, output } from '@angular/core';
import { Cell } from '../../models/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cell.component.html',
  styleUrl: './cell.component.scss'
})
export class CellComponent {
  cell = input.required<Cell>();
  cellChange = output<Cell>();

  onCellClicked() {
    this.cellChange.emit(this.cell());
  }
  onCellFlaged(event:MouseEvent){
    this.cell().isFlagged= !this.cell().isFlagged;
    event.preventDefault();
  }
}
