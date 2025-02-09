import { Component, Input } from '@angular/core';

@Component({
    selector: 'svg-html5',
    standalone: true,
    template: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520" [attr.width]="size.width" [attr.height]="size.height" class="icon">
      <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52"/>
      <path fill="#ef652a" d="M226 472l149-41 35-394H226"/>
      <path fill="#ecedee" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"/>
      <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"/>
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
export class Html5Component {
    @Input() size: { width: number; height: number } = { width: 80, height: 80 };
}
