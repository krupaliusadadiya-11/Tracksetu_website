import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../shared/ui/button/button';
import { RevealDirective } from '../../../../shared/directives/reveal';

@Component({
  selector: 'app-final-cta-section',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RevealDirective],
  templateUrl: './final-cta.html',
  styleUrl: './final-cta.css',
})
export class FinalCtaSection {
  @Input() eyebrow = 'Get Started';
  @Input() heading = 'See What TrackSetu Can Do for Your Business';
  @Input() description =
    'Get a guided look at TrackSetu and see how it can fit your day-to-day business operations.';

  @Input() primaryLabel = 'Book a Demo';
  @Input() primaryLink = '/book-a-demo';
  @Input() primaryFragment?: string;

  @Input() secondaryLabel?: string;
  @Input() secondaryLink?: string;
  @Input() secondaryFragment?: string;
}
