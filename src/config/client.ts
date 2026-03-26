export const client = {
  // Business Details
  name: "Newdrives",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Fareham.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "01329 847777",
  email: "",
  website: "",

  // Location
  address: "Fareham",
  city: "Fareham",
  county: "",
  postcode: "",
  basedIn: "Fareham",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "5",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "David Scholey", rating: 5, text: "Newdrives have just completed work block paving our 90m2 drive. We are both absolutely delighted with the transformation. The huge semi circular step at the front door is even better than we hoped it would be. We have no problem in thoroughly and sin", date: "6 years ago" },
    { name: "Chris Rider", rating: 5, text: "Had block paving driveway laid two years ago. Faultless job. Now time for some maintenance, with a few weeds beginning to poke through... ", date: "5 years ago" },
    { name: "Fraser Colquhoun", rating: 5, text: "Did my neighbours drive the noise and dust was unbelievable.Vans parked everywhere with no consideration for anyone else .Cars we’re all covered in dust.Hope this lot don’t come to a drive near you ", date: "3 years ago" },
    { name: "John Atkinson", rating: 5, text: "Good professional job , very tidy , highly recommended from our own experience. ", date: "6 years ago" },
    { name: "Karl Bullen", rating: 5, text: "Never answered a phone call. Tried different times of different days and no answer. ", date: "4 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Newdrives | Landscaper in Fareham",
    description: "Professional landscaper in Fareham. 5.0-star rated on Google. Call for a free quote.",
  },
};
