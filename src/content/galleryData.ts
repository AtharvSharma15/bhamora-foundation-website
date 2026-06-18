/*
  HOW TO ADD YOUR OWN PHOTOS:
  ---------------------------
  1. Copy your images into the /public/gallery/ folder (created for you).
     Supported formats: .jpg, .jpeg, .png, .webp, .avif
  2. In the galleryItems array below, add an entry for each photo.
     The imageUrl must be the path inside the public folder.
     Example: '/gallery/photo1.jpg'

  AWARDS: Add award images to public/gallery/awards/ and add entries below.
*/

export const galleryItems = [
  // --- Education ---
  {
    id: 1,
    category: 'education',
    title: 'Children Learning',
    year: 2023,
    description: 'Students participating in our education program',
    imageUrl: '/images/education/children learning.jpg'
  },
  {
    id: 2,
    category: 'education',
    title: 'Digital Literacy',
    year: 2023,
    description: 'Computer training session for students',
    imageUrl: '/images/education/digital literacy.jpg'
  },
  {
    id: 3,
    category: 'education',
    title: 'Literacy Class',
    year: 2022,
    description: 'Literacy class in session',
    imageUrl: '/images/education/lietaracy class.jpg'
  },

  // --- Healthcare ---
  {
    id: 4,
    category: 'healthcare',
    title: 'Healthcare Initiative',
    year: 2023,
    description: 'Mobile health camp in rural area',
    imageUrl: '/images/healthcare/heltcare initative.jpg'
  },
  {
    id: 5,
    category: 'healthcare',
    title: 'Preventive Healthcare',
    year: 2022,
    description: 'Health awareness workshop',
    imageUrl: '/images/healthcare/preventive helathcare.jpg'
  },
  {
    id: 6,
    category: 'healthcare',
    title: 'Health Camp',
    year: 2023,
    description: 'Annual health checkup camp',
    imageUrl: '/images/healthcare/health camp.png'
  },

  // --- Women Empowerment ---
  {
    id: 7,
    category: 'women',
    title: 'Women Empowerment',
    year: 2023,
    description: 'Empowering women through skills training',
    imageUrl: '/images/women/women empoverment.jpg'
  },
  {
    id: 8,
    category: 'women',
    title: 'Self-Help Group',
    year: 2022,
    description: 'Monthly women\'s meeting',
    imageUrl: '/images/women/self help group.jpg'
  },
  {
    id: 9,
    category: 'women',
    title: 'Women Education',
    year: 2024,
    description: 'Educating women for a brighter future',
    imageUrl: '/images/women/women education.jpg'
  },

  // --- Awards & Recognition ---
  {
    id: 10,
    category: 'awards',
    title: 'Best NGO Award',
    year: 2024,
    description: 'Recognized as the best NGO for community service',
    imageUrl: '/images/award/best ngo.jpg'
  },
  {
    id: 11,
    category: 'awards',
    title: 'Best Performance Award',
    year: 2024,
    description: 'Awarded for outstanding performance in social development',
    imageUrl: '/images/award/best performance.jpg'
  },
  {
    id: 12,
    category: 'awards',
    title: 'Women Empowerment Award',
    year: 2024,
    description: 'Recognized for empowering women through skill development programs',
    imageUrl: '/images/award/women impoverment award.jpg'
  },
  {
    id: 13,
    category: 'awards',
    title: 'Community Health Companion',
    year: 2024,
    description: 'Awarded for outstanding contribution to community healthcare',
    imageUrl: '/images/award/conmunity healt comapnion.jpg'
  },
  {
    id: 14,
    category: 'awards',
    title: 'Excellence in Education',
    year: 2024,
    description: 'Recognized for excellence in educational initiatives',
    imageUrl: '/images/award/excellence in education.jpg'
  },
  {
    id: 15,
    category: 'awards',
    title: 'Best NGO in City',
    year: 2024,
    description: 'Honored as the best NGO in the city for community impact',
    imageUrl: '/images/award/best ngo in city.jpg'
  },
  {
    id: 16,
    category: 'awards',
    title: 'NITI Aayog Award',
    year: 2024,
    description: 'Recognized by NITI Aayog for developmental initiatives',
    imageUrl: '/images/award/niti aayog award.jpg'
  }
];

// Dedicated awards data - edit this to add your awards
export const awardItems = [
  {
    id: 1,
    year: 2024,
    title: 'Excellence in Education',
    organization: 'National Education Forum',
    description: 'Recognized for outstanding contributions to rural education and digital literacy programs across underserved communities.',
    imageUrl: '/images/award/excellence in education.jpg'
  },
  {
    id: 2,
    year: 2024,
    title: 'Community Health Companion',
    organization: 'Health Ministry of India',
    description: 'Awarded for the successful implementation of mobile health camps that reached over 10,000 beneficiaries.',
    imageUrl: '/images/award/conmunity healt comapnion.jpg'
  },
  {
    id: 3,
    year: 2024,
    title: 'Women Empowerment Award',
    organization: 'Women & Child Development Council',
    description: 'Honored for creating sustainable livelihood opportunities for women through vocational training and self-help groups.',
    imageUrl: '/images/award/women impoverment award.jpg'
  },
  {
    id: 4,
    year: 2024,
    title: 'Best NGO Award',
    organization: 'Community Development Forum',
    description: 'Recognized for outstanding community development work and social impact initiatives.',
    imageUrl: '/images/award/best ngo - Copy.png'
  },
  {
    id: 5,
    year: 2024,
    title: 'Best Performance Award',
    organization: 'Social Impact Council',
    description: 'Awarded for exceptional performance in executing community welfare programs.',
    imageUrl: '/images/award/best performance.jpg'
  },
  {
    id: 6,
    year: 2024,
    title: 'Best NGO in City',
    organization: 'City Development Authority',
    description: 'Honored as the best NGO in the city for outstanding community service and impact.',
    imageUrl: '/images/award/best ngo in city.jpg'
  },
  {
    id: 7,
    year: 2024,
    title: 'NITI Aayog Award',
    organization: 'NITI Aayog',
    description: 'Recognized by NITI Aayog for exemplary work in community development and social welfare.',
    imageUrl: '/images/award/niti aayog award.jpg'
  }
];

export const galleryCategories = [
  { id: 'all', name: 'All' },
  { id: 'education', name: 'Education' },
  { id: 'healthcare', name: 'Healthcare' },
  { id: 'women', name: 'Women Empowerment' },
  { id: 'awards', name: 'Awards & Recognition' }
];
