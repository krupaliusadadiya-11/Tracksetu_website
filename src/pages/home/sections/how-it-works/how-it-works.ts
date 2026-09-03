import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeadingComponent } from '../../../../shared/ui/section-heading/section-heading';
import { RevealDirective } from '../../../../shared/directives/reveal';

interface WorkflowStep {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-how-it-works-section',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, RevealDirective],
  templateUrl: './how-it-works.html',
  styleUrl: './how-it-works.css',
})
export class HowItWorksSection {
  protected readonly steps: WorkflowStep[] = [
    {
      number: '01',
      title: 'Quotation',
      description: 'Scan products, select quantity and discount, generate PDF and send to customer.',
    },
    {
      number: '02',
      title: 'Customer Acceptance',
      description: 'Customer reviews and accepts the quotation.',
    },
    {
      number: '03',
      title: 'Order',
      description: 'Convert the accepted quotation into an order and record advance payment.',
    },
    {
      number: '04',
      title: 'Stock Requirement',
      description: 'Identify the products required for the order.',
    },
    {
      number: '05',
      title: 'Purchase Order',
      description: 'If required stock is unavailable, generate a purchase order based on the selected customer order.',
    },
    {
      number: '06',
      title: 'Supplier Delivery',
      description: 'Send the requirement to the supplier and receive the products.',
    },
    {
      number: '07',
      title: 'Stock Update',
      description: 'Update stock after purchased goods are received.',
    },
    {
      number: '08',
      title: 'Customer Delivery',
      description: 'Continue the delivery process for the customer order.',
    },
    {
      number: '09',
      title: 'Payment & Outstanding',
      description: 'Record customer payments and keep outstanding amounts visible.',
    },
    {
      number: '10',
      title: 'Reports',
      description: 'View Day Book, Sales, Stock, Outstanding and Purchase reports.',
    },
  ];
}
