import { Component } from '@angular/core';

import { RevealDirective } from '../../shared/directives/reveal';
import { ButtonComponent } from '../../shared/ui/button/button';

@Component({
  selector: 'app-customer-stories-page',
  standalone: true,
  imports: [RevealDirective, ButtonComponent],
  templateUrl: './customer-stories.html',
  styleUrl: './customer-stories.css',
})
export class CustomerStoriesPage {}
