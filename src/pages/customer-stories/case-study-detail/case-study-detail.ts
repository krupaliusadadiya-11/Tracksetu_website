import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { ButtonComponent } from '../../../shared/ui/button/button';
import { CaseStudy, getCaseStudyBySlug } from '../customer-story-data';

@Component({
  selector: 'app-case-study-detail-page',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './case-study-detail.html',
  styleUrl: './case-study-detail.css',
})
export class CaseStudyDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  protected story: CaseStudy | undefined;

  constructor() {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.story = getCaseStudyBySlug(slug);

    if (!this.story) {
      this.router.navigate(['/customer-stories']);
    }
  }
}
