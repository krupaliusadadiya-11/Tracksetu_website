import { Component } from '@angular/core';

import { RevealDirective } from '../../shared/directives/reveal';
import { ButtonComponent } from '../../shared/ui/button/button';

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [RevealDirective, ButtonComponent],
  templateUrl: './pricing.html',
  styleUrl: './pricing.css',
})
export class PricingPage {}
