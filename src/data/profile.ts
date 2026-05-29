export const profile = {
  name: 'Rakesh Kumar Behera',
  shortName: 'Rakesh',
  headline: 'Strategy, Marketing & IT Consulting',
  subHeadline: "MBA'27 IIM Sambalpur · Lean Six Sigma Green Belt · Ex-TCS",
  location: 'Bhubaneswar, Odisha, India',
  email: 'rk821604@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rakesh-kumar-behera-rk821604',
  tagline:
    'Bridging engineering rigor with business strategy — building cross-functional expertise in consulting, operations, and data-driven decision-making.',
  summary: [
    "Pursuing my MBA at IIM Sambalpur with a background in Engineering and 3+ years of industry experience at Tata Consultancy Services. I bring a structured, analytical mindset to business problems — balancing technical depth with strategic perspective.",
    'Across student governance, cultural fests, and corporate roles, I have led 25+ member teams, executed events with 1,000+ participants, and consistently delivered measurable outcomes — from 30% turnout lifts to 25% operational efficiency gains.',
    'Actively seeking opportunities in consulting, strategy, marketing, and business analytics where I can translate complex problems into clear, executable strategy.',
  ],
  metrics: [
    { value: '3.5+', label: 'Years at TCS' },
    { value: '25+', label: 'Team members led' },
    { value: '1,000+', label: 'Event participants' },
    { value: '5', label: 'Pro certifications' },
  ],
  experience: [
    {
      company: 'Mr Gardenr',
      role: 'Strategy & Marketing Intern',
      period: 'Apr 2026 — Present',
      location: 'Ahmedabad, Gujarat',
      highlights: [
        'Driving strategy and marketing initiatives during summer internship.',
      ],
    },
    {
      company: 'Indian Institute of Management Sambalpur',
      role: 'Secretary · AlphaBeta (Product Management Club)',
      period: 'Aug 2025 — Present',
      location: 'Sambalpur',
      highlights: [
        'Managed flagship event Udbhavanam — guest coordination, logistics, and end-to-end execution.',
        'Spearheaded "The Ultimate PM" and "Product Decipher" case competitions, engaging 500+ students across B-schools and undergraduate colleges.',
        'Drove social media event promotions across LinkedIn, Instagram, and Unstop — enhancing visibility and member engagement.',
      ],
    },
    {
      company: 'SunsysTechsol Pvt. Ltd.',
      role: 'IT Consultant',
      period: 'Jan 2026 — Mar 2026',
      location: 'Bhubaneswar',
      highlights: [
        'Short-term IT consulting engagement bridging technical delivery with client requirements.',
      ],
    },
    {
      company: 'Tata Consultancy Services',
      role: 'System Engineer · Assistant System Engineer · Trainee',
      period: 'Oct 2021 — Jun 2025 · 3 yrs 9 mos',
      location: 'India',
      highlights: [
        'Progressed across three levels — Trainee → Assistant System Engineer → System Engineer.',
        'Delivered software engineering work across the full project lifecycle.',
        'Built a strong technical foundation now applied to business strategy and consulting problems.',
      ],
    },
    {
      company: 'Indira Gandhi Institute of Technology (IGIT), Sarang',
      role: 'Society Advisor · T&P Coordinator · Society Secretary',
      period: 'Mar 2019 — May 2021',
      location: 'Odisha',
      highlights: [
        'Held multiple leadership roles spanning student governance, training & placement, and the Production Engineering Society.',
        'Led teams of 25+ to execute college-level events with 1,000+ participants — turnout up ~30%.',
        'Coordinated 10+ sponsors and vendors with on-time delivery and budget adherence.',
      ],
    },
    {
      company: 'Drishya 360° (Photography Club)',
      role: 'Secretary',
      period: 'Aug 2018 — May 2021',
      location: 'Odisha',
      highlights: [
        'Led the photography club; head of photography for the techno-cultural fest Horizon.',
      ],
    },
    {
      company: 'NALCO · CTTC Bhubaneswar',
      role: 'Summer Intern',
      period: '2018 — 2019',
      location: 'Odisha',
      highlights: ['Early-career exposure to manufacturing and technical operations.'],
    },
  ],
  skills: {
    strategy: [
      'Business Strategy',
      'Strategic Planning',
      'Marketing Strategy',
      'Consulting',
      'Market Research',
    ],
    operations: [
      'Operations Management',
      'Process Improvement',
      'Supply Chain Fundamentals',
      'Project Management',
      'Performance Management',
    ],
    analytics: [
      'Data Analysis',
      'Data-Driven Decision',
      'Financial Analysis',
      'Stakeholder Management',
    ],
    leadership: [
      'Team Building',
      'Leadership Development',
      'Cross-functional Coordination',
    ],
    technical: ['Next.js', 'React.js', 'Python', 'Azure', 'Oracle Cloud'],
  },
  certifications: [
    {
      title: 'Microsoft Certified: Azure Administrator Associate',
      issuer: 'Microsoft',
    },
    {
      title: 'Microsoft Certified: Data Analyst Associate',
      issuer: 'Microsoft',
    },
    {
      title: 'Oracle Cloud Infrastructure 2024 Foundations Associate',
      issuer: 'Oracle',
    },
    {
      title: 'PCAP — Programming Essentials in Python',
      issuer: 'Python Institute',
    },
    {
      title: 'Certified Professional AutoCAD Civil 3D',
      issuer: 'Autodesk',
    },
    {
      title: 'Lean Six Sigma — Green Belt',
      issuer: 'Industry-Recognized',
    },
  ],
  education: [
    {
      school: 'Indian Institute of Management Sambalpur',
      degree: 'Master of Business Administration (MBA)',
      period: 'Jun 2025 — May 2027',
    },
    {
      school: 'Indira Gandhi Institute of Technology (IGIT), Sarang',
      degree: 'Bachelor of Technology (B.Tech)',
      period: 'Aug 2017 — Jun 2021',
    },
    {
      school: 'Ispat English Medium School, Sector-20',
      degree: 'Science (Class XII · Class X)',
      period: '2005 — 2017',
    },
  ],
};

export type Profile = typeof profile;
