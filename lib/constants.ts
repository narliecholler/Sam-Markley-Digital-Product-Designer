import { MenuItem } from './types';

export const workProcesses = [
  {
    id: 1,
    title: 'Immerse',
    text: 'Going deep into client’s business to understand its core sense, goals and challenges to build partnership.',
  },
  {
    id: 2,
    title: 'Strategise',
    text: 'Our planning process turns research into a clear set of action items to meet business goals. ',
  },
  {
    id: 3,
    title: 'Wireframe',
    text: 'Building the foundation, structure and core elements of a digital product.',
  },
  {
    id: 4,
    title: 'Design',
    text: 'Adding colors, illustrations and shapes to create visual language that resonates with customers.',
  },
  {
    id: 5,
    title: 'Launch',
    text: 'During the Implementation, the job is to translate creative into a full program that goes live.',
  },
  {
    id: 6,
    title: 'Evolve',
    text: 'By tracking performance, we then initiate new strategies to maximize your business goals.',
  },
];

export const menuItemList: MenuItem[] = [
  {
    id: 1,
    title: 'Home',
    description: 'Browse an overview of my skillset.',
    pathname: '/',
    isMobileView: true,
  },
  {
    id: 2,
    title: 'About',
    description: 'My experience and testimonials',
    pathname: '/about',
  },
  {
    id: 3,
    title: 'Portfolio',
    description: 'From finance technology to ice baths.',
    pathname: '/portfolio',
  },
  {
    id: 4,
    title: 'Contact',
    description: 'Enquire about your ideas',
    pathname: '/contact',
  },
];
