import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { RevealDirective } from '../../shared/directives/reveal';
import { ButtonComponent } from '../../shared/ui/button/button';

interface ContactDetail {
  icon: 'mail' | 'phone' | 'location' | 'clock';
  colorClass: 'icon-blue' | 'icon-green' | 'icon-orange' | 'icon-teal';
  label: string;
  lines: string[];
  link?: string;
  linkLabel?: string;
  /** When true, the link replaces the plain value text instead of appearing below it. */
  linkReplacesValue?: boolean;
}

const OFFICE_ADDRESS = 'G-20, Silver Business Point, VIP Circle to Utran Road, Mota Varachha, Surat, Gujarat 394105';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, RevealDirective, ButtonComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactPage {
  private readonly sanitizer = inject(DomSanitizer);

  protected readonly mapEmbedUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://www.google.com/maps?q=' + encodeURIComponent(OFFICE_ADDRESS) + '&output=embed',
  );

  protected readonly contactDetails: ContactDetail[] = [
    {
      icon: 'mail',
      colorClass: 'icon-blue',
      label: 'Email',
      lines: ['info@micropillartech.com'],
      link: 'mailto:info@micropillartech.com',
      linkLabel: 'info@micropillartech.com',
      linkReplacesValue: true,
    },
    {
      icon: 'phone',
      colorClass: 'icon-green',
      label: 'Call Us',
      lines: ['+91 79842 73653'],
      link: 'tel:+917984273653',
      linkLabel: '+91 79842 73653',
      linkReplacesValue: true,
    },
    {
      icon: 'location',
      colorClass: 'icon-orange',
      label: 'Office Address',
      lines: ['G-20, Silver Business Point,', 'VIP Circle to Utran Road,', 'Mota Varachha, Surat,', 'Gujarat 394105'],
      link: 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(OFFICE_ADDRESS),
      linkLabel: 'Get Directions',
    },
    {
      icon: 'clock',
      colorClass: 'icon-teal',
      label: 'Working Hours',
      lines: ['Monday – Saturday', '9:00 AM – 8:00 PM'],
    },
  ];

  protected scrollToContact(): void {
    document.getElementById('contact-details')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
