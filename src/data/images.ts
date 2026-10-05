// Image paths for every service page. Files live in /public/images

export const serviceImages: Record<string, { card: string; hero: string; cap: string[]; sol: string; cta?: string; capLeft?: boolean; solLeft?: boolean; solBanner?: boolean }> = {
  'sea-freight': {
    card: '/images/sea-freight.png',
    hero: '/images/sea-freight-hero.png',
    cap: ['/images/sea-freight-cap-1.png', '/images/sea-freight-cap-3.png'],
    sol: '/images/right-side.png',
    cta: '/images/ctabanner.png'
  },
  'air-freight': {
    card: '/images/air-freight.png',
    hero: '/images/air-freight-sol.png',
    cap: ['/images/air-freight-cap-1.jpg'],
    sol: '/images/air-freight-sol.png',
    cta: '/images/ctabanner.png'
  },
  'road-freight': {
    card: '/images/road-freight.png',
    hero: '/images/road-freight-sol.jpg',
    cap: ['/images/road-freight-cap-1.jpg'],
    sol: '/images/road-freight-sol.jpg',
    cta: '/images/ctabanner.png'
  },
  'multimodal-transport': {
    card: '/images/multimodal-transport.png',
    hero: '/images/multimodal.png',
    cap: ['/images/multimodal-transport-cap-1.jpg'],
    sol: '/images/side.png',
    cta: '/images/ctabanner.png',
    solBanner: true
  },
  'freight-forwarding': {
    card: '/images/freight-forwarding.png',
    hero: '/images/forwarding.png',
    cap: ['/images/freight-forwarding-cap-1.jpg'],
    sol: '/images/side-1.png',
    cta: '/images/ctabanner.png',
    capLeft: true,
    solBanner: true
  },
  'parcel-courier': {
    card: '/images/parcel-courier.png',
    hero: '/images/parcel-courier-sol.jpg',
    cap: ['/images/parcel-courier-cap-1.jpg'],
    sol: '/images/parcel-courier-sol.jpg',
    cta: '/images/ctabanner.png'
  },
  'packaging-and-storage': {
    card: '/images/packaging-and-storage.png',
    hero: '/images/packaging-and-storage-sol.jpg',
    cap: ['/images/packaging-and-storage-cap-1.jpg', '/images/packaging-and-storage-cap-2.jpg'],
    sol: '/images/packaging-and-storage-sol.jpg',
    cta: '/images/ctabanner.png'
  },
  'car-transportation': {
    card: '/images/car-transportation.png',
    hero: '/images/car-transportation-sol.jpg',
    cap: ['/images/car-transportation-cap-1.jpg', '/images/car-transportation-cap-2.jpg'],
    sol: '/images/car-transportation-sol.jpg',
    cta: '/images/ctabanner.png',
    solLeft: true
  },
  'cargo-insurance': {
    card: '/images/cargo-insurance.png',
    hero: '/images/cargo-insurance-sol.jpg',
    cap: ['/images/cargo-insurance-cap-1.jpg'],
    sol: '/images/cargo-insurance-sol.jpg',
    cta: '/images/ctabanner.png'
  },
};
