import Head from "next/head";

export const MetaData = ({
  title,
  img,
  description,
  url,
}: {
  title: string;
  img?: string;
  description: string;
  url: string;
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {img && <meta property="og:image" content={img} />}
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      {img && <meta property="twitter:image" content={img} />}
    </Head>
  );
};
