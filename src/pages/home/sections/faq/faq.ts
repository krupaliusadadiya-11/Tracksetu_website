import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeadingComponent } from '../../../../shared/ui/section-heading/section-heading';
import { RevealDirective } from '../../../../shared/directives/reveal';
import { ButtonComponent } from '../../../../shared/ui/button/button';
import { FAQS, FaqItem } from './faq-data';

interface FaqHighlight {
  title: string;
}

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, RevealDirective, ButtonComponent],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class FaqSection {
  protected activeIndex = 0;

  protected readonly highlights: FaqHighlight[] = [
    { title: 'Works on mobile, tablet & desktop' },
    { title: 'Data migration from Excel & Tally' },
    { title: 'Role-based user access' },
    { title: 'Managed backups included' },
  ];

  protected readonly faqs: FaqItem[] = FAQS;

  protected toggle(index: number): void {
    this.activeIndex = this.activeIndex === index ? -1 : index;
  }
}
