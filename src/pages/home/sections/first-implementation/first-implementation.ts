import { Component } from '@angular/core';

import { RevealDirective } from '../../../../shared/directives/reveal';
import { ButtonComponent } from '../../../../shared/ui/button/button';

@Component({
  selector: 'app-first-implementation-section',
  standalone: true,
  imports: [RevealDirective, ButtonComponent],
  templateUrl: './first-implementation.html',
  styleUrl: './first-implementation.css',
})
export class FirstImplementationSection {}
