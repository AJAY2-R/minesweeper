import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, output, viewChild } from '@angular/core';

@Component({
  selector: 'popup-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {
}
