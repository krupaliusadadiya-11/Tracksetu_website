import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { RevealDirective } from '../../shared/directives/reveal';
import { ButtonComponent } from '../../shared/ui/button/button';
import { SectionHeadingComponent } from '../../shared/ui/section-heading/section-heading';
import { FinalCtaSection } from '../home/sections/final-cta/final-cta';
import { CASE_STUDIES, TESTIMONIALS } from './customer-story-data';

type StoryTab = 'testimonials' | 'case-studies';

@Component({
  selector: 'app-customer-stories-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RevealDirective,
    ButtonComponent,
    SectionHeadingComponent,
    FinalCtaSection,
  ],
  templateUrl: './customer-stories.html',
  styleUrl: './customer-stories.css',
})
export class CustomerStoriesPage {
  protected readonly caseStudies = CASE_STUDIES;
  protected readonly testimonials = TESTIMONIALS;
  protected readonly featuredSlug = CASE_STUDIES[0]?.slug ?? '';

  protected readonly activeTab = signal<StoryTab>('case-studies');

  protected setTab(tab: StoryTab): void {
    this.activeTab.set(tab);
  }
}
