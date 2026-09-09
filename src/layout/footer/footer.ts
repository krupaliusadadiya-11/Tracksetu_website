import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/directives/reveal';
import { ButtonComponent } from '../../shared/ui/button/button';
import { INDUSTRY_CONTENT, INDUSTRY_SLUGS } from '../../pages/industry/industry-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealDirective, ButtonComponent],
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

  protected readonly showBackToTop = signal(false);

  @HostListener('window:scroll')
  protected onWindowScroll(): void {
    this.showBackToTop.set(window.scrollY > 480);
  }

  protected scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
