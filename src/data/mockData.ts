import { ServiceItem, TestimonialItem, GalleryPhoto, VenueAmenity } from '../types';
import celebrationCustomImg from '../assets/images/regenerated_image_1787090108453.jpg';

export const BUSINESS_INFO = {
  name: 'Balloons & Boardroom',
  tagline: 'Where Strategy Meets Celebration',
  address: '10C Ladoke Akintola, G.R.A. Ikeja, Lagos',
  phone: '+234 904 999 9098',
  phoneRaw: '2349049999098',
  email: 'hello@bedazzled.events',
  operatingHours: 'Tuesday - Friday: 09:00 - 17:00 (Open for weekend bookings)',
  googleMapsQuery: '10C Ladoke Akintola Street, Ikeja GRA, Lagos, Nigeria',
  instagram: '@balloonsandboardroom.ng',
  capacityMax: '80 Guests (Cocktail) / 45 (Seated Banquet) / 24 (Boardroom Executive)',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'weddings-proposals',
    title: 'Weddings & Proposals',
    category: 'celebration',
    tagline: 'High-end styling for intimate "I Do" moments',
    startingPrice: '₦350,000',
    numericPrice: 350000,
    description: 'Transformative styling for romantic proposals, intimate micro-weddings, and registry celebrations. Includes custom organic balloon arches, candlelight runway, champagne service, and private coordinator support.',
    capacity: 'Up to 50 Guests',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Bespoke gold & ivory organic balloon installations',
      'Romantic ambient candlelit tablescaping & floral runners',
      'Private bridal lounge with Hollywood vanity mirror',
      'Chilled champagne tower presentation & glassware',
      'Dedicated event coordinator & audio tech support'
    ],
    idealFor: 'Micro-weddings, rooftop proposals, vow renewals & engagement dinners',
    badge: 'Most Romantic'
  },
  {
    id: 'corporate-boardrooms',
    title: 'Corporate Boardrooms',
    category: 'corporate',
    tagline: 'Professional, tech-enabled spaces for retreats, strategy sessions, and AGMs',
    startingPrice: '₦150,000',
    numericPrice: 150000,
    description: 'A secluded executive haven in the heart of Ikeja GRA. Engineered for confidential board meetings, C-suite offsites, shareholder strategy sessions, and hybrid webinars with seamless tech and private dining.',
    capacity: '8 – 28 Executives',
    image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1200&q=80',
    features: [
      '85" Ultra-HD Smart Interactive Display with 4K Zoom video bar',
      'Dedicated ultra-fast 500Mbps Starlink + Fiber optic failover',
      'Ergonomic leather executive seating & acoustic dampening',
      'Artisan coffee station, water bar & refreshment setup',
      'Complete privacy with soundproof glass walls & blackout blinds'
    ],
    idealFor: 'Board meetings, AGM presentations, strategy retreats & VC pitch sessions',
    badge: 'Executive Choice'
  },
  {
    id: 'birthday-soirees',
    title: 'Birthday Soirées',
    category: 'celebration',
    tagline: 'Custom-themed décor and venue management for all ages',
    startingPrice: '₦200,000',
    numericPrice: 200000,
    description: 'Celebrate milestone birthdays in style. From chic 30th celebrations to grand 50th golden galas, we orchestrate organic balloon sculptures, customized photo backdrops, and mood lighting.',
    capacity: '20 – 65 Guests',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Multi-tiered 3D organic balloon sculptures in gold, chrome & pearl',
      'Custom neon signage & personalized celebration backdrops',
      'Integrated surround sound & wireless microphones',
      'Outdoor cocktail terrace access with ambient festoon lighting',
      'Bartender & mixologist station for custom drinks'
    ],
    idealFor: '30th, 40th, 50th milestone celebrations & chic dinner parties',
    badge: 'Lagos Favorite'
  },
  {
    id: 'ceremonies-showers',
    title: 'Ceremonies & Showers',
    category: 'celebration',
    tagline: 'Elegant setups for bridal showers, naming ceremonies, and anniversaries',
    startingPrice: '₦180,000',
    numericPrice: 180000,
    description: 'Chic, picture-perfect environments curated for momentous family and social milestones. Delicate pastels, champagne palettes, balloon garlands, and refined tablescapes.',
    capacity: '15 – 45 Guests',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Delicate pastel & gold balloon garlands with bloom accents',
      'Custom dessert display plinths & cake pedestals',
      'Photo-ready backdrop wall with lush greenery or blush drape',
      'High-tea serving ware with gold flatware accents',
      'Interactive parlor game area & presentation display'
    ],
    idealFor: 'Bridal showers, baby showers, dedication lunches & wedding anniversaries',
    badge: 'Picture Perfect'
  },
  {
    id: 'celebrations-milestones',
    title: 'Celebration of Birthdays & Ceremonies',
    category: 'celebration',
    tagline: 'Bespoke event styling and curated balloon installations for milestone occasions',
    startingPrice: '₦220,000',
    numericPrice: 220000,
    description: 'An all-inclusive celebration experience featuring customized organic balloon clouds, grand entrance arches, mood illumination, and full event floor management for unforgettable milestone memories.',
    capacity: '15 – 70 Guests',
    image: celebrationCustomImg,
    features: [
      'Showstopping custom balloon arch & thematic photo backdrop',
      'Welcome easel with personalized metallic calligraphy signage',
      'Full ambient color-matched uplighting & spotlighting',
      'Cake plinths, gift station & dessert presentation tables',
      'Private terrace access for cocktail hour & photo sessions'
    ],
    idealFor: 'Milestone birthdays, naming ceremonies, graduation dinners & anniversaries',
    badge: 'Bespoke Event'
  },
  {
    id: 'executive-dinners',
    title: 'Private Executive Dinners',
    category: 'dinner',
    tagline: 'Bespoke culinary journeys in an intimate, high-security salon',
    startingPrice: '₦250,000',
    numericPrice: 250000,
    description: 'Exclusive, discreet private dining for dignitaries, families, and corporate executives. Paired with private chef staging, beverage pairings, and custom crystal tableware.',
    capacity: '10 – 30 Guests',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Custom gold-embossed personalized menu cards & place names',
      'Wine & champagne pairing glassware station',
      'Acoustic background audio system',
      'Pre-dinner cocktail reception on the private garden veranda',
      'Discrete VIP security protocol with private gated entry'
    ],
    idealFor: 'Diplomatic dinners, C-suite celebrations, anniversary banquets',
    badge: 'Exclusive Salon'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: 'Everything was beautifully organized from start to finish. The attention to detail was incredible, and our guests had an amazing time.',
    clientName: 'Amaka O.',
    role: 'Wedding Client',
    event: 'Wedding Celebration',
    location: 'Lagos, Nigeria',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
    date: 'February 2026'
  },
  {
    id: 'test-2',
    quote: 'I didn’t have to worry about a thing. The team handled the planning, decorations, vendors, and coordination perfectly. It was exactly what I envisioned.',
    clientName: 'Chinedu & Sarah',
    role: 'Wedding Clients',
    event: 'Wedding & Reception',
    location: 'Lagos, Nigeria',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=250&q=80',
    date: 'January 2026'
  },
  {
    id: 'test-3',
    quote: 'Our corporate event looked absolutely stunning. Professional, creative, and incredibly easy to work with. We’ll definitely be using them again.',
    clientName: 'David M.',
    role: 'Corporate Client',
    event: 'Corporate Executive Event',
    location: 'Lagos, Nigeria',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80',
    date: 'January 2026'
  },
  {
    id: 'test-4',
    quote: 'From the first consultation to the final guest leaving, everything was handled professionally. They turned our ideas into something even better than we imagined.',
    clientName: 'Tolu A.',
    role: 'Birthday Celebration',
    event: 'Milestone Birthday Party',
    location: 'Lagos, Nigeria',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80',
    date: 'December 2025'
  },
  {
    id: 'test-5',
    quote: 'The decorations were breathtaking, the coordination was smooth, and every little detail was taken care of. Our event was truly unforgettable.',
    clientName: 'Jennifer K.',
    role: 'Wedding Client',
    event: 'Intimate Wedding',
    location: 'Lagos, Nigeria',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=250&q=80',
    date: 'November 2025'
  },
  {
    id: 'test-6',
    quote: 'What impressed me most was how calm and organized everything felt, even behind the scenes. I could actually relax and enjoy my own event.',
    clientName: 'Blessing A.',
    role: 'Private Event Host',
    event: 'Private Milestone Event',
    location: 'Lagos, Nigeria',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=250&q=80',
    date: 'October 2025'
  },
  {
    id: 'test-7',
    quote: 'They understood our vision immediately and brought it to life beautifully. The whole experience felt personal, professional, and stress-free.',
    clientName: 'Michael & Ada',
    role: 'Event Hosts',
    event: 'Bespoke Celebration',
    location: 'Lagos, Nigeria',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=250&q=80',
    date: 'September 2025'
  }
];

