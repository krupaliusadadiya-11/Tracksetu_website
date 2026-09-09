import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevealDirective } from '../../shared/directives/reveal';
import { ButtonComponent } from '../../shared/ui/button/button';
import { SectionHeadingComponent } from '../../shared/ui/section-heading/section-heading';
import { FinalCtaSection } from '../home/sections/final-cta/final-cta';

type PricingFactorIcon = 'locations' | 'users' | 'modules' | 'infrastructure' | 'migration' | 'support';

interface PricingFactor {
  icon: PricingFactorIcon;
  title: string;
  description: string;
}

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [CommonModule, RevealDirective, ButtonComponent, SectionHeadingComponent, FinalCtaSection],
  templateUrl: './pricing.html',
  styleUrl: './pricing.css',
})
export class PricingPage {
  protected readonly factors: PricingFactor[] = [
    {
      icon: 'locations',
      title: 'Number of Locations',
      description:
        'Configure TrackSetu based on the number of shops, branches, and godowns you manage. A single-location setup may require a different configuration from a multi-branch operation.',
    },
    {
      icon: 'users',
      title: 'Users & Access',
      description:
        'Pricing depends on how many people use the system and the access levels required for owners, managers, sales staff, accountants, and other team members.',
    },
    {
      icon: 'modules',
      title: 'Modules Required',
      description:
        'Choose the modules relevant to your operations, from quotations and orders to inventory, purchasing, payments, and reporting.',
    },
    {
      icon: 'infrastructure',
      title: 'Deployment & Infrastructure',
      description:
        'Your setup may vary based on deployment preferences, server requirements, backup strategy, and infrastructure needs.',
    },
    {
      icon: 'migration',
      title: 'Data Setup & Migration',
      description:
        'If you already maintain business data in Excel, Tally, or another system, migration and initial data setup requirements can be considered during implementation.',
    },
    {
      icon: 'support',
      title: 'Training & Support',
      description:
        "Implementation can include user training, onboarding assistance, and ongoing support based on your team's requirements.",
    },
  ];
}
