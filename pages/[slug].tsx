import { getAllPages, getPageBySlug } from "../queries";

function Page({ data }: any) {
  console.log("props", data);
  return <p>hey</p>;
}

export async function getStaticProps({ params }: any) {
  const data = await getPageBySlug(params.slug);

  console.log("data", data);

  return {
    props: {},
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const { data, errors } = await getAllPages();

  if (errors) {
    throw new Error(`Error with getAllPages(): ${JSON.stringify(errors)}`);
  }

  const uriArr = data.pages.edges.map((i: any) => ({
    params: {
      slug: i.node.slug,
    },
  }));

  return {
    paths: uriArr,
    fallback: false,
  };
}

export default Page;
