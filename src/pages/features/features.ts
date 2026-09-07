import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal';
import { FinalCtaSection } from '../home/sections/final-cta/final-cta';
import { ButtonComponent } from '../../shared/ui/button/button';

interface FeatureItem {
  id: string;
  number: string;
  title: string;
  heading: string;
  description: string;
  points: string[];
  images: string[];
}

export type MarqueeIcon =
  | 'quotation'
  | 'order'
  | 'purchase'
  | 'stock'
  | 'alert'
  | 'delivery'
  | 'payment'
  | 'customer'
  | 'product'
  | 'qr'
  | 'pdf'
  | 'sales'
  | 'dashboard'
  | 'discount';

export interface MarqueeItem {
  label: string;
  icon: MarqueeIcon;
}

/* Real TrackSetu features/workflows shown in the hero's background marquee. */
const MARQUEE_ROWS: MarqueeItem[][] = [
  [
    { label: 'Quotation', icon: 'quotation' },
    { label: 'Order Management', icon: 'order' },
    { label: 'Inventory Management', icon: 'stock' },
    { label: 'Payment Tracking', icon: 'payment' },
    { label: 'QR Code Scanning', icon: 'qr' },
    { label: 'Delivery Management', icon: 'delivery' },
  ],
  [
    { label: 'Purchase Management', icon: 'purchase' },
    { label: 'Stock Alerts', icon: 'alert' },
    { label: 'Customer Management', icon: 'customer' },
    { label: 'Product Management', icon: 'product' },
    { label: 'PDF Quotations', icon: 'pdf' },
    { label: 'Sales Tracking', icon: 'sales' },
  ],
  [
    { label: 'Payment Management', icon: 'payment' },
    { label: 'Low Stock Alerts', icon: 'alert' },
    { label: 'Delivery Tracking', icon: 'delivery' },
    { label: 'Business Dashboard', icon: 'dashboard' },
    { label: 'Discount Management', icon: 'discount' },
    { label: 'Purchase Tracking', icon: 'purchase' },
  ],
  [
    { label: 'Order Management', icon: 'order' },
    { label: 'Quotation', icon: 'quotation' },
    { label: 'Stock Management', icon: 'stock' },
    { label: 'Payment Tracking', icon: 'payment' },
    { label: 'Delivery Management', icon: 'delivery' },
    { label: 'Inventory Management', icon: 'stock' },
  ],
];

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [CommonModule, RevealDirective, FinalCtaSection, ButtonComponent],
  templateUrl: './features.html',
  styleUrl: './features.css',
})
export class FeaturesPage  {

