import { Component, output } from '@angular/core';

@Component({
  selector: 'timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent {
  timer: number = 0;
  timerId!: NodeJS.Timeout;
  timeOutWarning = output<boolean>();
  startTimer() {
    this.timerId = setInterval(() => {
      this.timer++;
      if (this.timer === 999) {
        this.timeOutWarning.emit(true);
        this.stopTimer();
      }
    }, 1000)
  }

  stopTimer() {
    clearInterval(this.timerId);
  }

  resetTimer() {
    this.stopTimer();
    this.timer = 0;
  }
}
