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
        title: 'TrackSetu — One Connected System to Run Your Business Better',
      },

      {
        path: 'features',
        loadComponent: () =>
          import('../pages/features/features').then((m) => m.FeaturesPage),
        title: 'Features — TrackSetu',
      },

      {
        path: 'book-a-demo',
        loadComponent: () =>
          import('../pages/book-demo/book-demo').then(
            (m) => m.BookDemoPage
          ),
        title: 'Book a Demo — TrackSetu',
      },

      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];