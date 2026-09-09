import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from '../../shared/ui/button/button';
import { FaqSection } from '../home/sections/faq/faq';

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [CommonModule, ButtonComponent, FaqSection],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class FaqPage {}
