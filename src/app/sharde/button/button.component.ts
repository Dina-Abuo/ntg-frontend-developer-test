import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, output } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'elm-button',
  imports: [CommonModule, TranslatePipe],
  template: `
    <button [type]="type()" [ngClass]="classes" (click)="clicked.emit()">
      {{ label() | translate }}
    </button>
  `,
})
export class ButtonComponent {
  variant = input<'primary' | 'outline'>('primary');
  type = input<'button' | 'submit'>('button');
  label = input<string>('');

  clicked = output<void>();

  get classes() {
    return {
      'elm-btn-primary': this.variant() === 'primary',
      'elm-btn-outline': this.variant() === 'outline',
    };
  }
}
