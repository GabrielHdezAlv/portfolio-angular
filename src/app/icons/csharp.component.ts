import { Component, Input } from '@angular/core';

@Component({
  selector: 'svg-csharp',
  standalone: true,
  template: `
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      width="2222" 
      height="2500" 
      preserveAspectRatio="xMidYMid" 
      viewBox="0 -1.43 255.58 290.11" 
      [attr.width]="size.width" 
      [attr.height]="size.height"
      class="svg-icon"
    >
      <style>
        .svg-icon {
          filter: grayscale(100%);
          transition: filter 0.3s ease-in-out;
        }
        .svg-icon:hover {
          filter: grayscale(0%);
        }
      </style>
      <path fill="#a179dc" d="M255.57 84.45c0-4.83-1.04-9.1-3.13-12.76a24.4 24.4 0 0 0-9.24-9C209.17 43.05 175.1 23.5 141.1 3.86c-9.17-5.3-18.06-5.1-27.16.27-13.54 7.98-81.35 46.83-101.55 58.53C4.06 67.5.02 74.87 0 84.44v118.37c0 4.72 1 8.9 2.99 12.51 2.05 3.72 5.17 6.82 9.38 9.26 20.21 11.7 88.02 50.55 101.56 58.53 9.11 5.38 18 5.57 27.17.27 34.02-19.64 68.08-39.2 102.1-58.81a24.33 24.33 0 0 0 9.4-9.25c1.99-3.61 2.98-7.8 2.98-12.52l-.01-118.35"/>
      <path fill="#280068" d="M128.18 143.24 2.98 215.33c2.06 3.7 5.18 6.8 9.4 9.25 20.2 11.7 88.01 50.55 101.55 58.53 9.11 5.38 18 5.57 27.17.27 34.02-19.64 68.08-39.2 102.1-58.81a24.33 24.33 0 0 0 9.4-9.25z"/>
      <path fill="#390091" d="M255.57 84.45c0-4.83-1.04-9.1-3.13-12.76l-124.26 71.55 124.41 72.07c2-3.6 2.99-7.79 3-12.51 0 0 0-78.9-.02-118.35"/>
      <g fill="#fff">
        <path d="M201.9 116.3v13.47h13.47v-13.48h6.73v13.48h13.48v6.73H222.1v13.48h13.48v6.74H222.1v13.47h-6.73V156.7h-13.48v13.48h-6.73V156.7h-13.48v-6.73h13.47V136.5h-13.47v-6.74h13.47v-13.48zm13.47 20.2h-13.48v13.48h13.48z"/>
        <path d="M128.46 48.63a94.96 94.96 0 0 1 82.26 47.45l-.16-.27-41.35 23.8A47.28 47.28 0 0 0 129 96.33h-.54a47.3 47.3 0 0 0-47.3 47.3 47.08 47.08 0 0 0 6.23 23.47 47.28 47.28 0 0 0 82.29-.27l-.2.35 41.29 23.91a94.97 94.97 0 0 1-81.25 47.54h-1.06a94.96 94.96 0 0 1-95-95 95 95 0 0 1 95-95z"/>
      </g>
    </svg>
  `,
  styles: [`
    .icon { transition: filter 0.3s ease-in-out, opacity 0.3s ease-in-out; filter: grayscale(100%); opacity: 0.7; }
    .icon:hover { filter: grayscale(0%); opacity: 1; transform: scale(1.1); }
  `]
})
export class CsharpComponent {
  @Input() size: { width: number; height: number } = { width: 80, height: 80 };
}
