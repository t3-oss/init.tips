import Head from "next/head";

const DEFAULT_DESCRIPTION =
  "init.tips - our current recommendation for initializing a new web development project";
const DEFAULT_TITLE = "init.tips";

export const CustomSiteHead: React.FC<{
  title?: string;
  description?: string;
}> = (props) => {
  return (
    <Head>
      <title>{props.title ?? DEFAULT_TITLE}</title>
      <meta property="og:title" content={props.title ?? DEFAULT_TITLE} />
      <meta
        name="description"
        content={props.description ?? DEFAULT_DESCRIPTION}
      />
      <meta
        property="og:description"
        content={props.description ?? DEFAULT_DESCRIPTION}
      />
      <meta property="og:url" content="https://init.tips/" />
      <meta property="og:type" content="website" />
      <link rel="icon" href="/favicon.svg" />
      <meta
        property="og:image"
        content={"https://init.tips/twitter-banner.png"}
      />
      <meta
        name="twitter:image"
        content={"https://init.tips/twitter-banner.png"}
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};
