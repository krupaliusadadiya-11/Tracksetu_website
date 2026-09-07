import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonComponent } from '../../shared/ui/button/button';
import { INDUSTRY_CONTENT, INDUSTRY_SLUGS } from '../../pages/industry/industry-data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, ButtonComponent],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {
  protected readonly menuOpen = signal(false);
  protected readonly industriesOpen = signal(false);

  protected readonly industries = INDUSTRY_SLUGS.map((slug) => ({
    slug,
    label: INDUSTRY_CONTENT[slug].navLabel,
    image: INDUSTRY_CONTENT[slug].navImage,
  }));

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
    this.industriesOpen.set(false);
  }

  toggleIndustries(): void {
    this.industriesOpen.update((open) => !open);
  }
}
