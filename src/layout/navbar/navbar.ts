import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonComponent } from '../../shared/ui/button/button';
import { INDUSTRY_CONTENT, INDUSTRY_SLUGS } from '../../pages/industry/industry-data';

interface ResourceLink {
  label: string;
  routerLink: string;
  icon: 'workflow' | 'help' | 'file' | 'users';
}

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
  protected readonly resourcesOpen = signal(false);

  private closeTimeout?: ReturnType<typeof setTimeout>;

  protected readonly industries = INDUSTRY_SLUGS.map((slug) => ({
    slug,
    label: INDUSTRY_CONTENT[slug].navLabel,
    image: INDUSTRY_CONTENT[slug].navImage,
  }));

  protected readonly resources: ResourceLink[] = [
    { label: 'How It Works', routerLink: '/how-it-works', icon: 'workflow' },
    { label: 'FAQs', routerLink: '/faq', icon: 'help' },
    { label: 'Blogs', routerLink: '/blogs', icon: 'file' },
    { label: 'Customer Stories', routerLink: '/customer-stories', icon: 'users' },
  ];

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
    this.industriesOpen.set(false);
    this.resourcesOpen.set(false);
  }

  toggleIndustries(): void {
    this.industriesOpen.update((open) => !open);
    this.resourcesOpen.set(false);
  }

  toggleResources(): void {
    this.resourcesOpen.update((open) => !open);
    this.industriesOpen.set(false);
  }

  openIndustries(): void {
    clearTimeout(this.closeTimeout);
    this.industriesOpen.set(true);
    this.resourcesOpen.set(false);
  }

  openResources(): void {
    clearTimeout(this.closeTimeout);
    this.resourcesOpen.set(true);
    this.industriesOpen.set(false);
  }

  scheduleCloseDropdowns(): void {
    clearTimeout(this.closeTimeout);
    this.closeTimeout = setTimeout(() => {
      this.industriesOpen.set(false);
      this.resourcesOpen.set(false);
    }, 150);
  }
}
