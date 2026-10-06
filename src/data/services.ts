export type Faq = [string, string];

export interface Service {
  slug: string;
  name: string;
  short: string;        // short text used on cards
  heroBadge: string;
  heroTitle: string;    // [word] = orange
  heroText: string;
  capBadge?: string;
  capTitle?: string;
  capParagraphs: string[];
  bullets?: string[];
  solTitle: string;
  solParagraphs: string[];
  faqIntro: string;
  faqs: Faq[];
}

const same = 'Through our global network of control towers and state-of-the-art technology, we are able to monitor and dynamically react to situations such as adverse weather, additional pick ups or drop offs, or heavy traffic, meaning that your goods are always travelling the most efficient route.';
const flex = 'TPC Cargo’s flexible model, using only quality carriers, means you benefit from improved service levels, greater flexibility and time-definite deliveries. Our expertise in transport management and planning allows us to design a solution that meets your needs and also quickly respond to any event disruptions, such as adverse weather.';
const combo = 'Combining transport [execution and transport] management services';

export const services: Service[] = [
  {
    slug: 'sea-freight',
    name: 'Sea Freight',
    short: 'Sea freight shipping – the fast and reliable way to transport your goods. Guaranteed on-time delivery, competitive pricing and comprehensive customer service.',
    heroBadge: 'Sea Freight Solutions',
    heroTitle: 'Reliable [Sea Freight] For Global Trade',
    heroText: 'Reliable sea freight solutions for FCL, LCL, RoRo and bulk cargo, connecting your business to destinations worldwide.',
    capParagraphs: [
      'TPC Cargo sea freight services come in a number of ways in which your cargo can be transported from/to Cyprus. Thru our international network of dedicated freight forwarders and sea freight carriers, we can provide:',
      'FCL/Full Container Load, in which you make use of one or more full containers.',
      'LCL/Less Than Container/Groupage,where your goods share space in containers, as you may not have a full container worth of cargo. Once they reach their destination,  cargo is divided per customer, and from there each cargo it’s ready to be picked up, delivered, or continue the journey to the final destination thru different transport methods.',
      'RORO/Roll On Roll Off vessel, transporting wheeled cargo, be it cars, trucks, buses, trailers with cargo and goods, or even industrial vehicles, where your goods do not leave the vehicle they are in to go onto the cargo ship. The vehicle simply drives onto the ship and then drives off the other end.',
      'BULK shipping, used for some specific items, which are deposited into the hold of the ship instead of traveling in a container.',
    ],
    solTitle: 'Sea Freight',
    solParagraphs: [
      'With many benefits such as cost-effective comparatively to other methods, ease to maneuver heavy or large products with ease, inexpensive over long distances, and most carbon-efficient solutions, sea freight options become the most popular methods of cargo transportation between the island of Cyprus and world wide trading markets.',
    ],
    faqIntro: 'Find answers to common questions about sea freight services, shipping options, cargo requirements, and the quotation process.',
    faqs: [
      ['What Is Sea Freight?', 'Sea freight is a cost-effective method of transporting cargo internationally by vessel. It is suitable for a wide range of shipment sizes and cargo types.'],
      ['What Is The Difference Between FCL And LCL?', 'FCL means you use a full container for your cargo alone. LCL means your goods share container space with other shippers.'],
      ['Can You Handle Both FCL And LCL Shipments?', 'Yes. We arrange full container loads as well as groupage shipments, depending on the volume of your cargo.'],
      ['What Is RoRo Shipping?', 'RoRo (roll-on/roll-off) is used for wheeled cargo such as cars, trucks and trailers that are driven onto the ship and driven off at the destination.'],
      ['Can TPC Cargo Help Me Choose The Right Shipping Option?', 'Yes. Tell us about your cargo, route and timeline and our team will recommend the best option.'],
    ],
  },
  {
    slug: 'air-freight',
    name: 'Air Freight',
    short: 'Get your goods delivered quickly and reliably with our air freight services! Our experienced team offers professional and dependable door-to-door shipping.',
    heroBadge: 'Air Freight Solutions',
    heroTitle: 'Fast [Air Freight] For A Connected World',
    heroText: 'Reliable and time-critical air freight solutions for urgent shipments, high-value cargo and global supply chains.',
    capParagraphs: [
      'One of the best methods for efficient and time-sensitive modes of transport of cargo from one place to another, TPC Cargo air freight services are one straightforward process. Such shipments travel out of commercial and passenger aviation gateways to anywhere planes can fly and land.',
      'In a constantly changing economy and increasing of suppliers/consumers destinations requests, requires innovative transport solutions which connect different countries, and reduce transit time and costs – it’s a must.',
      'Over time, we have consolidated an international dedicated network of air freight partners in order to serve even the most remote territories.',
    ],
    solTitle: 'Air Cargo',
    solParagraphs: [
      'Each mode of shipping goods comes with its unique advantages. However, for speed of delivery and the security of reliability, air freight is an excellent choice. Air cargo transportation takes significantly less time than other shipping modes, and goods are not subject to the same dangers, so you can expect lower insurance payments.',
      'Our air freight network provides you with flexibility, improved service levels, accelerated delivery, reduced direct and indirect costs, and much more.',
    ],
    faqIntro: 'Find answers to common questions about air freight services, shipping options, cargo requirements, and the quotation process.',
    faqs: [
      ['What Is Air Freight?', 'Air freight is the transportation of cargo by aircraft, providing a fast and efficient solution for time-sensitive domestic and international shipments.'],
      ['When Should I Choose Air Freight?', 'Choose air freight when speed matters: urgent shipments, high-value goods or products with a short shelf life.'],
      ['What Types Of Cargo Can Be Shipped By Air?', 'Most general cargo can travel by air, including documents, electronics, perishables and valuable goods. Some dangerous goods have special restrictions.'],
      ['Can TPC Cargo Handle International Air Freight?', 'Yes. We work with a network of air freight partners to serve destinations worldwide.'],
      ['How Is Air Freight Charged?', 'Air freight is usually charged by the greater of actual weight or volumetric weight, plus any handling and customs fees.'],
      ['How Quickly Can Air Freight Shipments Be Delivered?', 'Transit is often just a few days, depending on the route, customs clearance and the service you choose.'],
    ],
  },
  {
    slug: 'road-freight',
    name: 'Road Freight',
    short: 'Experience the most reliable road freight services from a trusted provider. Get your goods delivered safely and on-time with our competitive rates and extensive network.',
    heroBadge: 'Road Freight Solutions',
    heroTitle: 'Reliable [Road Freight], Delivered Right',
    heroText: 'Fast, flexible road freight solutions for reliable local and international delivery.',
    capTitle: 'Road Freight',
    capParagraphs: [
      'Since the beginning, TPC Express Cargo has carried out pioneering work in the development of combined transport road/sea. Regardless of your needs, even if it’s an import-export to/from Cyprus or a personal/corporate need of transport and relocation services, our highly-qualified employees and partners are responsible for the success of your order – from booking until delivery to the final destination.',
      'Thereby, we can guarantee adequate road freight solutions and cargo space at all times, as well as optimal response, price, and transit times.',
    ],
    solTitle: combo,
    solParagraphs: [
      'Our team here at TPC Cargo Cyprus is able to monitor and dynamically react to situations such as adverse weather, additional pick-ups or drop-offs, or heavy traffic, meaning that your goods are always traveling the most efficient routes, with accelerated delivery, flexibility, reduced direct and indirect costs, improved service levels and much more.',
    ],
    faqIntro: 'Find answers to common questions about road freight services, shipping options, cargo requirements, and the quotation process.',
    faqs: [
      ['What Is Road Freight?', 'Road freight is the transportation of goods by road using trucks and other commercial vehicles. It is suitable for local, regional, and international cargo movements.'],
      ['When Should I Choose Road Freight?', 'Road freight is a good choice for flexible, door-to-door delivery over short and medium distances, especially within Europe.'],
      ['What Types Of Cargo Can Be Transported By Road?', 'Pallets, boxes, machinery, vehicles and other general or oversized cargo can be moved by road.'],
      ['Can TPC Cargo Arrange International Road Freight?', 'Yes. We organize road transport (combined with sea when needed) between Cyprus and destinations across Europe.'],
      ['Can You Provide Door-To-Door Road Freight Services?', 'Yes. We collect from your address and deliver straight to the final destination.'],
      ['How Long Does Road Freight Delivery Take?', 'It depends on distance, border crossings and the route. We will give you an estimate with your quote.'],
    ],
  },
  {
    slug: 'multimodal-transport',
    name: 'Multimodal Transport',
    short: 'Explore the world of multimodal transport: Learn how to save money and reduce emissions with smarter transportation. Find out more today!',
    heroBadge: 'Multimodal Transport Solutions',
    heroTitle: 'One Shipment, [Multiple Transport] Modes',
    heroText: 'Seamless road, sea and air freight solutions for efficient, flexible global cargo delivery.',
    capParagraphs: [
      'Since the beginning, TPC Express Cargo has carried out pioneering work in the development of multimodal transport road/sea/air. Regardless of your needs, even if it’s an import-export to/from Cyprus or a personal/corporate need of transport and relocation services, our highly-qualified employees and partners are responsible for the success of your order – from booking until delivery to the final destination.',
      'Thereby, we can guarantee combined sea/road/air freight solutions and cargo space at all times, as well as optimal response, price, and transit times.',
      'TPC Cargo’s logistics model, it’s using only quality carriers, which means you benefit from improved service levels, greater flexibility, and time-definite deliveries. Our expertise in transport management and planning of multimodal cargo transportation allows us to design a solution that meets your needs and also quickly responds to any event disruptions such as adverse weather conditions, additional pick ups or drop offs, or heavy traffic – meaning that your goods are always traveling the most efficient routes.',
    ],
    solTitle: combo,
    solParagraphs: [
      'We design multimodal solutions that combine road, sea, rail and air so that every leg of your shipment uses the most efficient option.',
    ],
    faqIntro: 'Find answers to common questions about multimodal transportation, combined shipping options, cargo requirements, and delivery planning.',
    faqs: [
      ['What Is Multimodal Transport?', 'Multimodal transport combines two or more transportation modes, such as road, sea, rail, or air, to move cargo from origin to destination.'],
      ['Why Choose Multimodal Transport?', 'It can lower costs, shorten transit times and reduce emissions by using the best mode for each leg.'],
      ['Which Transport Modes Can Be Combined?', 'Road, sea, rail and air can be combined depending on your cargo and route.'],
      ['What Types Of Cargo Can Use Multimodal Transport?', 'Containers, pallets, vehicles and general cargo are all suitable.'],
      ['Can TPC Cargo Manage The Complete Shipment?', 'Yes. We handle the whole journey, from booking to final delivery.'],
      ['How Is The Best Combination Of Transport Modes Selected?', 'We compare cost, speed, cargo type and destination, then propose the most efficient combination.'],
    ],
  },
  {
    slug: 'freight-forwarding',
    name: 'Freight Forwarding',
    short: 'We provide reliable and cost-effective freight forwarding services to help you move your goods from point A to point B. Let us take care of the logistics!',
    heroBadge: 'Freight Forwarding Solutions',
    heroTitle: 'Smarter Freight, [Seamless Global] Shipping',
    heroText: 'Reliable freight forwarding solutions connecting your cargo to global destinations with efficient planning and coordination.',
    capParagraphs: [
      'When it comes to freight forwarding and transportation of goods from points of origin to destinations through multiple carriers over land, air, and sea – you’re dealing with import and export customs and laws/regulations in both the country of origin and destination.',
      'Our freight forwarding and customs clearance department consists of a strong team of highly qualified and committed people with many years of experience in the field, ready to assist, plan and execute the most difficult task industry has to offer.',
    ],
    solTitle: combo,
    solParagraphs: [
      'Our team coordinates every step of your shipment – bookings, documentation, customs and delivery – so you only have to deal with one partner.',
    ],
    faqIntro: 'Find answers to common questions about freight forwarding, shipment coordination, documentation, customs, and international cargo movement.',
    faqs: [
      ['What Is Freight Forwarding?', 'Freight forwarding is the coordination of cargo transportation from origin to destination, including shipment planning, documentation, and carrier arrangements.'],
      ['What Does A Freight Forwarder Do?', 'A forwarder books carriers, prepares documents, arranges customs clearance and tracks your cargo until delivery.'],
      ['Can Freight Forwarding Include Different Transport Modes?', 'Yes. We can combine sea, air and road in one shipment.'],
      ['Can TPC Cargo Handle International Freight Forwarding?', 'Yes. Our global partner network lets us move cargo to and from almost any country.'],
      ['Can You Help With Shipping Documentation?', 'Yes. We prepare and check the paperwork needed for transport and customs.'],
      ['How Long Does Freight Forwarding Take?', 'Transit time depends on the mode, route and customs. We will confirm it in your quote.'],
    ],
  },
  {
    slug: 'parcel-courier',
    name: 'Parcel Courier',
    short: 'Need to have something delivered quickly and securely? Our parcel courier service offers speedy and reliable delivery of your packages.',
    heroBadge: 'Parcel Courier Solutions',
    heroTitle: 'Fast, Reliable Delivery, [Every Time]',
    heroText: 'Secure parcel delivery with fast collection, reliable tracking, and flexible delivery options.',
    capBadge: 'Our Parcel Courier expertise',
    capParagraphs: [
      'Get your parcel delivered safely and on time with the best carriers using our quick and easy booking process, with door collection and delivery.',
      'We offer express and economy services to almost any destination.',
    ],
    solTitle: combo,
    solParagraphs: [
      'Through our global network, we are able to perform, monitor and dynamically react to different shipment needs.',
      'Our parcel delivery service provides you with flexibility, improved service levels, accelerated delivery, reduced direct and indirect costs and much more.',
    ],
    faqIntro: 'Find answers to common questions about parcel courier services, delivery options, shipment requirements, and the quotation process.',
    faqs: [
      ['What Is A Parcel Courier Service?', 'A parcel courier service provides collection, transportation, and delivery of packages from one location to another.'],
      ['What Types Of Parcels Can Be Shipped?', 'Most boxed goods, documents and personal items can be shipped, within the size and weight limits of the service.'],
      ['Can I Send Parcels Internationally?', 'Yes. We offer express and economy services to almost any destination.'],
      ['How Long Does Parcel Delivery Take?', 'Express parcels usually arrive in a few days, economy takes longer. Timing depends on the destination.'],
      ['Can I Track My Parcel?', 'Yes. You will get a tracking reference so you can follow your parcel.'],
      ['Are There Items That Cannot Be Shipped?', 'Yes. Dangerous, illegal and restricted goods cannot be shipped. Ask us if you are unsure about an item.'],
    ],
  },
  {
    slug: 'packaging-and-storage',
    name: 'Packaging and Storage',
    short: 'Need help packing and storing your belongings? Look no further than our professional moving company! We offer top-notch packing and storage services for your convenience.',
    heroBadge: 'Packaging and Storage Solutions',
    heroTitle: 'Pack, Store, Move With [Confidence]',
    heroText: 'Secure packaging and flexible storage solutions designed to keep your goods protected and ready for delivery.',
    capParagraphs: [flex, same],
    solTitle: combo,
    solParagraphs: [
      same,
      'Our non-asset based road network provides you with flexibility, accelerated delivery, reduced direct and indirect costs and much less complexity.',
    ],
    faqIntro: 'Find answers to common questions about cargo packaging, storage options, handling requirements, and shipment preparation.',
    faqs: [
      ['What Packaging And Storage Services Do You Provide?', 'Packaging and storage services include preparing, protecting, handling, and storing goods before they are ready for transportation or delivery.'],
      ['Why Is Proper Cargo Packaging Important?', 'Good packaging protects goods from damage, moisture and movement during transport.'],
      ['What Types Of Goods Can Be Stored?', 'We store household items, commercial goods, pallets and more. Contact us for special requirements.'],
      ['Can You Arrange Packaging Before Shipping?', 'Yes. Our team can pack and prepare your goods before they are collected.'],
      ['How Long Can My Goods Be Stored?', 'Storage can be short or long term, depending on your needs.'],
      ['Can Packaging And Storage Be Combined With Transportation?', 'Yes. We can pack, store and ship your goods as one service.'],
    ],
  },
  {
    slug: 'car-transportation',
    name: 'Car Transportation',
    short: 'Get your car safely transported anywhere in the world with our international car transport services. We offer fast, reliable and affordable shipping for any vehicle.',
    heroBadge: 'Car Transportation Solutions',
    heroTitle: 'Safe, Reliable Vehicle [Transport Worldwide]',
    heroText: 'Secure vehicle shipping solutions designed for smooth, reliable transport across international destinations.',
    capParagraphs: [
      'Cars, motorcycles, boats, fast-food caravans or leisure caravans – are a few examples of our customers’ choices. With years of experience in the vehicle shipping industry, we built an extremely straightforward process – safe and efficient.',
      'Our customizable services mean that you can always choose.',
      'TPC Cargo can offer door-to-door vehicle shipping and transport services – meaning that all you have to do is schedule a time for your vehicle to be picked up, and then arrive to reacquire your delivered vehicle from the destination point. Or you can select different segments as needed:',
    ],
    bullets: ['Inland Transportation', 'Secure Loading/Unloading', 'Storage', 'Different Shipping Choices And Routes', 'Custom Clearance', 'Insurance'],
    solTitle: combo,
    solParagraphs: [
      'We have the ability, experience, and resources to secure and ship your vehicle to almost any country in the world.',
    ],
    faqIntro: 'Find answers to common questions about vehicle transportation, shipping options, documentation, delivery planning, and cargo requirements.',
    faqs: [
      ['What Is Car Transportation?', 'Car transportation is the process of moving vehicles from one location to another using suitable road, sea, or other transportation services.'],
      ['Can You Transport Vehicles Internationally?', 'Yes. We can ship your vehicle to almost any country in the world.'],
      ['How Are Cars Transported Internationally?', 'Cars are usually shipped by RoRo vessel or in a container, with road transport at each end.'],
      ['Can You Transport Different Types Of Vehicles?', 'Yes. Cars, motorcycles, boats and caravans are all possible.'],
      ['How Long Does Vehicle Transportation Take?', 'It depends on the route and shipping method. We give you an estimate with your quote.'],
      ['What Documents Are Required To Transport A Vehicle?', 'Usually the registration papers, proof of ownership and ID. Requirements vary by country, so we will confirm them for you.'],
    ],
  },
  {
    slug: 'cargo-insurance',
    name: 'Cargo Insurance',
    short: 'Protect your cargo with reliable cargo insurance! We provide the best coverage options for all kinds of shipments, so you can get peace of mind and safe delivery.',
    heroBadge: 'Cargo Insurance Solutions',
    heroTitle: 'Protect Your [Cargo] Every Step',
    heroText: 'Reliable cargo insurance solutions designed to help protect your shipments throughout their journey.',
    capParagraphs: [flex, same],
    solTitle: combo,
    solParagraphs: [
      same,
      'Our non-asset based road network provides you with flexibility, improved service levels, accelerated delivery, reduced direct and indirect costs and much less complexity.',
    ],
    faqIntro: 'Find answers to common questions about cargo insurance, shipment protection, coverage options, claims, and the quotation process.',
    faqs: [
      ['What Is Cargo Insurance?', 'Cargo insurance provides financial protection for goods against covered risks that may occur during transportation, subject to the terms and conditions of the policy.'],
      ['Why Is Cargo Insurance Important?', 'Carrier liability is often limited, so insurance helps cover the real value of your goods if something goes wrong.'],
      ['What Types Of Cargo Can Be Insured?', 'Most commercial and personal cargo can be insured. Ask us about special goods.'],
      ['What Risks Can Cargo Insurance Cover?', 'Typical cover includes damage, loss and theft during transport. Exact cover depends on the policy.'],
      ['Is Cargo Insurance Available For International Shipments?', 'Yes. Cover is available for sea, air and road shipments worldwide.'],
      ['How Is The Cost Of Cargo Insurance Calculated?', 'The cost is usually a small percentage of the cargo value, based on the goods, route and cover chosen.'],
    ],
  },
];
