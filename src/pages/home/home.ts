import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSection } from './sections/hero/hero';
import { BusinessChallengesSection } from './sections/business-challenges/business-challenges';
import { HowItWorksSection } from './sections/how-it-works/how-it-works';
import { KeyFeaturesSection } from './sections/key-features/key-features';
import { MultiShopSection } from './sections/multi-shop/multi-shop';
import { WhoIsItForSection } from './sections/who-is-it-for/who-is-it-for';
import { ClientEnvironmentSection } from './sections/client-environment/client-environment';
import { VideoShowcaseSection } from './sections/video-showcase/video-showcase';
import { FinalCtaSection } from './sections/final-cta/final-cta';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    HeroSection,
    BusinessChallengesSection,
    HowItWorksSection,
    KeyFeaturesSection,
    MultiShopSection,
    WhoIsItForSection,
    ClientEnvironmentSection,
    VideoShowcaseSection,
    FinalCtaSection,
  ],
  templateUrl: './home.html',
})
export class HomePage {
  /** Video not uploaded yet - flip to true once it's ready, don't remove the section. */
  protected readonly showVideoSection = false;
}
