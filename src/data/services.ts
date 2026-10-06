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
      ['What is sea freight?', 'Sea freight is a cost-effective method of transporting cargo internationally by vessel. It is suitable for a wide range of shipment sizes and cargo types.'],
      ['What is the difference between FCL and LCL?', 'FCL uses a dedicated container for one shipment, while LCL allows multiple shipments to share container space.'],
      ['Can you handle both FCL and LCL shipments?', 'Yes. TPC Cargo can support both FCL and LCL shipments based on your cargo volume, destination, and shipping requirements.'],
      ['What is RoRo shipping?', 'RoRo (Roll-on/Roll-off) shipping is designed for vehicles and other cargo that can be driven or rolled directly onto and off a vessel.'],
      ['What information do I need to request a sea freight quote?', 'You typically need to provide the origin, destination, cargo type, dimensions or weight, shipment volume, and any special handling requirements.'],
      ['Can TPC Cargo help me choose the right shipping option?', 'Yes. Our team can help you determine a suitable sea freight option based on your cargo, timeline, destination, and shipping requirements.'],
      ['How can I request a sea freight quote?', 'Simply complete the quote form with your shipment details, and the TPC Cargo team can review your requirements and get back to you.'],
      ['Can sea freight be used for international shipments?', 'Yes. Sea freight is widely used for international cargo transportation and can connect shipments across major global trade routes.'],
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
      ['What is air freight?', 'Air freight is the transportation of cargo by aircraft, providing a fast and efficient solution for time-sensitive domestic and international shipments.'],
      ['When should I choose air freight?', 'Air freight is suitable when delivery speed is a priority, especially for urgent, time-sensitive, or high-value shipments.'],
      ['What types of cargo can be shipped by air?', 'A wide range of commercial and general cargo can be transported by air, subject to airline and destination requirements.'],
      ['What information is needed for an air freight quote?', 'You typically need to provide the origin, destination, cargo type, weight, dimensions, quantity, and any special handling requirements.'],
      ['Can TPC Cargo handle international air freight?', 'Yes. TPC Cargo provides air freight solutions for shipments moving between international destinations, subject to available routes and requirements.'],
      ['How is air freight charged?', 'Air freight costs are generally based on factors such as cargo weight, dimensions, destination, service requirements, and applicable handling charges.'],
      ['How can I request an air freight quote?', 'Complete the quote form with your shipment details, and the TPC Cargo team can review your requirements and provide the next steps.'],
      ['How quickly can air freight shipments be delivered?', 'Transit times vary depending on the origin, destination, routing, flight availability, and service selected.'],
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
      ['What is road freight?', 'Road freight is the transportation of goods by road using trucks and other commercial vehicles. It is suitable for local, regional, and international cargo movements.'],
      ['When should I choose road freight?', 'Road freight is a practical option for shipments that require flexible pickup and delivery, regional transportation, or door-to-door service.'],
      ['What types of cargo can be transported by road?', 'Road freight can handle a wide range of commercial cargo, depending on its size, weight, handling requirements, and destination.'],
      ['What information is needed for a road freight quote?', 'You typically need to provide the pickup location, delivery destination, cargo type, quantity, weight, dimensions, and any special transportation requirements.'],
      ['Can TPC Cargo arrange international road freight?', 'Yes. International road freight can be arranged for suitable routes and destinations, subject to applicable transport and customs requirements.'],
      ['Can you provide door-to-door road freight services?', 'Depending on the shipment and route, road freight can be arranged to support collection from the pickup location and delivery to the final destination.'],
      ['How long does road freight delivery take?', 'Transit times depend on the distance, route, border procedures, traffic conditions, cargo requirements, and selected service.'],
      ['How can I request a road freight quote?', 'Complete the quote form with your shipment details, and the TPC Cargo team can review your requirements and provide the next steps.'],
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
      ['What is multimodal transport?', 'Multimodal transport combines two or more transportation modes, such as road, sea, rail, or air, to move cargo from origin to destination.'],
      ['Why choose multimodal transport?', 'It can provide greater flexibility by combining different transport modes to suit the shipment\'s route, timing, cargo requirements, and delivery needs.'],
      ['Which transport modes can be combined?', 'Depending on the shipment and route, multimodal transportation can combine road, sea, air, and rail services.'],
      ['What types of cargo can use multimodal transport?', 'Multimodal solutions can accommodate many types of commercial cargo, depending on its size, weight, destination, handling requirements, and applicable regulations.'],
      ['Can TPC Cargo manage the complete shipment?', 'TPC Cargo can coordinate different transportation stages to help provide a more streamlined movement of cargo from origin to final destination.'],
      ['How is the best combination of transport modes selected?', 'The appropriate combination depends on factors such as origin, destination, cargo characteristics, required delivery time, route, and transportation requirements.'],
      ['What information is needed for a multimodal transport quote?', 'You typically need to provide the origin, destination, cargo type, quantity, weight, dimensions, preferred timeline, and any special handling requirements.'],
      ['How can I request a multimodal transport quote?', 'Complete the quote form with your shipment details, and the TPC Cargo team can review your requirements and determine the appropriate transportation solution.'],
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
      ['What is freight forwarding?', 'Freight forwarding is the coordination of cargo transportation from origin to destination, including shipment planning, documentation, and logistics arrangements.'],
      ['What does a freight forwarder do?', 'A freight forwarder helps coordinate transportation, shipping documentation, cargo handling, and other logistics activities required to move goods efficiently.'],
      ['Can freight forwarding include different transport modes?', 'Yes. Freight forwarding can involve road, sea, air, or multimodal transportation depending on the shipment and destination.'],
      ['What information is needed for a freight forwarding quote?', 'You typically need to provide the origin, destination, cargo type, quantity, weight, dimensions, preferred shipping method, and any special requirements.'],
      ['Can TPC Cargo handle international freight forwarding?', 'TPC Cargo can coordinate freight forwarding solutions for international shipments, subject to the route, cargo requirements, and applicable regulations.'],
      ['Can you help with shipping documentation?', 'Freight forwarding often involves multiple shipping documents. The required documentation depends on the cargo, origin, destination, transport mode, and applicable regulations.'],
      ['How long does freight forwarding take?', 'Transit time depends on the transport mode, route, destination, customs procedures, cargo requirements, and selected service.'],
      ['How can I request a freight forwarding quote?', 'Complete the quote form with your shipment details, and the TPC Cargo team can review your requirements and provide the next steps.'],
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
      ['What is a parcel courier service?', 'A parcel courier service provides collection, transportation, and delivery of packages from one location to another.'],
      ['What types of parcels can be shipped?', 'A wide range of documents, packages, and commercial parcels can be transported, subject to size, weight, destination, and applicable shipping requirements.'],
      ['Can I send parcels internationally?', 'International parcel delivery can be arranged for suitable destinations, subject to available services, customs requirements, and destination regulations.'],
      ['What information is needed for a parcel delivery quote?', 'You typically need to provide the pickup location, delivery destination, parcel dimensions, weight, quantity, and any special handling requirements.'],
      ['How long does parcel delivery take?', 'Delivery times depend on the destination, service selected, shipping route, customs procedures, and other handling requirements.'],
      ['Can I track my parcel?', 'Tracking availability depends on the courier service and shipment type. Where tracking is available, shipment progress can be monitored using the provided tracking information.'],
      ['Are there items that cannot be shipped?', 'Certain restricted or prohibited items may not be accepted for transportation. Requirements can vary depending on the destination and applicable regulations.'],
      ['How can I request a parcel courier quote?', 'Complete the quote form with your parcel and delivery details, and the TPC Cargo team can review your requirements and provide the next steps.'],
    ],
  },
  {
    slug: 'packaging-and-storage',
    name: 'Packaging and Storage',
    short: 'Need help packing and storing your belongings? Look no further than our professional moving company! We offer top-notch packing and storage services for your convenience.',
    heroBadge: 'Packaging and Storage Solutions',
    heroTitle: 'Pack, Store, Move With [Confidence]',
    heroText: 'Secure packaging and flexible storage solutions designed to keep your goods protected and ready for delivery.',
    capParagraphs: [
      'Logistics Ground’s flexible model, using only quality carriers, means you benefit from improved service levels, greater flexibility and time-definite deliveries. Our expertise in transport management and planning allows us to design a solution that meets your needs and also quickly respond to any event disruptions, such as weather.',
      'Through our global network of control towers and state-of-the-art technology, we are able to monitor and dynamically react to situations such as adverse weather, additional pick ups or drop offs, or heavy traffic, meaning that your goods are always travelling the most efficient route.',
      'Our non-asset based road network provides you with flexibility, improved service levels, accelerated delivery, reduced direct and indirect costs and much less complexity. Integrated road networks, covering the world.',
    ],
    solTitle: combo,
    solParagraphs: [
      same,
      'Our non-asset based road network provides you with flexibility, accelerated delivery, reduced direct and indirect costs and much less complexity.',
    ],
    faqIntro: 'Find answers to common questions about cargo packaging, storage options, handling requirements, and shipment preparation.',
    faqs: [
      ['What packaging and storage services do you provide?', 'Packaging and storage services can include preparing, protecting, handling, and storing goods before they are ready for transportation or delivery.'],
      ['Why is proper cargo packaging important?', 'Proper packaging helps protect goods during handling, storage, and transportation while reducing the risk of damage during transit.'],
      ['What types of goods can be stored?', 'Storage options can accommodate different types of commercial goods, depending on their size, quantity, handling requirements, and storage conditions.'],
      ['Can you arrange packaging before shipping?', 'Yes. Packaging can be arranged as part of the shipment preparation process based on the type, size, and handling requirements of your cargo.'],
      ['How long can my goods be stored?', 'Storage duration depends on your requirements, available space, cargo type, and agreed storage arrangements.'],
      ['Can packaging and storage be combined with transportation?', 'Yes. Packaging and storage can be coordinated with transportation services to help streamline the movement of goods from preparation through delivery.'],
      ['What information is needed for a packaging or storage quote?', 'You typically need to provide details about the goods, quantity, dimensions, weight, packaging requirements, storage duration, and destination.'],
      ['How can I request a packaging and storage quote?', 'Complete the quote form with your cargo and storage requirements, and the TPC Cargo team can review your needs and provide the next steps.'],
    ],
  },
  {
    slug: 'car-transportation',
    name: 'Car Transportation',
    short: 'Get your car safely transported anywhere in the world with our international car transport services. We offer fast, reliable and affordable shipping for any vehicle.',
    heroBadge: 'Car Transportation Solutions',
    heroTitle: 'Safe, Reliable Vehicle [Transport Worldwide]',
    heroText: 'Secure vehicle shipping solutions designed for smooth, reliable transport across international destinations.',
    capBadge: 'Our Vehicle Shipping capabilities',
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
      ['What is car transportation?', 'Car transportation is the process of moving vehicles from one location to another using suitable road, sea, or other transportation services.'],
      ['Can you transport vehicles internationally?', 'Yes. International vehicle transportation can be arranged for suitable destinations, subject to available routes, customs procedures, and applicable regulations.'],
      ['How are cars transported internationally?', 'Vehicles can be transported using options such as RoRo shipping or containerised transportation, depending on the vehicle and shipment requirements.'],
      ['What information is needed for a car transportation quote?', 'You typically need to provide the vehicle type, pickup location, destination, vehicle dimensions, and any specific transportation requirements.'],
      ['Can you transport different types of vehicles?', 'Vehicle transportation options can vary depending on the type, size, dimensions, and requirements of the vehicle being shipped.'],
      ['How long does vehicle transportation take?', 'Transit times depend on the origin, destination, transportation method, route, customs procedures, and available schedules.'],
      ['What documents are required to transport a vehicle?', 'Required documents vary by origin, destination, vehicle type, and transportation method. Additional customs or import documentation may also be required.'],
      ['How can I request a car transportation quote?', 'Complete the quote form with your vehicle and transportation details, and the TPC Cargo team can review your requirements and provide the next steps.'],
    ],
  },
  {
    slug: 'cargo-insurance',
    name: 'Cargo Insurance',
    short: 'Protect your cargo with reliable cargo insurance! We provide the best coverage options for all kinds of shipments, so you can get peace of mind and safe delivery.',
    heroBadge: 'Cargo Insurance Solutions',
    heroTitle: 'Protect Your [Cargo] Every Step',
    heroText: 'Reliable cargo insurance solutions designed to help protect your shipments throughout their journey.',
    capBadge: 'Our Cargo Insurance solutions',
    capParagraphs: [
      'Logistics Ground’s flexible model, using only quality carriers, means you benefit from improved service levels, greater flexibility and time-definite deliveries. Our expertise in transport management and planning allows us to design a solution that meets your needs and also quickly respond to any event disruptions, such as weather.',
      'Through our global network of control towers and state-of-the-art technology, we are able to monitor and dynamically react to situations such as adverse weather, additional pick ups or drop offs, or heavy traffic, meaning that your goods are always travelling the most efficient route.',
      'Our non-asset based road network provides you with flexibility, improved service levels, accelerated delivery, reduced direct and indirect costs and much less complexity. Integrated road networks, covering the world.',
    ],
    solTitle: combo,
    solParagraphs: [
      same,
      'Our non-asset based Road network provides you with flexibility, improved service levels, accelerated delivery, reduced direct and indirect costs and much less',
    ],
    faqIntro: 'Find answers to common questions about cargo insurance, shipment protection, coverage options, claims, and the quotation process.',
    faqs: [
      ['What is cargo insurance?', 'Cargo insurance provides financial protection for goods against covered risks that may occur during transportation, subject to the terms and conditions of the policy.'],
      ['Why is cargo insurance important?', 'Cargo insurance can help reduce the financial impact of unexpected loss or damage to goods while they are being transported.'],
      ['What types of cargo can be insured?', 'Coverage can vary depending on the type of goods, shipment method, destination, value, and insurance terms. Specific cargo requirements should be confirmed before arranging coverage.'],
      ['What risks can cargo insurance cover?', 'Coverage depends on the selected policy and may include certain risks associated with loss or damage during transit. The exact coverage, exclusions, and limits are defined by the policy terms.'],
      ['Is cargo insurance available for international shipments?', 'Cargo insurance can be arranged for eligible international shipments, subject to the applicable policy terms, destination, cargo type, and transportation method.'],
      ['How is the cost of cargo insurance calculated?', 'The premium can depend on factors such as cargo value, type of goods, transportation method, route, destination, and selected coverage.'],
      ['What information is needed for a cargo insurance quote?', 'You typically need to provide details such as the cargo type, declared value, origin, destination, transportation method, and shipment details.'],
      ['How can I request a cargo insurance quote?', 'Complete the quote form with your shipment and cargo details, and the TPC Cargo team can review your requirements and provide the next steps.'],
    ],
  },
];
