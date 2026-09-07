import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

import { NavbarComponent } from './navbar/navbar';
import { FooterComponent } from './footer/footer';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <app-navbar></app-navbar>

    <main>
      <router-outlet></router-outlet>
    </main>

    <app-footer *ngIf="showFooter()"></app-footer>
  `,
})
export class LayoutComponent {
  protected readonly showFooter = signal(true);

  constructor(private readonly router: Router) {
    this.showFooter.set(!this.router.url.startsWith('/book-a-demo'));

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.showFooter.set(!(event as NavigationEnd).urlAfterRedirects.startsWith('/book-a-demo'));
      });
  }
}
