export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  cta: string;
  link: string;
  tags: string[];
  accent?: boolean;
  image?: string;
};

export const projects: Project[] = [
  {
    id: 'ieee-olympics',
    number: '01',
    title: 'IEEE Olympics — Competitive Programming Platform',
    category: 'UI/UX Design · Web Platform · Case Study',
    description:
      'A competitive programming platform designed for IEEE Olympics, focused on creating a clear, engaging and competitive experience for participants.',
    cta: 'View Case Study',
    link: 'https://www.behance.net/gallery/254426783/IEEE-Olympics-Competitive-Programming-Platform',
    tags: ['Web Platform', 'Case Study', 'Gamification'],
    accent: true,
    image: '/images/ieee-olympics.png',
  },
  {
    id: 'ieee-aswan',
    number: '02',
    title: 'IEEE Aswan Website — UI/UX Case Study',
    category: 'UI/UX Design · Website · Case Study',
    description:
      'A modern website experience designed for IEEE Aswan with a focus on clear information architecture, visual consistency and usability.',
    cta: 'View Case Study',
    link: 'https://www.behance.net/gallery/247874897/IEEE-Aswan-Website-UIUX-Case-Study',
    tags: ['Website', 'Information Architecture'],
    image: '/images/ieee-aswan.png',
  },
  {
    id: 'saas-clinic',
    number: '03',
    title: 'Clinic SaaS Management — UI/UX Case Study',
    category: 'UI/UX Design · SaaS · Dashboard',
    description:
      'A modern clinic management experience designed to simplify workflows and make healthcare management more intuitive.',
    cta: 'View Case Study',
    link: 'https://www.behance.net/gallery/240214191/Clinic-SaaS-Management-(UIUX-)-Case-Study',
    tags: ['SaaS', 'Dashboard', 'Healthcare'],
    image: '/images/clinic-saas.png',
  },
  {
    id: 'petpal',
    number: '04',
    title: 'PetPal — All-in-One Pet Care Mobile App',
    category: 'UI/UX Design · Mobile App',
    description:
      'A friendly mobile experience designed to make pet care easier, clearer and more accessible.',
    cta: 'View Project',
    link: 'https://www.behance.net/gallery/253944089/PetPal-All-in-One-Pet-Care-Mobile-App',
    tags: ['Mobile App', 'Pet Care'],
    image: '/images/petpal.png',
  },
  {
    id: 'book-house',
    number: '05',
    title: 'Book House',
    category: 'UI/UX Design · E-Commerce',
    description:
      'An elegant bookstore interface designed to make discovering and purchasing books simple and enjoyable.',
    cta: 'View Case Study',
    link: 'https://www.behance.net/gallery/251390595/Book-House',
    tags: ['E-Commerce', 'Web'],
    image: '/images/book-house.png',
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  detail: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Research',
    description: 'Understand users, goals and problems.',
    detail:
      'Interviews, competitive analysis and user research to uncover real needs before any pixel is drawn.',
  },
  {
    number: '02',
    title: 'Define',
    description: 'Organize insights and define the right direction.',
    detail:
      'Synthesizing research into clear problem statements, user journeys and a focused product direction.',
  },
  {
    number: '03',
    title: 'Wireframe',
    description: 'Explore structure, layout and user flows.',
    detail:
      'Low-fidelity layouts that test information hierarchy and navigation before investing in visuals.',
  },
  {
    number: '04',
    title: 'Design',
    description: 'Create the visual system and high-fidelity UI.',
    detail:
      'Typography, color, components and spacing come together into a consistent, polished interface.',
  },
  {
    number: '05',
    title: 'Prototype',
    description: 'Turn static screens into realistic interactions.',
    detail:
      'Interactive prototypes that feel like the real product — perfect for testing and stakeholder demos.',
  },
  {
    number: '06',
    title: 'Refine',
    description: 'Test, iterate and polish every detail.',
    detail:
      'Usability testing and iteration loops to refine micro-interactions, accessibility and edge cases.',
  },
];

export type Skill = {
  label: string;
  category: 'design' | 'tools' | 'development';
};

export const designSkills = [
  'UI Design',
  'UX Design',
  'Wireframing',
  'Prototyping',
  'Design Systems',
  'User Flows',
  'Responsive Design',
  'Visual Design',
];

export const tools = ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe After Effects', 'Canva'];

export const development = ['HTML', 'CSS', 'JavaScript', 'Flutter', 'Firebase'];

export const socials = {
  behance: 'https://www.behance.net/fatmaahmed213',
  linkedin: 'https://www.linkedin.com/in/fatma-ahmed-1596a5344/',
  github: 'https://github.com/Fatma294437',
  email: 'fatma.ahmed.design@gmail.com',
};

export const stats = [
  { value: '2+', label: 'Years of Design Experience' },
  { value: '15+', label: 'Projects' },
  { value: 'UI/UX', label: 'Core Focus' },
  { value: 'Frontend', label: 'Development' },
];
