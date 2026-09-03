import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../shared/ui/button/button';
import { RevealDirective } from '../../../../shared/directives/reveal';

@Component({
  selector: 'app-video-showcase-section',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RevealDirective],
  templateUrl: './video-showcase.html',
  styleUrl: './video-showcase.css',
})
export class VideoShowcaseSection {
  // Drop the walkthrough file at public/video/tracksetu-overview.mp4 and flip this to true.
  protected readonly videoAvailable = false;
  protected readonly videoSrc = 'video/tracksetu-overview.mp4';
}
