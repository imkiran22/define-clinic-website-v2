export type TreatmentCategory = {
  key: string;
  label: string;
  image: string;
  summary: string;
  treatments: string[];
};

export type DoctorProfile = {
  name: string;
  role?: string;
  image?: string;
};

export const clinicInfo = {
  name: 'Define Skin, Hair & Laser Clinic',
  tagline: 'Personalized skin, hair, and laser care designed for confidence.',
  foundedYear: '2022',
  address:
    'No. 2/89, Poonamallee - Avadi High Rd, Ram Nagar, Township Area, TNHB Mig V Block, Avadi, Tamil Nadu 600054',
  phoneDisplay: '+91 63792 56207',
  phoneDial: '+916379256207',
  email: 'define.skinhair.clinic@gmail.com',
  whatsapp: 'https://wa.me/916379256207?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment.',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.850344624979!2d80.10620691513428!3d13.108665590766073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52636845264889%3A0xb72239b67cb38c34!2sDefine%20skin%20hair%20%26%20laser%20clinic!5e0!3m2!1sen!2sin!4v1663738471657!5m2!1sen!2sin',
  instagram: 'https://www.instagram.com/define.cosmeticclinic',
  facebook: 'https://www.facebook.com/defineskinhairclinic-112627771411004'
};

export const consultingHours = [
  { day: 'Monday - Friday', time: '10:00 AM - 7:00 PM' },
  { day: 'Saturday', time: '10:00 AM - 7:00 PM' },
  { day: 'Sunday', time: 'Closed' }
];

export const aboutCopy = [
  'Welcome to Define Cosmetic Clinic, founded in 2022 in Avadi. We combine clinical expertise with modern aesthetic technology to deliver safe, personalized skin and hair solutions.',
  'Our care model is centered on clarity, trust, and measurable progress. Every consultation is designed around your skin type, lifestyle, and long-term goals.',
  'We believe quality aesthetic care should be approachable. At Define, we focus on practical treatment plans that help you look and feel your best with confidence.'
];

export const treatmentCategories: TreatmentCategory[] = [
  {
    key: 'hair_treatments',
    label: 'Hair Treatments',
    image: '/hair.jpeg',
    summary: 'Customized therapies to strengthen hair and improve scalp health.',
    treatments: [
      'Anti-dandruff treatment',
      'PRP',
      'GFC',
      'Low-level laser therapy',
      'Microneedling with hair cocktail serums'
    ]
  },
  {
    key: 'skin_treatments',
    label: 'Skin Treatments',
    image: '/skin.jpeg',
    summary: 'Targeted dermatology-led care for texture, tone, and clarity.',
    treatments: [
      'Acne, acne marks, and scar revision procedures',
      'Pigmentation treatment',
      'Uneven skin tone and suntan removal procedures',
      'Skin lightening treatment',
      'Melasma, freckles, and age spots treatment',
      'Chemical peels',
      'Microneedling radio frequency (MNRF) / collagen induction therapy',
      'Undereye darkness and hollowing treatment',
      'Skin rejuvenating medi-facials'
    ]
  },
  {
    key: 'laser_treatments',
    label: 'Laser Treatments',
    image: '/laser.jpeg',
    summary: 'USFDA-approved laser options suitable for Indian skin tones.',
    treatments: [
      'Laser hair reduction',
      'Laser toning',
      'Tattoo removal',
      'RF skin contouring and tightening',
      'IPL phototherapy',
      'Carbon peel Nd:YAG laser',
      'Mole, wart, and skin tag removal'
    ]
  },
  {
    key: 'injectable_treatments',
    label: 'Injectable Treatments',
    image: '/injectable.jpeg',
    summary: 'Evidence-based anti-aging procedures for natural-looking results.',
    treatments: ['Botox', 'Fillers', 'Thread lifts', 'Skin boosters', 'Fat-reducing lipolytic injections']
  }
];

export const doctors: DoctorProfile[] = [
  {
    name: 'Dr B Saranya',
    role: 'Founder | MBBS | MD (DVL) Resident'
  },
  {
    name: 'Dr Selva Baarathi',
    role: 'Consultant'
  },
  {
    name: 'Dr Sneka',
    role: 'Consultant'
  }
];
