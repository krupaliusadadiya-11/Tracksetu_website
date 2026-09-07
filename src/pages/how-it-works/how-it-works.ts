import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevealDirective } from '../../shared/directives/reveal';
import { ButtonComponent } from '../../shared/ui/button/button';
import { SectionHeadingComponent } from '../../shared/ui/section-heading/section-heading';

interface JourneyStage {
  number: string;
  title: string;
}

interface ChecklistItem {
  text: string;
}

interface DataPoint {
  title: string;
  description: string;
}

interface RequirementItem {
  text: string;
}

@Component({
  selector: 'app-how-it-works-page',
  standalone: true,
  imports: [CommonModule, RevealDirective, ButtonComponent, SectionHeadingComponent],
  templateUrl: './how-it-works.html',
  styleUrl: './how-it-works.css',
})
export class HowItWorksPage {
  protected readonly stages: JourneyStage[] = [
    { number: '01', title: 'Talk & Demo' },
    { number: '02', title: 'Setup' },
    { number: '03', title: 'Training' },
    { number: '04', title: 'Go Live' },
    { number: '05', title: 'Support' },
  ];

  protected readonly demoChecklist: ChecklistItem[] = [
    { text: 'Understand your business and how it operates' },
    { text: 'Understand your shops and godowns' },
    { text: 'Understand your products and daily workflow' },
    { text: 'Understand your users and the access they need' },
    { text: 'Walk through the TrackSetu features relevant to your business' },
  ];

  protected readonly setupChecklist: ChecklistItem[] = [
    { text: 'Server setup for your business' },
    { text: 'Business and shop configuration' },
    { text: 'Godown setup' },
    { text: 'Product setup' },
    { text: 'Opening stock entry' },
    { text: 'User accounts and permissions' },
    { text: 'Business settings relevant to your operations' },
  ];

  protected readonly trainingChecklist: ChecklistItem[] = [
    { text: 'Staff training on the relevant modules' },
    { text: 'Role-based usage for each team member' },
    { text: 'Guidance on daily workflow' },
    { text: 'Practical, hands-on walkthroughs' },
    { text: 'Support for questions during setup' },
  ];

  protected readonly goLiveChecklist: ChecklistItem[] = [
    { text: 'The system is configured and ready' },
    { text: 'Users are set up with the right access' },
    { text: 'Products and opening data are in place' },
    { text: 'Your staff understands the daily workflow' },
    { text: 'Your business starts using TrackSetu' },
  ];

  protected readonly supportChecklist: ChecklistItem[] = [
    { text: 'Ongoing assistance as your team uses the system' },
    { text: 'Help with questions as they come up' },
    { text: 'Support resolving issues' },
    { text: 'Guidance when you need it' },
  ];

  protected readonly dataPoints: DataPoint[] = [
    {
      title: 'Your Data, Your Business',
      description: 'Your business data belongs to you and stays tied to your own environment.',
    },
    {
      title: 'Access You Control',
      description: 'Role-based permissions decide which users can see and use which parts of the system.',
    },
    {
      title: 'Backups Are Handled',
      description: 'MicroPillar manages the backup process so your business data stays protected.',
    },
    {
      title: 'Activity Stays Visible',
      description: 'Day book and transaction history keep a record of business activity as it happens.',
    },
  ];

  protected readonly requirements: RequirementItem[] = [
    { text: 'Basic business details' },
    { text: 'Product information' },
    { text: 'Shop and godown details' },
    { text: 'Opening stock information' },
    { text: 'User details for your team' },
    { text: 'Existing data, if migration is needed' },
  ];
}
