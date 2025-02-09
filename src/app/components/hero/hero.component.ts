import { Component } from '@angular/core';
import { AngularComponent } from "../../icons/angular.component";
import { CsharpComponent } from "../../icons/csharp.component";
import { ViteComponent } from "../../icons/vite.component";
import { JavaComponent } from "../../icons/java.component";

@Component({
  selector: 'app-hero',
  imports: [AngularComponent, CsharpComponent, ViteComponent, JavaComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  scrollToNextSection() {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }
}
