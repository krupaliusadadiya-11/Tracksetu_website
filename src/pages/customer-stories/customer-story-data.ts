export interface Testimonial {
  name: string;
  company: string;
  role?: string;
  industry: string;
  quote: string;
  image?: string;
  logo?: string;
}

export interface CaseStudyWorkflowItem {
  number: string;
  title: string;
}

export interface CaseStudyOutcome {
  title: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  businessNeed: string;
  workflows: CaseStudyWorkflowItem[];
  approachFlow: string[];
  outcomes: CaseStudyOutcome[];
  testimonial: Testimonial | null;
}

/**
 * Real testimonial provided by the SAGA CERA team - do not edit the wording,
 * and never add another entry here without an equally verified quote.
 */
const SAGA_CERA_TESTIMONIAL: Testimonial = {
  name: 'SAGA CERA Team',
  company: 'SAGA CERA',
  industry: 'Tiles & Sanitary',
  quote:
    'TrackSetu is helping us bring our day-to-day business workflows into one connected system. The approach has been practical, flexible, and aligned with the way our business actually works.',
};

/**
 * SAGA CERA is TrackSetu's first real client / first implementation.
 * Only verified information appears here - no invented metrics, locations,
 * user counts or testimonial content. As future clients are onboarded,
 * add their entries here; the customer-stories page and case-study detail
 * page both render entirely from this data.
 */
export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'saga-cera',
    client: 'SAGA CERA',
    industry: 'Tiles & Sanitary',
    title: 'Building a connected operational system for a tile business',
    description:
      "Explore how TrackSetu's first implementation was shaped around the operational requirements of SAGA CERA.",
    image: '/images/industry/tile_shop.jpg',
    imageAlt: 'SAGA CERA tile and sanitary showroom',
    businessNeed:
      'Managing day-to-day tile business operations requires multiple connected workflows, from quotations and orders to inventory, purchasing and payments. TrackSetu was developed to bring these operational activities into a centralized system.',
    workflows: [
      { number: '01', title: 'Quotations' },
      { number: '02', title: 'Orders' },
      { number: '03', title: 'Inventory' },
      { number: '04', title: 'Purchasing' },
      { number: '05', title: 'Payments' },
    ],
    approachFlow: ['Quotation', 'Order', 'Inventory', 'Purchasing', 'Payment'],
    outcomes: [
      { title: 'Connected workflows' },
      { title: 'Centralized information' },
      { title: 'Better operational visibility' },
      { title: 'Reduced repeated data entry' },
      { title: 'More structured business processes' },
    ],
    testimonial: SAGA_CERA_TESTIMONIAL,
  },
];

export const TESTIMONIALS: Testimonial[] = [SAGA_CERA_TESTIMONIAL];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((story) => story.slug === slug);
}

export function getStoryIndustries(): string[] {
  return Array.from(new Set(CASE_STUDIES.map((story) => story.industry)));
}
