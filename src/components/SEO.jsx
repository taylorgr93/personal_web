// src/components/SEO.jsx
import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Taylor | Full Stack Developer",
  description = "Full Stack Developer specializing in React, Node.js, and TypeScript.",
  path = "",
  image = "/og-image.png",
}) => {
  const siteUrl = "https://taylorgr93.com"; // TODO: Change this
  const fullUrl = `${siteUrl}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={`${siteUrl}${image}`} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  );
};

export default SEO;
