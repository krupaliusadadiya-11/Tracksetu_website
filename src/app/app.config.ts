import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';

import {
  provideRouter,
  withInMemoryScrolling,
} from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),

    /*
     * anchorScrolling is intentionally left disabled: the router fires it
     * immediately on navigation, often before a lazy-loaded route's
     * *ngIf-gated content has actually painted, which produced a visible
     * double-jump (scroll to top, then a second correction once the DOM
     * settled). Pages with a fragment target instead scroll to it
     * themselves in ngAfterViewInit, once their view is guaranteed ready.
     */
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
      })
    ),
  ],
};