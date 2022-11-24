import { fetchAPI } from "utils/fetch";

export async function getAllPages() {
  const data = await fetchAPI(
    `
      query GetPages {
        pages {
          edges {
            node {
              slug
            }
          }
        }
      }`
  );

  return data;
}

export async function getPageBySlug(slug: string) {
  const data = await fetchAPI(
    `
      query GetPageBySlug($slug: ID!) {
        page(id: $slug, idType: URI) {
          shared { 
            pageTitle
          }
        }
      }`,
    {
      variables: {
        slug,
      },
    }
  );

  return data;
}
