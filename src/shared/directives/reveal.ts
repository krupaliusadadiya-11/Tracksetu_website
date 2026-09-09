import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

/**
 * Elements already inside the viewport at page load (most commonly the
 * section right after a hero, on shorter screens) would otherwise fire
 * their reveal in the same instant as the hero's own load-time sequence,
 * making everything animate at once instead of the hero finishing first.
 * Elements found via a genuine later scroll are unaffected, since by then
 * more time than this has already elapsed and the wait below resolves to 0.
 */
const MIN_INITIAL_REVEAL_DELAY = 500;

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit, OnDestroy {
  @Input() revealDelay = 0;

  private observer?: IntersectionObserver;
  private revealTimeout?: ReturnType<typeof setTimeout>;

  constructor(private readonly el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const element = this.el.nativeElement;
    element.classList.add('reveal');
    const initTime = performance.now();

    if (this.revealDelay) {
      element.style.transitionDelay = `${this.revealDelay}ms`;
      // Also exposed as a custom property so animation-based reveals (which
      // ignore transition-delay) can offset themselves by the same amount,
      // e.g. `animation-delay: calc(150ms + var(--reveal-delay, 0ms))`.
      element.style.setProperty('--reveal-delay', `${this.revealDelay}ms`);
    }

    if (!('IntersectionObserver' in window)) {
      element.classList.add('reveal-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.observer?.unobserve(element);

            const wait = Math.max(0, MIN_INITIAL_REVEAL_DELAY - (performance.now() - initTime));
            this.revealTimeout = setTimeout(() => {
              element.classList.add('reveal-visible');
            }, wait);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -64px 0px' },
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    clearTimeout(this.revealTimeout);
  }
}
