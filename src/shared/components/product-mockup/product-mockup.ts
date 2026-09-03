import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ProductMockupVariant = 'dashboard' | 'quotation' | 'locations';

@Component({
  selector: 'app-product-mockup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-mockup.html',
  styleUrl: './product-mockup.css',
})
export class ProductMockupComponent {
  @Input() variant: ProductMockupVariant = 'dashboard';
}
