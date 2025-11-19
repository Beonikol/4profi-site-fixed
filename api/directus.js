import { createDirectus, rest, readItems } from '@directus/sdk';

const directus = createDirectus('https://directus-4profi.onrender.com').with(rest());

export async function getServices() {
  const response = await directus.request(
    readItems('services', {
      fields: ['id', 'title', 'category', 'image'],
      filter: {
        status: {
          _eq: 'published',
        },
      },
      sort: ['id'],
    })
  );
  return response;
}
