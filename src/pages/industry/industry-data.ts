import { GalleryStep } from '../../shared/ui/step-gallery/step-gallery';

export type IndustrySlug = 'tiles' | 'sanitary' | 'hardware' | 'wholesale';

export interface IndustryProblem {
  title: string;
  description: string;
}

export interface IndustrySolution {
  title: string;
  description: string;
}

export interface IndustryHighlightImage {
  src: string;
  alt: string;
  caption: string;
}

export interface IndustryHighlight {
  heading: string;
  description: string;
  images: IndustryHighlightImage[];
}

export type WhyIcon = 'link' | 'quotation' | 'purchase' | 'stock' | 'search' | 'payment' | 'barcode';

export interface IndustryWhyItem {
  title: string;
  description: string;
  icon: WhyIcon;
}

export interface IndustryContent {
  slug: IndustrySlug;
  navLabel: string;
  navImage: string;

  hero: {
    eyebrow: string;
    heading: string;
    description: string;
    industryImage: string;
    industryImageAlt: string;
  };

  problemsHeading: string;
  problems: IndustryProblem[];

  solutionsHeading: string;
  solutions: IndustrySolution[];

  workflowHeading: string;
  workflowFlow: string[];

  spotlightHeading: string;
  spotlightDescription: string;
  spotlightGallery: GalleryStep[];

  highlights: IndustryHighlight[];

  screenshotsHeading: string;
  screenshots: GalleryStep[];

  whyHeading: string;
  whyDescription: string;
  whyItems: IndustryWhyItem[];

  finalCta: {
    heading: string;
    description: string;
  };
}

const screenshots = (nounSingular: string): GalleryStep[] => [
  {
    number: '01',
    title: 'Dashboard',
    description: `A daily view of sales, low stock and pending payments across your ${nounSingular} business.`,
    image: '/images/01-dashboard.png',
    alt: 'TrackSetu dashboard',
  },
  {
    number: '02',
    title: 'Quotation',
    description: 'QR-based product selection with quantity, discount and PDF quotation generation.',
    image: '/images/02-quotation-detail.png',
    alt: 'TrackSetu quotation detail screen',
  },
  {
    number: '03',
    title: 'Order',
    description: 'Orders created from accepted quotations, with advance payment recorded at creation.',
    image: '/images/04-order-large.png',
    alt: 'TrackSetu order screen',
  },
  {
    number: '04',
    title: 'Purchase Order',
    description: 'Purchase orders generated from the customer order that needed the stock.',
    image: '/images/07-purchase-order.png',
    alt: 'TrackSetu purchase order screen',
  },
  {
    number: '05',
    title: 'Products',
    description: `Your ${nounSingular} product catalog, organized for fast selection during quotations and orders.`,
    image: '/images/11-products.png',
    alt: 'TrackSetu products screen',
  },
  {
    number: '06',
    title: 'Current Stock',
    description: 'Live stock quantities by location, kept separate across shops and godowns.',
    image: '/images/08-current-stock.png',
    alt: 'TrackSetu current stock screen',
  },
  {
    number: '07',
    title: 'Barcode',
    description: 'Barcode-based product identification used for quick selection and stock accuracy.',
    image: '/images/12-barcodes.png',
    alt: 'TrackSetu barcode screen',
  },
  {
    number: '08',
    title: 'Payments',
    description: 'Customer payments recorded against the relevant order, with outstanding balances tracked.',
    image: '/images/05-payments-list.png',
    alt: 'TrackSetu payments screen',
  },
  {
    number: '09',
    title: 'Customer Ledger',
    description: 'Each customer’s transaction history and outstanding balance in one place.',
    image: '/images/09-customer-ledger.png',
    alt: 'TrackSetu customer ledger screen',
  },
  {
    number: '10',
    title: 'Day Book',
    description: 'A daily record of business transactions across sales, purchases and payments.',
    image: '/images/06-day-book.png',
    alt: 'TrackSetu day book screen',
  },
  {
    number: '11',
    title: 'Role Editor',
    description: 'Control which modules and locations each user can access.',
    image: '/images/10-role-editor.png',
    alt: 'TrackSetu role editor screen',
  },
];

