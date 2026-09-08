import { Routes } from '@angular/router';

import { LayoutComponent } from '../layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../pages/home/home').then((m) => m.HomePage),
        title: 'TrackSetu - One Connected System to Run Your Business Better',
      },

      {
        path: 'features',
        loadComponent: () =>
          import('../pages/features/features').then((m) => m.FeaturesPage),
        title: 'Features - TrackSetu',
      },

      {
        path: 'book-a-demo',
        loadComponent: () =>
          import('../pages/book-demo/book-demo').then(
            (m) => m.BookDemoPage
          ),
        title: 'Book a Demo - TrackSetu',
      },

      {
        path: 'industries/:slug',
        loadComponent: () =>
          import('../pages/industry/industry').then((m) => m.IndustryPage),
        title: 'Industries - TrackSetu',
      },

      {
        path: 'how-it-works',
        loadComponent: () =>
          import('../pages/how-it-works/how-it-works').then(
            (m) => m.HowItWorksPage
          ),
        title: 'How It Works - TrackSetu',
      },

      {
        path: 'faq',
        loadComponent: () =>
          import('../pages/faq/faq').then((m) => m.FaqPage),
        title: 'FAQs - TrackSetu',
      },

      {
        path: 'blogs',
        loadComponent: () =>
          import('../pages/blogs/blogs').then((m) => m.BlogsPage),
        title: 'Blog - TrackSetu',
      },

      {
        path: 'blogs/:slug',
        loadComponent: () =>
          import('../pages/blogs/blog-detail/blog-detail').then(
            (m) => m.BlogDetailPage
          ),
        title: 'Blog - TrackSetu',
      },

      {
        path: 'customer-stories',
        loadComponent: () =>
          import('../pages/customer-stories/customer-stories').then(
            (m) => m.CustomerStoriesPage
          ),
        title: 'Customer Stories - TrackSetu',
      },

      {
        path: 'pricing',
        loadComponent: () =>
          import('../pages/pricing/pricing').then((m) => m.PricingPage),
        title: 'Pricing - TrackSetu',
      },

      {
        path: 'contact',
        loadComponent: () =>
          import('../pages/contact/contact').then((m) => m.ContactPage),
        title: 'Contact - TrackSetu',
      },

      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];