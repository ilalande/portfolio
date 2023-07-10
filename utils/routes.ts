import { IRoutes } from '@custom-types/routes';

export const homeItemHeader: IRoutes[] = [
  {
    name: 'home',
    text: 'Juliane Casier',
    path: '/',
    id: 'HOME000',
  },
];
export const navItemsHeader: IRoutes[] = [
  {
    name: 'cv',
    text: 'CV',
    path: '/cv',
    id: 'HEAD000',
  },
  {
    name: 'projects',
    text: 'Projets',
    path: '/projets',
    id: 'HEAD001',
  },
  {
    name: 'contact',
    text: 'Contact et Informations',
    path: '/page/contact',
    id: 'HEAD002',
  },
];
export const navItemsFooter: IRoutes[] = [
  {
    name: 'legal',
    text: 'Mentions légales',
    path: '/page/mentions-legales',
    id: 'FOOTER000',
  },

  {
    name: 'acessibility',
    text: 'Accessibilité : partiellement conforme',
    path: '/page/accessibilite',
    id: 'FOOTER001',
  },
  {
    name: 'sitemap',
    text: 'Plan du site',
    path: '/page/plan-du-site',
    id: 'FOOTER002',
  },
  {
    name: 'contact',
    text: 'Contact',
    path: '/page/contact',
    id: 'FOOTER003',
  },
];
