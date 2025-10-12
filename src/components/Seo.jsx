import { Helmet } from "react-helmet-async";
export default function Seo({ title, description, url, image = "/src/assets/og-default.jpg" }) {
  const site = "https://example.com";
  const fullUrl = url?.startsWith("http") ? url : site + (url || "/");
  const pageTitle = title ? `${title} — 4Profi` : "4Profi";
  return (
    <Helmet>
      <title>{pageTitle}</title>
      {description && <meta name="description" content={description} />}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
