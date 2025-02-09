import { Component, Input } from '@angular/core';

@Component({
    selector: 'svg-postgresql',
    standalone: true,
    template: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 264" [attr.width]="size.width" [attr.height]="size.height" class="icon">
      <path d="M255 158c-2-5-6-8-11-9l-8 1-14 2c12-20 22-43 27-65 9-34 5-50-1-57a77 77 0 0 0-62-30c-14 0-27 3-33 5l-19-2c-12 0-24 3-33 8L78 5c-23-3-42 0-55 9C7 26-1 46 0 74a342 342 0 0 0 28 97c7 14 14 22 23 24 5 2 13 3 22-4l5 4 9 3c11 3 22 2 31-1a643 643 0 0 1 0 10 109 109 0 0 0 5 33c1 4 4 11 9 16 6 6 13 8 20 8l9-1c10-2 21-6 29-17s11-27 12-53v-2l1-2 1 1h1c10 0 22-2 30-6 5-2 24-12 20-26" fill="#336791"/>
    </svg>
  `,
    styles: [`
    .icon {
      transition: filter 0.3s ease-in-out, opacity 0.3s ease-in-out;
      filter: grayscale(100%);
      opacity: 0.7;
    }
    
    .icon:hover {
      filter: grayscale(0%);
      opacity: 1;
      transform: scale(1.1);
    }
  `]
})
export class PostgreSQLComponent {
    @Input() size: { width: number; height: number } = { width: 80, height: 80 }; // Valor por defecto
}
