import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeadingComponent } from '../../../../shared/ui/section-heading/section-heading';
import { RevealDirective } from '../../../../shared/directives/reveal';

interface ChallengeCard {
  number: string;
  title: string;
  challenge: string;
  solution: string;
  icon: 'quotation' | 'stock' | 'alert' | 'order';
}

@Component({
  selector: 'app-business-challenges-section',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, RevealDirective],
  templateUrl: './business-challenges.html',
  styleUrl: './business-challenges.css',
})
export class BusinessChallengesSection {
  protected readonly cards: ChallengeCard[] = [
    {
      number: '01',
      title: 'Faster Quotation Creation',
      challenge: 'Creating quotations can take time when products and details are entered manually.',
      solution:
        'Scan a product QR code, add the product automatically, select quantity and discount, generate a quotation PDF and send it to the customer.',
      icon: 'quotation',
    },
    {
      number: '02',
      title: 'Stock Across Multiple Locations',
      challenge: 'Stock spread across shops and godowns can make availability difficult to track.',
      solution:
        'Track stock separately for every shop or godown, transfer stock between locations and keep stock information updated through business transactions.',
      icon: 'stock',
    },
    {
      number: '03',
      title: 'Low Stock Visibility',
      challenge: 'Products can fall below the required quantity before the team notices.',
      solution: 'Set a minimum stock level and receive an alert when available quantity goes below it.',
      icon: 'alert',
    },
    {
      number: '04',
      title: 'Customer Orders That Need Additional Stock',
      challenge: 'A customer order may require products that are not currently available.',
      solution:
        'Generate a purchase order based on the selected customer order when additional stock is required.',
      icon: 'order',
    },
  ];
}
