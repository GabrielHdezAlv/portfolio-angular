import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { AngularComponent } from '../../icons/angular.component';
import { CsharpComponent } from '../../icons/csharp.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-content',
  imports: [AngularComponent, CsharpComponent, CommonModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {
  @ViewChild('header1') header1!: ElementRef;
  @ViewChild('header2') header2!: ElementRef;

  swapped: boolean = false;  // Estado para saber si se intercambiaron

  experiences = [
    {
      company: "BeAmbassador",
      role: "Full Stack Developer",
      dates: "Jan 2024- Jan 2025",
      logo: "../../../assets/logos/be-ambassador-logo.png",
      link: "https://www.be-ambassador.com"
    },
    {
      company: "Plugcore",
      role: "Full Stack Developer",
      dates: "Oct 2023 - Dec 2023",
      logo: "../../../assets/logos/plugcore-logo.jpg",
      link: "https://www.be-ambassador.com"
    },
    {
      company: "TECH Universidad",
      role: "Full Stack Developer",
      dates: "Ago 2022 - Jun 2023",
      logo: "../../../assets/logos/tech-logo.webp",
      link: "https://www.be-ambassador.com"
    },
    {
      company: "Arte Consultores",
      role: "Full Stack Developer",
      dates: "Nov 2021 - Ago 2022",
      logo: "../../../assets/logos/arte-logo.png",
      link: "https://arte.dev/index-es.html"
    }
  ];

  educations = [
    {
      title: "Cybersecurity in information environments",
      center: "CIFP César Manrique",
      dates: "Oct 2023 - May 2024",
      logo: "../../../assets/logos/cybersecurity-logo.jpg",
    },
    {
      title: "Web application development",
      center: "CIFP César Manrique",
      dates: "Sept 2019 - Jun 2021",
      logo: "../../../assets/logos/daw-logo.png",
    },
    {
      title: "Microcomputer systems and networks",
      center: "CIFP César Manrique",
      dates: "Sept 2017 - Jun 2019",
      logo: "../../../assets/logos/sistemas-logo.png",
    }
  ];

  constructor(private renderer: Renderer2) { }

  swapColors() {
    if (!this.swapped) {
      this.renderer.setStyle(this.header1.nativeElement, 'color', '#808080'); // Gris
      this.renderer.setStyle(this.header2.nativeElement, 'color', '#fff'); // Azul
    } else {
      this.renderer.setStyle(this.header1.nativeElement, 'color', '#fff'); // Azul
      this.renderer.setStyle(this.header2.nativeElement, 'color', '#808080'); // Gris
    }

    this.swapped = !this.swapped; // Alterna el estado y activa la animación en el SCSS
  }
}
