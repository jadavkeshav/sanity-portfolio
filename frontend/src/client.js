import sanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID || 'fz41s82h',
  dataset: 'production',
  apiVersion: '2024-05-26',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => {
  if (!source) {
    console.error('Source is undefined');
    return ''; // Return a default value or placeholder URL
  }
  // console.log('source:', source);
  return builder.image(source);
};
