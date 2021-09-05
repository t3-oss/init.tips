import Head from "next/head";

const DEFAULT_DESCRIPTION =
  "Getting started with a new project doesn't have to be hard. Take our recommendations to get started on the right foot. Open source. Currently recommending Next.js and Typescript";
const DEFAULT_TITLE = "init.tips - start on the right stack";

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

      {/* Favicon stuff from realfavicongenerator.net */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};
