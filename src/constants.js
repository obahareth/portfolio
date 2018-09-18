import kebabCase from 'lodash/kebabCase';

export const CONTACT_EMAIL = 'daniel@danieljs.tech';

const NAV_LINK_NAMES = ['Intro', 'Skillset', 'Values', 'Showcase', 'My Story'];
export const NAV_LINKS = NAV_LINK_NAMES.map(name => ({
  name,
  href: kebabCase(name),
}));

export const PAGE_CONTENT_ID = 'page-content';
export const PAGE_CONTENT_CONTAINER_ID = 'page-content-container';
