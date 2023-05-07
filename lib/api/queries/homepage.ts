import { fetchAPI } from '../api';

async function getAllHomepageContent() {
  const data = await fetchAPI(`
    {
        pageBy(uri: "home") {
            homepageContent {
                heroBoldTitle
                heroTitle
                heroDescription
            }
        }
    }
    `);
  return data;
}

export default getAllHomepageContent;
