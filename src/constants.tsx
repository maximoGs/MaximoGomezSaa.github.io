// FIX: Import React and types to satisfy the TypeScript compiler.
import React from 'react';
import { GalleryImage, MapPoint, NewsPost, PortfolioItem, Service, TeamMember } from './types';

// Types are globally available from types.ts.
// React is globally available from the CDN script.
// Constants are defined in the global scope for other components to use.

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const WandIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V5.75A2.25 2.25 0 0018 3.5H6A2.25 2.25 0 003.75 5.75v12.5A2.25 2.25 0 006 20.25z" />
    </svg>
);

const CompassIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2m-14 0H3m14.07-9.93l-1.42 1.42M5.35 18.65l-1.42 1.42m14.14 0l-1.42-1.42M5.35 5.35L6.77 6.77" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
    </svg>
);


// FIX: Export constants to make them available for import in other modules.
export const SERVICES: Service[] = [
  {
    title: 'Live Sets',
    description: 'Immersive electronic music experiences that take you on a journey through sound. From intimate clubs to massive festivals, every set is crafted to create unforgettable moments.',
    icon: <WandIcon />,
  },
  {
    title: 'Music Production',
    description: 'Original tracks and remixes that blend cutting-edge electronic sounds with deep, soulful rhythms. Each production is meticulously crafted to move both body and spirit.',
    icon: <EyeIcon />,
  },
  {
    title: 'Event Curation',
    description: 'Carefully curated electronic music events that create unique atmospheres and memorable experiences. From underground parties to mainstream festivals, every event tells a story.',
    icon: <CompassIcon />,
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: 'ChanoS',
    role: 'DJ/Producer',
    title: 'Electronic Music Artist',
    bio: 'Rising from the vibrant electronic music scene of Mendoza, ChanoS brings a fresh perspective to underground dance music. Blending deep house, techno, and progressive elements with Latin rhythms.',
    imageUrl: 'https://picsum.photos/seed/chanos/400/600',
    portfolioUrl: '#',
    keywords: ['Deep House', 'Techno', 'Progressive', 'Latin Electronic'],
    socials: [
      { name: 'instagram', url: '#' },
      { name: 'twitter', url: '#' },
    ],
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: 'xyz123', title: 'Noche Electrónica', description: 'Live set from Underground Club Mendoza - Deep House & Progressive' },
  { id: 'abc456', title: 'Andean Rhythms EP', description: 'Original productions blending electronic with Andean influences' },
  { id: 'def789', title: 'Sunset Sessions', description: 'Warm-up set from Mendoza Wine Festival 2025' },
];

export const NEWS_POSTS: NewsPost[] = [
  { id: 1, title: 'New Release: "Mendoza Nights"', excerpt: 'Fresh track dropping this weekend - a journey through deep house with Latin soul.', imageUrl: 'https://picsum.photos/seed/news1/600/400' },
  { id: 2, title: 'Underground Festival Headliner', excerpt: 'Catch my extended 3-hour set at this year\'s Underground Electronic Festival Mendoza.', imageUrl: 'https://picsum.photos/seed/news2/600/400' },
  { id: 3, title: 'Studio Sessions: Behind the Mix', excerpt: 'Take a peek into my production process and the making of my latest EP.', imageUrl: 'https://picsum.photos/seed/news3/600/400' },
];

export const GALLERY_IMAGES: GalleryImage[] = [
    { id: 1, src: 'https://picsum.photos/seed/gallery1/800/1200', title: 'Club Nocturno', description: 'Headlining at Club Underground Mendoza'},
    { id: 2, src: 'https://picsum.photos/seed/gallery2/1200/800', title: 'Festival Vibes', description: 'Sunset set at Electronic Valley Festival'},
    { id: 3, src: 'https://picsum.photos/seed/gallery3/800/1000', title: 'Studio Magic', description: 'Creating new sounds in the production studio'},
    { id: 4, src: 'https://picsum.photos/seed/gallery4/1200/900', title: 'Dance Floor Energy', description: 'Crowd going wild at Mendoza Nights'},
    { id: 5, src: 'https://picsum.photos/seed/gallery5/800/1200', title: 'Behind the Decks', description: 'In the mix at Terraza Club'},
    { id: 6, src: 'https://picsum.photos/seed/gallery6/900/1200', title: 'Mountain Rave', description: 'Special mountain venue set in the Andes'},
    { id: 7, src: 'https://picsum.photos/seed/gallery7/1200/800', title: 'Summer Sessions', description: 'Outdoor party at Wine Electronic Festival'},
    { id: 8, src: 'https://picsum.photos/seed/gallery8/800/1000', title: 'Underground Scene', description: 'Late night vibes at The Basement Club'},
];

export const MAP_POINTS: MapPoint[] = [
  {
    id: 1,
    title: 'Studio ChanoS',
    description: 'My personal production studio where the magic happens. Creating and mixing new tracks.',
    imageUrl: 'https://picsum.photos/seed/map1/400/200',
    type: 'production',
    coords: { top: '35%', left: '30%' },
  },
  {
    id: 2,
    title: 'Underground Club',
    description: 'Regular resident DJ spot. Home to the best underground electronic music in Mendoza.',
    imageUrl: 'https://picsum.photos/seed/map2/400/200',
    type: 'inspiration',
    coords: { top: '65%', left: '45%' },
  },
  {
    id: 3,
    title: 'The Basement',
    description: 'Deep house and techno venue where I host monthly events.',
    imageUrl: 'https://picsum.photos/seed/map3/400/200',
    type: 'partnership',
    coords: { top: '25%', left: '75%' },
  },
  {
    id: 4,
    title: 'Mountain Festival Venue',
    description: 'Annual electronic music festival location with breathtaking Andean views.',
    imageUrl: 'https://picsum.photos/seed/map4/400/200',
    type: 'production',
    coords: { top: '80%', left: '20%' },
  },
];