export const GALLERY_ITEMS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'The Grand Boardroom in Champagne & Ivory',
    category: 'Corporate',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
    caption: 'Tech-enabled executive suite with custom balloon installations for an investor summit.'
  },
  {
    id: 'gal-2',
    title: 'Golden Milestone 30th Birthday',
    category: 'Birthdays',
    imageUrl: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1000&q=80',
    caption: 'Bespoke balloon arch with 24k gold leaf accents and neon monogram.'
  },
  {
    id: 'gal-3',
    title: 'Intimate Proposal & Candlelight Corridor',
    category: 'Weddings',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
    caption: 'Rooftop veranda styled with romantic florals and pearlescent balloons.'
  },
  {
    id: 'gal-4',
    title: 'Secret Garden Veranda at 10C Ladoke Akintola',
    category: 'Venue',
    imageUrl: 'https://images.unsplash.com/photo-1545232979-fbf6759d5332?auto=format&fit=crop&w=1000&q=80',
    caption: 'Outdoor cocktail lounge with lush tropical foliage and mood festoons.'
  },
  {
    id: 'gal-5',
    title: 'Luxe Bridal Shower Afternoon Soirée',
    category: 'Showers',
    imageUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1000&q=80',
    caption: 'Pastel pink, champagne gold, and white organic cloud garland setup.'
  },
  {
    id: 'gal-6',
    title: 'C-Suite Strategy & Private Dining',
    category: 'Corporate',
    imageUrl: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1000&q=80',
    caption: 'Executive boardroom transformed into an intimate 3-course dinner.'
  }
];

