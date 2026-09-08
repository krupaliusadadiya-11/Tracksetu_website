import { Component } from '@angular/core';

import { FaqSection } from '../home/sections/faq/faq';

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [FaqSection],
  templateUrl: './faq.html',
})
export class FaqPage {}
