import { Component, Input } from '@angular/core';

@Component({
    selector: 'svg-docker',
    standalone: true,
    template: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#008fe2" [attr.width]="size.width" [attr.height]="size.height" class="icon">
      <path d="M13.98 11.08h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19h-2.12a.18.18 0 0 0-.18.18v1.9c0 .1.08.18.18.18"/>
    </svg>
  `,
    styles: [`
    .icon { transition: filter 0.3s ease-in-out, opacity 0.3s ease-in-out; filter: grayscale(100%); opacity: 0.7; }
    .icon:hover { filter: grayscale(0%); opacity: 1; transform: scale(1.1); }
  `]
})
export class DockerComponent {
    @Input() size: { width: number; height: number } = { width: 80, height: 80 };
}