  protected readonly features: FeatureItem[] = [

    {
        id: 'quotations',
      number: '01',
      title: 'Quotations',
      heading: 'Create Quotations Faster, Starting with a QR Scan',
      description:
        'Build quotations directly from products without repeatedly entering product information manually. TrackSetu keeps customer details, products, quantities and pricing together so your team can create and share quotations faster.',
      points: [
        'Scan a product QR code to add the product without manually searching or entering its code.',
        'Select quantities and apply discounts while preparing the quotation for the customer.',
        'Generate professional PDF quotations that can be printed or shared with customers.',
        'Control who can change product rates or apply discounts through user permissions.',
      ],
      images: [
        '/images/02-quotation-detail.png',
      ],
    },

    {
      id: 'orders',
      number: '02',
      title: 'Orders & Delivery',
      heading: 'Turn Accepted Quotations into Orders',
      description:
        'Once a customer accepts a quotation, the team can convert it into an order without recreating the same information. The order then becomes the starting point for payment, purchasing and fulfilment.',
      points: [
        'Convert an accepted quotation into an order while keeping the existing customer and product information.',
        'Record the customer advance payment at the time the order is created.',
        'Track what has been ordered, delivered and what is still pending.',
        'Fulfil customer orders from the required shop or godown while keeping stock connected to the transaction.',
      ],
      images: [
        '/images/03-order-detail.png',
        '/images/04-order-large.png',
      ],
    },

    {
       id: 'purchase',
      number: '03',
      title: 'Purchase & Suppliers',
      heading: 'Connect Customer Demand with Purchasing',
      description:
        'When a customer order requires products that are not available in stock, TrackSetu can connect that requirement to purchasing. This reduces duplicate data entry and keeps the purchase requirement linked to the customer order.',
      points: [
        'Generate a purchase requirement based on the selected customer order.',
        'Keep visibility of which customer requirement led to the purchase.',
        'Create and manage purchase orders for the products required from suppliers.',
        'Continue customer fulfilment once the required products have been received into stock.',
      ],
      images: [
        '/images/07-purchase-order.png',
      ],
    },

    {
      id: 'stock',
      number: '04',
      title: 'Stock Management',
      heading: 'Know What Is Available at Every Shop and Godown',
      description:
        'TrackSetu keeps inventory organized by location so businesses can see what is available at each shop or godown. Stock changes as business transactions are recorded, giving teams better visibility over inventory.',
      points: [
        'Keep shop and godown inventory separate instead of mixing everything into one stock figure.',
        'Update stock automatically as relevant sales, purchases, deliveries and other transactions are recorded.',
        'Transfer inventory between shops and godowns while keeping source and receiving locations visible.',
        'Identify low-stock products and plan replenishment before shortages affect operations.',
      ],
      images: [
        '/images/08-current-stock.png',
      ],
    },

    {
       id: 'payments',
      number: '05',
      title: 'Payments & Outstanding',
      heading: 'Keep Customer Payments and Outstanding Amounts Visible',
      description:
        'TrackSetu records customer payments alongside their orders so your team can see what has been received and what remains due. Customer account information stays connected to the underlying transactions.',
      points: [
        'Record customer advance payments at the time of order creation.',
        'See how much the customer has paid and what amount is still outstanding.',
        'Review customer payment activity through the related account and ledger.',
        'Keep payment information connected to the relevant business transactions.',
      ],
      images: [
        '/images/05-payments-list.png',
        '/images/09-customer-ledger.png',
        '/images/04-order-large.png',
      ],
    },

    {
        id: 'reports',
      number: '06',
      title: 'Reports',
      heading: 'Turn Daily Transactions into Business Visibility',
      description:
        'TrackSetu brings operational information into reports that help teams understand sales, stock, purchases and outstanding amounts across their business.',
      points: [
        'Review the Day Book across a selected date range.',
        'Understand sales and purchase activity through operational reports.',
        'Review stock information across business locations.',
        'Monitor customer outstanding amounts and payment-related information.',
        'View information according to the locations the user is authorized to access.',
      ],
      images: [
        '/images/06-day-book.png',
      ],
    },

    {
        id: 'staff-permissions',
      number: '07',
      title: 'Staff & Permissions',
      heading: 'Give Every User the Right Level of Access',
      description:
        'TrackSetu allows businesses to control what users can do and which business information they can see. Permissions help keep operational data accessible to the right people without giving every user complete system access.',
      points: [
        'Control access to different modules and system functions.',
        'Limit users to the shops or branches they are permitted to access.',
        'Manage user permissions and location access separately.',
        'Give authorized users visibility across multiple business locations.',
      ],
      images: [
        '/images/10-role-editor.png',
      ],
    },

    {
          id: 'multi-location',
      number: '08',
      title: 'Multi-Shop & Multi-Godown',
      heading: 'Manage Multiple Locations Without Losing Control',
      description:
        'TrackSetu is designed for businesses operating across multiple shops and godowns. Location-aware stock and access controls help teams manage individual locations while maintaining visibility across the wider business.',
      points: [
        'See inventory according to the shop or godown where it is held.',
        'Transfer products between shops and godowns while maintaining stock visibility.',
        'Give users access only to the locations relevant to their work.',
        'Allow authorized users to monitor operations across multiple locations from one system.',
      ],
      images: [
        '/images/08-current-stock.png',
        '/images/10-role-editor.png',
        '/images/06-day-book.png',
      ],
    },
  ];

  /* Each row's data is repeated 4x (an even count, required for the
     translateX(-50%) loop to land back on an identical repeated pattern)
     so the track is always wider than the viewport - otherwise, on wide
     screens, a 2x-repeated short row can run out of pills before the loop
     resets, showing a gap. */
  protected readonly marqueeRows: MarqueeItem[][] = MARQUEE_ROWS.map((row) => [
    ...row,
    ...row,
    ...row,
    ...row,
  ]);

  protected trackByNumber(
    _index: number,
    feature: FeatureItem
  ): string {
    return feature.number;
  }

  protected trackByImage(
    _index: number,
    image: string
  ): string {
    return image;
  }
}