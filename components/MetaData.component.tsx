import Head from "next/head";

export const MetaData = ({
  title,
  img,
  description,
  url,
}: {
  title: string;
  img: string;
  description: string;
  url: string;
}) => {
  return (
    <Head>
      <title>Sarah Radtke</title>

      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={img} />

      {/* Twitter */}
      <meta property="twitter:card" content={img} />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={img} />
    </Head>
  );
};
