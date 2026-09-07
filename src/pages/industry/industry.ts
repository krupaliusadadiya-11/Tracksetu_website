import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { RevealDirective } from '../../shared/directives/reveal';
import { ButtonComponent } from '../../shared/ui/button/button';
import { SectionHeadingComponent } from '../../shared/ui/section-heading/section-heading';
import { StepGalleryComponent } from '../../shared/ui/step-gallery/step-gallery';
import { MultiShopSection } from '../home/sections/multi-shop/multi-shop';

import { INDUSTRY_CONTENT, INDUSTRY_SLUGS, IndustryContent, IndustrySlug } from './industry-data';

@Component({
  selector: 'app-industry-page',
  standalone: true,
  imports: [
    CommonModule,
    RevealDirective,
    ButtonComponent,
    SectionHeadingComponent,
    StepGalleryComponent,
    MultiShopSection,
  ],
  templateUrl: './industry.html',
  styleUrl: './industry.css',
})
export class IndustryPage {
  protected readonly data = signal<IndustryContent>(INDUSTRY_CONTENT.tiles);

  constructor(route: ActivatedRoute, router: Router) {
    route.paramMap.subscribe((params) => {
      const slug = params.get('slug') as IndustrySlug | null;

      if (!slug || !INDUSTRY_SLUGS.includes(slug)) {
        router.navigateByUrl('/');
        return;
      }

      this.data.set(INDUSTRY_CONTENT[slug]);
    });
  }
}
