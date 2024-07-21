import { Component } from '@angular/core';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GameBoardComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'minesweeper';
}
