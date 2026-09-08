import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/directives/reveal';
import { INDUSTRY_CONTENT, INDUSTRY_SLUGS } from '../../pages/industry/industry-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealDirective],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent {
  protected readonly year = new Date().getFullYear();

  protected readonly industries = INDUSTRY_SLUGS.map((slug) => ({
    slug,
    label: INDUSTRY_CONTENT[slug].navLabel,
  }));

  protected readonly resources = [
    { label: 'How It Works', routerLink: '/how-it-works' },
    { label: 'FAQs', routerLink: '/faq' },
    { label: 'Blogs', routerLink: '/blogs' },
    { label: 'Customer Stories', routerLink: '/customer-stories' },
  ];
}
