const API_URL = process.env.WORDPRESS_API_URL || '';

export async function fetchAPI<T>(
  query = '',
  { variables }: Record<string, any> = {},
): Promise<T> {
  const headers = { 'Content-Type': 'application/json' };

  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL, {
    headers,
    method: 'POST',
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!res.ok) {
    throw new Error(`fetchAPI error with status ${res.status}`);
  }

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error(`Failed to fetch API: ${JSON.stringify(json.errors)}`);
  }

  return json.data as T;
}

export default fetchAPI;

//   if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
//     headers[
//       'Authorization'
//     ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
//   }
