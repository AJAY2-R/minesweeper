import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, viewChild } from '@angular/core';

@Component({
  selector: 'popup-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {
  popupContainer = viewChild.required<ElementRef<HTMLDivElement>>('popupContainer');
  constructor() { }
  @HostListener("document:click", ['$event'])
  closePopup(event: MouseEvent) {
    if (!this.isInside(event)) {
      
    }
  }
  isInside(event: MouseEvent) {
    return this.popupContainer().nativeElement.contains(event.target as Node) || event.target === this.popupContainer().nativeElement
  }
}
