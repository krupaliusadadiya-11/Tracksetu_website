import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface GalleryStep {
  number?: string;
  title: string;
  description?: string;
  image: string;
  alt?: string;
}

@Component({
  selector: 'app-step-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step-gallery.html',
  styleUrl: './step-gallery.css',
})
export class StepGalleryComponent {
  @Input() steps: GalleryStep[] = [];

  protected readonly activeIndex = signal(0);

  protected get active(): GalleryStep | undefined {
    return this.steps[this.activeIndex()];
  }

  protected setActive(index: number): void {
    this.activeIndex.set(index);
  }
}
