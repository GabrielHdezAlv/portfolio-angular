import { Component, Input } from '@angular/core';

@Component({
    selector: 'svg-typescript',
    standalone: true,
    template: `
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" [attr.width]="size.width" [attr.height]="size.height" class="icon">
      <path d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z" fill="#3178C6"/>
    </svg>
  `,
    styles: [`
    .icon { transition: filter 0.3s ease-in-out, opacity 0.3s ease-in-out; filter: grayscale(100%); opacity: 0.7; }
    .icon:hover { filter: grayscale(0%); opacity: 1; transform: scale(1.1); }
  `]
})
export class TypeScriptComponent {
    @Input() size: { width: number; height: number } = { width: 80, height: 80 };
}
