import { Component, Input } from '@angular/core';

@Component({
    selector: 'svg-java',
    standalone: true,
    template: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 346" [attr.width]="size.width" [attr.height]="size.height" class="icon">
      <path d="M83 267s-14 8 9 11c27 3 41 2 71-3 0 0 8 5 19 9-67 29-153-2-99-17M74 230s-15 11 8 13c29 3 52 3 92-4 0 0 6 5 15 8-82 24-173 2-115-17" fill="#5382A1"/>
      <path d="M144 166c17 19-4 36-4 36s42-22 22-49c-18-26-32-38 44-82 0 0-119 29-62 95" fill="#E76F00"/>
    </svg>
  `,
    styles: [`
    .icon { transition: filter 0.3s ease-in-out, opacity 0.3s ease-in-out; filter: grayscale(100%); opacity: 0.7; }
    .icon:hover { filter: grayscale(0%); opacity: 1; transform: scale(1.1); }
  `]
})
export class JavaComponent {
    @Input() size: { width: number; height: number } = { width: 80, height: 80 };
}
