import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-heading.html',
  styleUrl: './section-heading.css',
})
export class SectionHeadingComponent {
  @Input() eyebrow?: string;
  @Input() heading = '';
  @Input() supporting?: string;
  @Input() align: 'left' | 'center' = 'center';
}
