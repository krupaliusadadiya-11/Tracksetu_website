import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevealDirective } from '../../shared/directives/reveal';
import { ButtonComponent } from '../../shared/ui/button/button';
import { BlogCardComponent } from '../../shared/ui/blog-card/blog-card';
import { FinalCtaSection } from '../home/sections/final-cta/final-cta';
import { BLOG_ARTICLES, BLOG_CATEGORIES, BlogCategory } from './blog-data';

type BlogFilter = 'All' | BlogCategory;

@Component({
  selector: 'app-blogs-page',
  standalone: true,
  imports: [CommonModule, RevealDirective, ButtonComponent, BlogCardComponent, FinalCtaSection],
  templateUrl: './blogs.html',
  styleUrl: './blogs.css',
})
export class BlogsPage {
  protected readonly articles = BLOG_ARTICLES;
  protected readonly categories: BlogFilter[] = ['All', ...BLOG_CATEGORIES];
  protected readonly activeCategory = signal<BlogFilter>('All');

  protected readonly filteredArticles = computed(() => {
    const category = this.activeCategory();
    return category === 'All'
      ? this.articles
      : this.articles.filter((article) => article.category === category);
  });

  protected setCategory(category: BlogFilter): void {
    this.activeCategory.set(category);
  }
}
