import { Component, DestroyRef, ElementRef, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { RevealDirective } from '../../../shared/directives/reveal';
import { BlogCardComponent } from '../../../shared/ui/blog-card/blog-card';
import { FinalCtaSection } from '../../home/sections/final-cta/final-cta';
import { BlogArticle, getBlogArticleBySlug, getRelatedArticles } from '../blog-data';

interface TocItem {
  id: string;
  label: string;
}

@Component({
  selector: 'app-blog-detail-page',
  standalone: true,
  imports: [CommonModule, RevealDirective, BlogCardComponent, FinalCtaSection],
  templateUrl: './blog-detail.html',
  styleUrl: './blog-detail.css',
})
export class BlogDetailPage {
  private readonly elementRef: ElementRef<HTMLElement> = inject(ElementRef);
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);
  private observer?: IntersectionObserver;

  protected readonly article = signal<BlogArticle | undefined>(undefined);
  protected readonly relatedArticles = signal<BlogArticle[]>([]);
  protected readonly activeSectionId = signal<string>('');

  protected readonly tocItems = computed<TocItem[]>(() => {
    const post = this.article();
    if (!post) {
      return [];
    }

    return [
      { id: 'key-takeaway', label: 'Key Takeaway' },
      ...post.sections.map((section, index) => ({ id: `section-${index}`, label: section.heading })),
      { id: 'checklist', label: post.checklist.heading },
      { id: 'connection', label: post.trackSetuConnection.heading },
    ];
  });

  constructor(route: ActivatedRoute) {
    route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      const found = slug ? getBlogArticleBySlug(slug) : undefined;

      if (!found) {
        this.router.navigateByUrl('/blogs');
        return;
      }

      this.article.set(found);
      this.relatedArticles.set(getRelatedArticles(found));
      window.scrollTo({ top: 0 });
    });

    effect(() => {
      this.article();
      queueMicrotask(() => this.observeSections());
    });

    this.destroyRef.onDestroy(() => this.observer?.disconnect());
  }

  protected goToBlogs(): void {
    this.router.navigateByUrl('/blogs');
  }

  protected scrollToSection(id: string): void {
    this.elementRef.nativeElement
      .querySelector(`[data-toc-id="${id}"]`)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  private observeSections(): void {
    this.observer?.disconnect();

    const sections = Array.from(
      this.elementRef.nativeElement.querySelectorAll<HTMLElement>('[data-toc-id]'),
    );

    if (!sections.length) {
      return;
    }

    this.activeSectionId.set(sections[0].dataset['tocId'] ?? '');

    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          this.activeSectionId.set((visible[0].target as HTMLElement).dataset['tocId'] ?? '');
        }
      },
      { rootMargin: '-110px 0px -65% 0px', threshold: 0 },
    );

    sections.forEach((section) => this.observer?.observe(section));
  }
}

