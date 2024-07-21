import { Component, EventEmitter, input, output } from '@angular/core';
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
    this.cell().isRevealed = true;
    this.cellChange.emit(this.cell());
  }
}