export const VENUE_AMENITIES: VenueAmenity[] = [
  {
    icon: 'Zap',
    title: '100% Uninterrupted Power',
    description: 'Dual automated silent generator backup with zero-second UPS cutover for total event continuity.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Discreet VIP Security & Valet',
    description: 'Gated perimeter in quiet G.R.A. Ikeja with dedicated security operatives and valet parking attendants.'
  },
  {
    icon: 'Wifi',
    title: 'Ultra-Fast Enterprise Fiber',
    description: '500 Mbps synchronous fiber connection + Starlink backup for seamless hybrid video calls and live streaming.'
  },
  {
    icon: 'Sparkles',
    title: 'Master Balloon Artistry On-Site',
    description: 'In-house certified balloon sculptors creating organic, biodegradable, and high-gloss metallic installations.'
  },
  {
    icon: 'Monitor',
    title: '4K Smart Board & Acoustic Engineering',
    description: '85-inch interactive presentation screens, Dolby conference audio, and studio-grade sound insulation.'
  },
  {
    icon: 'Coffee',
    title: 'Artisan Barista & Private Bar',
    description: 'Fresh espresso bar, custom signature cocktail mixing, and sommelier-curated champagne service.'
  }
];

export const FAQS = [
  {
    question: 'Where exactly are you located in Ikeja GRA?',
    answer: 'We are situated at 10C Ladoke Akintola Street, G.R.A. Ikeja, Lagos. It is an exclusive, quiet, and easily accessible neighborhood just 12 minutes from Murtala Muhammed International Airport and 5 minutes from Maryland Mall.'
  },
  {
    question: 'Can we bring our own caterer or chef?',
    answer: 'Yes! While we offer bespoke catering and beverage packages, our venue features a fully equipped staging kitchen. Accredited external caterers are welcomed with a nominal corkage/kitchen prep fee.'
  },
  {
    question: 'How far in advance should we book?',
    answer: 'Due to high demand for weekend social celebrations and weekday corporate retreats, we recommend booking at least 2 to 4 weeks in advance. Last-minute bookings within 72 hours are subject to venue availability.'
  },
  {
    question: 'What is your deposit and cancellation policy?',
    answer: 'We require a 50% non-refundable deposit to secure your event date on our calendar. The balance is due 5 business days before your event. Date rescheduling is permitted up to 14 days before the event.'
  },
  {
    question: 'Are the balloons and decorations included in venue rental?',
    answer: 'Our signature packages include bespoke organic balloon artistry, backdrop curation, and premium mood lighting. We also offer bare venue hire for creative teams who wish to bring their own staging.'
  }
];
