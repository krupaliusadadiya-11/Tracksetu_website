import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../../../shared/directives/reveal';

interface EnvironmentPoint {
  title: string;
}

@Component({
  selector: 'app-client-environment-section',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './client-environment.html',
  styleUrl: './client-environment.css',
})
export class ClientEnvironmentSection {
  protected readonly points: EnvironmentPoint[] = [
    { title: 'Client-specific environment' },
    { title: 'Own database' },
    { title: 'Business-specific data' },
    { title: 'User creation and access setup' },
    { title: 'Technical setup and support as applicable' },
  ];
}
