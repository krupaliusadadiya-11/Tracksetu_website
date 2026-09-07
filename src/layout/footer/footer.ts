import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/directives/reveal';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealDirective],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent {
  protected readonly year = new Date().getFullYear();
}
