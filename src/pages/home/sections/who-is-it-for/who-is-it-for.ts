import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeadingComponent } from '../../../../shared/ui/section-heading/section-heading';
import { RevealDirective } from '../../../../shared/directives/reveal';

type IndustryIcon = 'tiles' | 'sanitary' | 'hardware' | 'wholesale';

interface Industry {
  icon: IndustryIcon;
  name: string;
  description: string;
}

@Component({
  selector: 'app-who-is-it-for-section',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, RevealDirective],
  templateUrl: './who-is-it-for.html',
  styleUrl: './who-is-it-for.css',
})
export class WhoIsItForSection {
  protected readonly industries: Industry[] = [
    {
      icon: 'tiles',
      name: 'Tiles',
      description: 'Manage quotations, customer orders, purchasing and stock.',
    },
    {
      icon: 'sanitary',
      name: 'Sanitary',
      description: 'Connect sales, purchasing, inventory and delivery operations.',
    },
    {
      icon: 'hardware',
      name: 'Hardware',
      description: 'Manage products, customer orders, stock and purchasing requirements.',
    },
    {
      icon: 'wholesale',
      name: 'Wholesale',
      description: 'Handle customer orders, purchasing requirements, inventory and multi-location operations.',
    },
  ];
}
