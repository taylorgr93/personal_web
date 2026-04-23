// src/components/SEO.jsx
import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Taylor | Software Engineer",
  description = "Software Engineer with 6+ years of experience in Full Stack Development, IoT, and Industry 4.0 solutions.",
  path = "",
  image = "/og-image.png",
  type = "website",
  noindex = false,
}) => {
  const siteUrl = "https://taylorgr93.com";
  const fullUrl = `${siteUrl}${path}`;
  const fullImage = `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Robots - noindex if specified */}
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow"}
      />

      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="Taylor - Software Engineer" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
    </Helmet>
  );
};

export default SEO;
