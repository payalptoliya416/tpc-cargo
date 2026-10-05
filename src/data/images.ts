// Image paths for every service page. Files live in /public/images
const p = (name: string) => `/images/${name}.png`;

export const serviceImages: Record<string, { card: string; hero: string; cap: string[]; sol: string; solLeft?: boolean }> = {
  'sea-freight': { card: p('sea-freight'), hero: p('sea-freight-sol'), cap: [p('sea-freight-cap-1'), p('sea-freight-cap-2')], sol: p('sea-freight-sol') },
  'air-freight': { card: p('air-freight'), hero: p('air-freight-sol'), cap: [p('air-freight-cap-1')], sol: p('air-freight-sol') },
  'road-freight': { card: p('road-freight'), hero: p('road-freight-sol'), cap: [p('road-freight-cap-1')], sol: p('road-freight-sol') },
  'multimodal-transport': { card: p('multimodal-transport'), hero: p('multimodal-transport-cap-1'), cap: [p('multimodal-transport-cap-1')], sol: p('sea-freight-sol') },
  'freight-forwarding': { card: p('freight-forwarding'), hero: p('freight-forwarding-cap-1'), cap: [p('freight-forwarding-cap-1')], sol: p('road-freight-sol') },
  'parcel-courier': { card: p('parcel-courier'), hero: p('parcel-courier-sol'), cap: [p('parcel-courier-cap-1')], sol: p('parcel-courier-sol') },
  'packaging-and-storage': { card: p('packaging-and-storage'), hero: p('packaging-and-storage-sol'), cap: [p('packaging-and-storage-cap-1'), p('packaging-and-storage-cap-2')], sol: p('packaging-and-storage-sol') },
  'car-transportation': { card: p('car-transportation'), hero: p('car-transportation-sol'), cap: [p('car-transportation-cap-1'), p('car-transportation-cap-2')], sol: p('car-transportation-sol'), solLeft: true },
  'cargo-insurance': { card: p('cargo-insurance'), hero: p('cargo-insurance-sol'), cap: [p('cargo-insurance-cap-1')], sol: p('cargo-insurance-sol') },
};
