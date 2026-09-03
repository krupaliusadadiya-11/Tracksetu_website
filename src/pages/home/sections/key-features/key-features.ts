import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeadingComponent } from '../../../../shared/ui/section-heading/section-heading';
import { RevealDirective } from '../../../../shared/directives/reveal';
import { RouterLink } from '@angular/router';
type FeatureIcon =
  | 'quotation'
  | 'order'
  | 'purchase'
  | 'stock'
  | 'alert'
  | 'delivery'
  | 'payment'
  | 'reports';

interface Feature {
   featureId: string;
  icon: FeatureIcon;
  title: string;
  description: string;
}

@Component({
  selector: 'app-key-features-section',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, RevealDirective,   RouterLink,],
  templateUrl: './key-features.html',
  styleUrl: './key-features.css',
})
export class KeyFeaturesSection {
 
  
  protected readonly features: Feature[] = [
  {
    featureId: 'quotations',
    icon: 'quotation',
    title: 'Quotation Management',
    description:
      'Create quotations faster with QR-based product selection, quantity and discount handling, PDF generation and customer sharing.',
  },

  {
    featureId: 'orders',
    icon: 'order',
    title: 'Orders & Delivery',
    description:
      'Convert accepted quotations into orders, record advances and fulfil customer orders from the required shop or godown.',
  },

  {
    featureId: 'purchase',
    icon: 'purchase',
    title: 'Purchase & Suppliers',
    description:
      'Connect customer orders with purchasing, generate purchase orders for required products and track supplier requirements.',
  },

  {
    featureId: 'stock',
    icon: 'stock',
    title: 'Stock Management',
    description:
      'Track inventory separately across shops and godowns, transfer stock between locations and keep stock levels updated.',
  },

  {
    featureId: 'payments',
    icon: 'payment',
    title: 'Payments & Outstanding',
    description:
      'Record customer payments, track advances and keep outstanding amounts visible through connected account and ledger information.',
  },

  {
    featureId: 'reports',
    icon: 'reports',
    title: 'Reports',
    description:
      'Review Day Book, sales, purchase, stock and outstanding information across the locations users are authorized to access.',
  },

  {
    featureId: 'staff-permissions',
    icon: 'alert',
    title: 'Staff & Permissions',
    description:
      'Control what each user can access and which shops or branches they can work with based on their responsibilities.',
  },

  {
    featureId: 'multi-location',
    icon: 'stock',
    title: 'Multi-Shop & Multi-Godown',
    description:
      'Manage inventory across multiple shops and godowns while controlling location access and maintaining business-wide visibility.',
  },
];

}
