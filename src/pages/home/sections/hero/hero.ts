import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/ui/button/button';



@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [ButtonComponent, ],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class HeroSection {}
