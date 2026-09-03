import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionHeadingComponent } from '../../../../shared/ui/section-heading/section-heading';
import { RevealDirective } from '../../../../shared/directives/reveal';

interface WorkflowStep {
  number: string;
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-how-it-works-section',
  standalone: true,
  imports: [
    CommonModule,
    SectionHeadingComponent,
    RevealDirective,
  ],
  templateUrl: './how-it-works.html',
  styleUrl: './how-it-works.css',
})
export class HowItWorksSection {

  protected readonly steps: WorkflowStep[] = [
    {
      number: '01',
      title: 'Quotation',
      description:
        'Scan the product QR code, automatically add the product, select quantity and discount, generate a PDF quotation and share it with the customer.',
      image: '/images/workflow/step1_quotation.jpg',
    },

    {
      number: '02',
      title: 'Order',
      description:
        'Once the customer accepts the quotation, convert it into an order and record the advance payment at the time of order creation.',
      image: '/images/workflow/step1_order.png',
    },

    {
      number: '03',
      title: 'Purchase',
      description:
        'When an order requires items that are not available in stock, TrackSetu can automatically generate the purchase order based on the selected order. The client can then place the requirement with the supplier.',
      image: '/images/workflow/step3_purchase.jpg',
    },

    {
      number: '04',
      title: 'Delivery',
      description:
        'After the required stock is received, the goods can be delivered to the customer. Stock is updated as business transactions are completed.',
      image: '/images/workflow/step4_delivery.jpg',
    },

    {
      number: '05',
      title: 'Payment',
      description:
        'Record customer payments and keep outstanding amounts visible so your team can track what is still due.',
      image: '/images/workflow/step5_payment.jpg',
    },

    {
      number: '06',
      title: 'Reports',
      description:
        'Use business reports such as Day Book, Sales, Stock, Outstanding and Purchase information to understand operations across locations.',
      image: '/images/workflow/step6_report.jpg',
    },
  ];

  protected activeIndex = 0;

  protected get activeStep(): WorkflowStep {
    return this.steps[this.activeIndex];
  }

  protected setActiveStep(index: number): void {
    if (index < 0 || index >= this.steps.length) {
      return;
    }

    this.activeIndex = index;
  }
}