const API_URL = process.env.WORDPRESS_API_URL as string;
const REFRESH_TOKEN = process.env.WORDPRESS_AUTH_REFRESH_TOKEN as string;

export async function fetchAPI(
  query = "",
  { variables }: Record<string, any> = {}
) {
  if (!API_URL) throw new Error("missing wordpress api url.");

  if (!REFRESH_TOKEN)
    throw new Error("cannot authorise your request, missing refresh token.");

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${REFRESH_TOKEN}`,
  };

  try {
    // WPGraphQL Plugin must be enabled
    const res = await fetch(API_URL, {
      headers,
      method: "POST",
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    return await res.json();
  } catch (err) {
    throw new Error(`Failed to fetch API: ${JSON.stringify(err)}`);
  }
}
