import { Component, Input } from '@angular/core';

@Component({
    selector: 'svg-nodejs',
    standalone: true,
    template: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" [attr.width]="size.width" [attr.height]="size.height" class="icon">
      <path fill="#68A063" d="M128 0L0 74v108l128 74 128-74V74L128 0Zm62 178c-7 10-19 17-30 21-13 5-26 6-39 3-13-3-24-9-34-18-5-5-9-10-12-17-2-4 1-8 5-7 6 0 12 1 17 6 8 8 18 13 29 14 10 1 21 0 30-4 6-3 12-7 15-14 3-6 2-12 1-18l-67-1c-5 0-11-1-15-4-5-3-8-8-10-14-3-11 1-24 9-32 8-9 19-14 31-16 15-3 30-2 44 5 10 5 18 12 22 23 2 5 3 10 3 15 0 2-2 5-5 5H153c-1-5-3-9-7-12-5-3-11-4-16-3-6 0-12 2-16 6-5 5-7 12-5 18 2 7 9 11 16 11 16 1 32 0 48 1 5 0 10 0 14 3 6 3 10 9 11 16 2 12 0 24-7 34Z"/>
    </svg>
  `,
    styles: [`
    .icon { transition: filter 0.3s ease-in-out, opacity 0.3s ease-in-out; filter: grayscale(100%); opacity: 0.7; }
    .icon:hover { filter: grayscale(0%); opacity: 1; transform: scale(1.1); }
  `]
})
export class NodeJSComponent {
    @Input() size: { width: number; height: number } = { width: 80, height: 80 };
}
