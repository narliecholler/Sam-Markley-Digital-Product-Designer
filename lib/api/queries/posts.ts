import { fetchAPI } from '../api';

export async function getAllPostSlugs() {
  const data = await fetchAPI(`
    {
        posts {
            edges {
              node {
                slug
              }
            }
          }
    }
    `);
  return data;
}

export async function getPostBySlug() {
  const data = await fetchAPI(`
  query PostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
    }
  }
    `);

  return data;
}
