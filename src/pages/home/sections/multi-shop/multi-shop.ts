import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../../../shared/directives/reveal';

interface Capability {
  title: string;
}

interface Location {
  id: string;
  name: string;
  stock: number;
  type: 'shop' | 'godown';
}

@Component({
  selector: 'app-multi-shop-section',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './multi-shop.html',
  styleUrl: './multi-shop.css',
})
export class MultiShopSection {
  protected readonly capabilities: Capability[] = [
    { title: 'Separate stock by location' },
    { title: 'Stock transfer between locations' },
    { title: 'Central visibility' },
    { title: 'User access based on selected locations' },
  ];

  protected readonly locations: Location[] = [
    { id: 'shop-a', name: 'Shop A', stock: 214, type: 'shop' },
    { id: 'shop-b', name: 'Shop B', stock: 168, type: 'shop' },
    { id: 'godown-1', name: 'Godown 1', stock: 960, type: 'godown' },
    { id: 'godown-2', name: 'Godown 2', stock: 512, type: 'godown' },
  ];
}
