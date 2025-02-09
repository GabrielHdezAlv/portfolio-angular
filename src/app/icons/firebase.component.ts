import { Component, Input } from '@angular/core';

@Component({
    selector: 'svg-firebase',
    standalone: true,
    template: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" [attr.width]="size.width" [attr.height]="size.height" class="icon">
      <path fill="#FF9100" d="M213.918 560.499c23.248 9.357 48.469 14.909 74.952 15.834 35.84 1.252 69.922-6.158 100.391-20.234-36.537-14.355-69.627-35.348-97.869-61.448-18.306 29.31-45.382 52.462-77.474 65.848Z"/>
      <path fill="#FFC400" d="M291.389 494.66c-64.466-59.622-103.574-145.917-100.269-240.568.108-3.073.27-6.145.46-9.216a166.993 166.993 0 0 0-36.004-5.241 167.001 167.001 0 0 0-51.183 6.153c-17.21 30.145-27.594 64.733-28.888 101.781-3.339 95.611 54.522 179.154 138.409 212.939 32.093-13.387 59.168-36.51 77.475-65.848Z"/>
    </svg>
  `,
    styles: [`
    .icon { transition: filter 0.3s ease-in-out, opacity 0.3s ease-in-out; filter: grayscale(100%); opacity: 0.7; }
    .icon:hover { filter: grayscale(0%); opacity: 1; transform: scale(1.1); }
  `]
})
export class FirebaseComponent {
    @Input() size: { width: number; height: number } = { width: 80, height: 80 };
}
