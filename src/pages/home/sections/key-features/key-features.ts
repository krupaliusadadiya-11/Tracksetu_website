import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeadingComponent } from '../../../../shared/ui/section-heading/section-heading';
import { RevealDirective } from '../../../../shared/directives/reveal';

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
  icon: FeatureIcon;
  title: string;
  description: string;
}

@Component({
  selector: 'app-key-features-section',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, RevealDirective],
  templateUrl: './key-features.html',
  styleUrl: './key-features.css',
})
export class KeyFeaturesSection {
  protected readonly features: Feature[] = [
    {
      icon: 'quotation',
      title: 'Quotation Management',
      description: 'QR-based product selection, quantity and discount handling, PDF generation and customer sharing.',
    },
    {
      icon: 'order',
      title: 'Order Management',
      description: 'Convert accepted quotations into orders and record advance payments.',
    },
    {
      icon: 'purchase',
      title: 'Purchase Automation',
      description: 'Generate a purchase order from a customer order when additional stock is required.',
    },
    {
      icon: 'stock',
      title: 'Stock Management',
      description: 'Manage stock separately across shops and godowns and transfer stock between locations.',
    },
    {
      icon: 'alert',
      title: 'Stock Alerts',
      description: 'Receive alerts when stock falls below the required minimum level.',
    },
    {
      icon: 'delivery',
      title: 'Delivery Management',
      description: 'Continue customer fulfilment after required products become available.',
    },
    {
      icon: 'payment',
      title: 'Payments & Outstanding',
      description: 'Record advances and keep customer outstanding amounts visible.',
    },
    {
      icon: 'reports',
      title: 'Reports',
      description: 'Access Day Book, Sales, Stock, Outstanding and Purchase information.',
    },
  ];
}
