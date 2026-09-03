import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductMockupComponent } from '../../../../shared/components/product-mockup/product-mockup';
import { RevealDirective } from '../../../../shared/directives/reveal';

interface Capability {
  title: string;
}

@Component({
  selector: 'app-multi-shop-section',
  standalone: true,
  imports: [CommonModule, ProductMockupComponent, RevealDirective],
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
}
