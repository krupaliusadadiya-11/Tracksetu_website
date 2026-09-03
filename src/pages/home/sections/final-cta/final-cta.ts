import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/ui/button/button';
import { RevealDirective } from '../../../../shared/directives/reveal';

@Component({
  selector: 'app-final-cta-section',
  standalone: true,
  imports: [ButtonComponent, RevealDirective],
  templateUrl: './final-cta.html',
  styleUrl: './final-cta.css',
})
export class FinalCtaSection {}