const finalCta: IndustryContent['finalCta'] = {
  heading: 'See How TrackSetu Fits Your Business',
  description:
    'Get a guided look at TrackSetu and see how quotations, orders, purchasing, stock, delivery and payments can work together for your business.',
};

export const INDUSTRY_CONTENT: Record<IndustrySlug, IndustryContent> = {
  tiles: {
    slug: 'tiles',
    navLabel: 'Tiles',
    navImage: '/images/industry/tile_shop.jpg',
    hero: {
      eyebrow: 'TrackSetu for Tile Businesses',
      heading: 'Built for the Way Tile Businesses Actually Work',
      description:
        'Manage tile products, quotations, orders and purchasing while keeping the details that matter to your business connected.',
      industryImage: '/images/industry/tile_shop.jpg',
      industryImageAlt: 'A tile showroom',
    },

    problemsHeading: 'Real Problems Tile Businesses Deal With',
    problems: [
      {
        title: 'Box vs Piece',
        description:
          'Tiles are often received in boxes, while a sale or project requirement may need to be tracked in individual pieces or quantities. TrackSetu keeps the product and quantity details you enter connected through the quotation and order process, so the same information carries through instead of being re-entered.',
      },
      {
        title: 'Design, Size & Finish',
        description:
          'Tile selection depends on details like design, size and finish, and customers often want to compare a few options before deciding. Organized product information helps your sales team quickly find and select the exact product being discussed.',
      },
      {
        title: 'Architect Requirements Need Clear Quotations',
        description:
          'Architects and customers often expect a clear quotation that lists the selected products, quantities, pricing and any discounts. TrackSetu supports generating a professional PDF quotation directly from the selected products.',
      },
    ],

    solutionsHeading: 'How TrackSetu Helps Tile Businesses',
    solutions: [
      {
        title: 'Keep Product and Quantity Details Connected',
        description: 'Once a product and its quantity are selected for a customer, that information carries through the quotation and order - no re-entry needed.',
      },
      {
        title: 'Find the Right Product Faster',
        description: 'Organized product information makes it easier for your team to identify the design, size and finish a customer is asking about.',
      },
      {
        title: 'Send a Professional Quotation in Minutes',
        description: 'Generate a clear PDF quotation showing the selected products, quantities, pricing and discounts - ready to share with architects or customers.',
      },
    ],

    workflowHeading: 'When a Tile Is Ordered but Not in Stock',
    workflowFlow: ['Customer Requirement', 'Quotation', 'Customer Order', 'Stock Check', 'Purchase Order', 'Stock', 'Fulfilment'],

    spotlightHeading: 'From Quotation to Purchase Order',
    spotlightDescription:
      'A quotation that turns into a customer order, and an order that can raise its own purchase requirement - the real TrackSetu screens behind that flow.',
    spotlightGallery: [
      {
        number: '01',
        title: 'Quotation',
        description: 'Select the tile products, sizes and finishes for the customer, then generate a professional PDF quotation.',
        image: '/images/02-quotation-detail.png',
        alt: 'TrackSetu quotation screen',
      },
      {
        number: '02',
        title: 'Order',
        description: 'Convert the accepted quotation into a customer order without re-entering product details.',
        image: '/images/04-order-large.png',
        alt: 'TrackSetu order screen',
      },
      {
        number: '03',
        title: 'Purchase Order',
        description: 'When the order needs tiles that are not in stock, generate a purchase order directly from that order.',
        image: '/images/07-purchase-order.png',
        alt: 'TrackSetu purchase order screen',
      },
    ],

    highlights: [
      {
        heading: 'Know Which Tile Stock Is Available and Where',
        description:
          'Before committing to a customer, check current stock, see stock by location where your business uses multiple shops or godowns, and transfer stock between locations. Low-stock visibility helps items that are running out stay noticed.',
        images: [{ src: '/images/08-current-stock.png', alt: 'TrackSetu current stock screen', caption: 'Current Stock' }],
      },
    ],

    screenshotsHeading: 'Real TrackSetu Application Screens',
    screenshots: screenshots('tile'),

    whyHeading: 'A Workflow That Understands the Tile Business',
    whyDescription:
      'TrackSetu connects tile product selection, quotations, customer orders, purchasing and stock visibility - so your team spends less time re-entering details and more time closing sales.',
    whyItems: [
      { title: 'Connected Product Selection', description: 'Product and quantity details carry through from quotation to order.', icon: 'link' },
      { title: 'Faster, Clearer Quotations', description: 'Generate professional PDF quotations ready for architects and customers.', icon: 'quotation' },
      { title: 'Order-Based Purchasing', description: 'Orders can generate their own purchase requirement when stock is short.', icon: 'purchase' },
      { title: 'Stock Visibility', description: 'See current stock by location before committing to a customer.', icon: 'stock' },
    ],

    finalCta,
  },

  sanitary: {
    slug: 'sanitary',
    navLabel: 'Sanitary',
    navImage: '/images/industry/sanitary_shop.jpg',
    hero: {
      eyebrow: 'TrackSetu for Sanitary Businesses',
      heading: 'Keep Your Sanitary Business and Customer Transactions Connected',
      description:
        'Manage products, customers, quotations, orders, invoices and payments from one connected business system.',
      industryImage: '/images/industry/sanitary_shop.jpg',
      industryImageAlt: 'A sanitaryware showroom',
    },

    problemsHeading: 'Real Problems Sanitary Businesses Deal With',
    problems: [
      {
        title: 'Finding the Right Product',
        description:
          'Sanitary businesses deal with many products and product categories. TrackSetu helps keep product information organized so the right item is easy to find and select during a sale.',
      },
      {
        title: 'Customer Requirements Change During Sales',
        description:
          'Customers may change product choices, quantities or pricing requirements while a sale is still being worked out. TrackSetu keeps customer, product, quantity and pricing information connected throughout the quotation and order process.',
      },
      {
        title: 'Customer Transactions Build Over Time',
        description:
          'A customer relationship can involve several quotations, orders, invoices and payments over time. TrackSetu provides connected visibility into a customer’s transaction history.',
      },
    ],

    solutionsHeading: 'How TrackSetu Helps Sanitary Businesses',
    solutions: [
      {
        title: 'Organized Product Information',
        description: 'Keep product categories and details organized so the sales team can find the right item quickly.',
      },
      {
        title: 'Quotations That Stay Accurate',
        description: 'Customer, product, quantity and pricing details stay connected as a sale is worked out and confirmed.',
      },
      {
        title: 'One Place for Every Customer',
        description: 'See a customer’s quotations, orders, payments and outstanding balance together.',
      },
    ],

    workflowHeading: 'From First Contact to Payment',
    workflowFlow: ['Customer', 'Products', 'Quotation', 'Order', 'Invoice', 'Payment', 'Customer Ledger'],

    spotlightHeading: 'From Customer to Confirmed Order',
    spotlightDescription:
      'See how a customer’s details and product selection turn into a quotation, then an order, with payments tracked against that customer over time.',
    spotlightGallery: [
      {
        number: '01',
        title: 'Customer & Quotation',
        description: 'Capture the customer’s details alongside the selected products and prepare a quotation.',
        image: '/images/02-quotation-detail.png',
        alt: 'TrackSetu quotation screen showing customer details',
      },
      {
        number: '02',
        title: 'Order',
        description: 'Convert the quotation into an order as the customer’s requirement is confirmed.',
        image: '/images/04-order-large.png',
        alt: 'TrackSetu order screen',
      },
      {
        number: '03',
        title: 'Ledger & Payment',
        description: 'Track the customer’s payments, outstanding balance and transaction history in one place.',
        image: '/images/09-customer-ledger.png',
        alt: 'TrackSetu customer ledger screen',
      },
    ],

    highlights: [
      {
        heading: 'Keep Customer Payments and Outstanding Amounts Visible',
        description:
          'Sanitary customer relationships build up over several quotations, orders and payments. TrackSetu keeps a customer’s payments, outstanding balance and transaction history visible in one place.',
        images: [
          { src: '/images/05-payments-list.png', alt: 'TrackSetu payments screen', caption: 'Payments' },
          { src: '/images/09-customer-ledger.png', alt: 'TrackSetu customer ledger screen', caption: 'Customer Ledger' },
        ],
      },
    ],

    screenshotsHeading: 'Real TrackSetu Application Screens',
    screenshots: screenshots('sanitary'),

    whyHeading: 'Give Your Team One Clear View of Every Customer',
    whyDescription:
      'TrackSetu keeps customer details, product selections, quotations, orders, invoices and payments connected in one clear view.',
    whyItems: [
      { title: 'Organized Product Information', description: 'Product categories and details stay easy to search and select.', icon: 'search' },
      { title: 'Faster Quotation Creation', description: 'Move from customer requirement to quotation without re-entering details.', icon: 'quotation' },
      { title: 'Connected Customer Transactions', description: 'Quotations, orders and invoices for a customer stay linked together.', icon: 'link' },
      { title: 'Payment & Outstanding Visibility', description: 'See what a customer has paid and what is still due, at a glance.', icon: 'payment' },
    ],

    finalCta,
  },

  hardware: {
    slug: 'hardware',
    navLabel: 'Hardware',
    navImage: '/images/industry/hardware_shop.jpg',
    hero: {
      eyebrow: 'TrackSetu for Hardware Businesses',
      heading: 'Find the Right Hardware Product. Check the Stock. Move the Order Forward.',
      description:
        'Keep products, barcodes, stock, quotations and orders connected so your team can work faster during everyday sales.',
      industryImage: '/images/industry/hardware_shop.jpg',
      industryImageAlt: 'A hardware store',
    },

    problemsHeading: 'Real Problems Hardware Businesses Deal With',
    problems: [
      {
        title: 'Large Product Range',
        description:
          'Hardware businesses can carry a large range of products across many categories. Organized product information helps the team find the required item faster instead of searching through registers or memory.',
      },
      {
        title: 'Product Identification',
        description:
          'Fast, accurate product identification matters at a busy counter. TrackSetu supports QR and barcode-based product selection so the right item is added quickly and correctly.',
      },
      {
        title: 'Stock Availability',
        description:
          'Knowing current stock before committing to a customer avoids promising items that aren’t actually available. TrackSetu shows current stock so the team can check before confirming a sale.',
      },
      {
        title: 'Low Stock',
        description:
          'Frequently sold hardware products can run low without anyone noticing until it’s a problem. TrackSetu supports low-stock visibility so these items are easier to catch in time.',
      },
    ],

    solutionsHeading: 'How TrackSetu Helps Hardware Businesses',
    solutions: [
      {
        title: 'Search Less, Sell Faster',
        description: 'Organized product information helps the team find the right item across a large catalog.',
      },
      {
        title: 'Scan Instead of Search',
        description: 'QR and barcode-based selection adds the right product quickly and accurately at the counter.',
      },
      {
        title: 'Know Before You Promise',
        description: 'Check current stock and catch low-stock items before confirming a sale to a customer.',
      },
    ],

    workflowHeading: 'Built for Speed at the Counter',
    workflowFlow: ['Product', 'QR / Barcode', 'Stock Check', 'Quotation', 'Order'],

    spotlightHeading: 'Products, Barcode & Stock - Together',
    spotlightDescription: 'Real TrackSetu screens for finding a product, identifying it by barcode, and checking stock before the sale is confirmed.',
    spotlightGallery: [
      {
        number: '01',
        title: 'Products',
        description: 'Keep the hardware product catalog organized so the team can find the right item quickly.',
        image: '/images/11-products.png',
        alt: 'TrackSetu products screen',
      },
      {
        number: '02',
        title: 'Barcode',
        description: 'Identify products quickly at the counter using barcode labels.',
        image: '/images/12-barcodes.png',
        alt: 'TrackSetu barcode screen',
      },
      {
        number: '03',
        title: 'Current Stock',
        description: 'Check current stock before confirming the sale to the customer.',
        image: '/images/08-current-stock.png',
        alt: 'TrackSetu current stock screen',
      },
    ],

    highlights: [
      {
        heading: 'Keep Products Easy to Find and Stock Easy to Check',
        description:
          'A large, fast-moving product range works best when products are organized, identifiable at the counter, and stock is visible before a sale is confirmed - including stock held across multiple locations where your business uses more than one shop or godown.',
        images: [
          { src: '/images/11-products.png', alt: 'TrackSetu products screen', caption: 'Products' },
          { src: '/images/12-barcodes.png', alt: 'TrackSetu barcode screen', caption: 'Barcode' },
          { src: '/images/08-current-stock.png', alt: 'TrackSetu current stock screen', caption: 'Current Stock' },
        ],
      },
    ],

    screenshotsHeading: 'Real TrackSetu Application Screens',
    screenshots: screenshots('hardware'),

    whyHeading: 'Less Searching. Better Stock Visibility. Faster Sales.',
    whyDescription:
      'Keep product selection, barcode identification and stock visibility connected so your team can move from customer request to sale faster.',
    whyItems: [
      { title: 'Faster Product Selection', description: 'Organized products make it quicker to find what a customer is asking for.', icon: 'search' },
      { title: 'Barcode Support', description: 'Identify products at the counter without manual lookup.', icon: 'barcode' },
      { title: 'Stock Visibility by Location', description: 'Check availability by location before confirming a sale.', icon: 'stock' },
      { title: 'Faster Quotation & Order Creation', description: 'Move from product selection to quotation and order without delay.', icon: 'quotation' },
    ],

    finalCta,
  },

  wholesale: {
    slug: 'wholesale',
    navLabel: 'Wholesale',
    navImage: '/images/industry/wholesale_shop.jpg',
    hero: {
      eyebrow: 'TrackSetu for Wholesale Businesses',
      heading: 'Keep Wholesale Orders, Purchasing and Payments Connected',
      description:
        'Connect customer orders with purchasing, stock, invoices and payments so your team can manage the complete wholesale operation from one system.',
      industryImage: '/images/industry/wholesale_shop.jpg',
      industryImageAlt: 'A wholesale warehouse',
    },

    problemsHeading: 'Real Problems Wholesale Businesses Deal With',
    problems: [
      {
        title: 'Large Customer Requirements',
        description:
          'Wholesale customers may place large or detailed orders covering many products and quantities. TrackSetu keeps customer, product, quantity and order information connected as the order is built.',
      },
      {
        title: 'Ordered Products May Not Be in Stock',
        description:
          'A confirmed order can require products that aren’t currently in stock. TrackSetu connects that order to the purchasing process - Customer Order → Stock Check → Purchase Requirement → Purchase Order - instead of the team tracking the shortfall separately.',
      },
      {
        title: 'Stock Across Locations',
        description:
          'Wholesale stock is often split across godowns and delivery points. TrackSetu supports location-wise stock visibility and stock transfers between locations.',
      },
      {
        title: 'Outstanding Payments',
        description:
          'With many customers and recurring orders, it matters to know what has been received and what is still due. TrackSetu keeps customer payments, outstanding balances and transaction history visible.',
      },
    ],

    solutionsHeading: 'How TrackSetu Helps Wholesale Businesses',
    solutions: [
      {
        title: 'Orders That Stay Organized',
        description: 'Customer, product, quantity and order details stay connected even for large, detailed orders.',
      },
      {
        title: 'Purchasing Starts From the Order',
        description: 'When stock is short, generate a purchase order directly from the customer order that needed it.',
      },
      {
        title: 'Stock and Payments, Always Visible',
        description: 'Check stock across locations and see what each customer has paid and still owes.',
      },
    ],

    workflowHeading: 'From Customer Order to Fulfilment',
    workflowFlow: ['Customer', 'Order', 'Stock Check', 'Purchase Order', 'Stock Received', 'Fulfilment', 'Invoice', 'Payment'],

    spotlightHeading: 'From Order to Purchase to Payment',
    spotlightDescription:
      'Real TrackSetu screens covering the order, the purchase order it can generate, current stock, and the customer’s payment and outstanding balance.',
    spotlightGallery: [
      {
        number: '01',
        title: 'Order',
        description: 'Record the wholesale customer’s order with the required products and quantities.',
        image: '/images/04-order-large.png',
        alt: 'TrackSetu order screen',
      },
      {
        number: '02',
        title: 'Purchase Order',
        description: 'When stock is short, raise a purchase order directly from the customer order.',
        image: '/images/07-purchase-order.png',
        alt: 'TrackSetu purchase order screen',
      },
      {
        number: '03',
        title: 'Current Stock',
        description: 'Check stock across locations before confirming fulfilment.',
        image: '/images/08-current-stock.png',
        alt: 'TrackSetu current stock screen',
      },
      {
        number: '04',
        title: 'Payment & Ledger',
        description: 'Track what has been received and what is still outstanding for each customer.',
        image: '/images/09-customer-ledger.png',
        alt: 'TrackSetu customer ledger screen',
      },
    ],

    highlights: [
      {
        heading: 'Connect Customer Demand With Purchasing',
        description:
          'When a wholesale order needs products that are not in stock, TrackSetu can generate a purchase order directly from that order, keeping the original requirement connected instead of recreating it.',
        images: [
          { src: '/images/04-order-large.png', alt: 'TrackSetu order screen', caption: 'Order' },
          { src: '/images/07-purchase-order.png', alt: 'TrackSetu purchase order screen', caption: 'Purchase Order' },
        ],
      },
      {
        heading: 'Know What Has Been Received and What Is Still Due',
        description:
          'Track customer payments, outstanding balances and transaction history alongside the orders they relate to, so your team always knows what has been settled and what is still pending.',
        images: [
          { src: '/images/05-payments-list.png', alt: 'TrackSetu payments screen', caption: 'Payments' },
          { src: '/images/09-customer-ledger.png', alt: 'TrackSetu customer ledger screen', caption: 'Customer Ledger' },
        ],
      },
    ],

    screenshotsHeading: 'Real TrackSetu Application Screens',
    screenshots: screenshots('wholesale'),

    whyHeading: 'One Connected View of Your Wholesale Operation',
    whyDescription:
      'Keep wholesale orders, purchasing, stock, fulfilment and customer payments connected so your team can manage the full operation with less separate tracking.',
    whyItems: [
      { title: 'Connected Orders and Purchasing', description: 'Purchase requirements stay linked to the order that created them.', icon: 'link' },
      { title: 'Stock Visibility Across Locations', description: 'See stock by godown and transfer between locations.', icon: 'stock' },
      { title: 'Payment & Outstanding Visibility', description: 'Know what each customer has paid and what remains due.', icon: 'payment' },
      { title: 'One System for the Full Operation', description: 'Orders, purchasing, stock and payments stay in one connected view.', icon: 'link' },
    ],

    finalCta,
  },
};

export const INDUSTRY_SLUGS: IndustrySlug[] = ['tiles', 'sanitary', 'hardware', 'wholesale'];
