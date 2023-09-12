// SEO.tsx

import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  // Add other SEO-related props if needed
};

const SEO = ({ title, description, image, url }: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {url && <meta property="og:url" content={url} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      {/* Other SEO tags like Twitter can be added similarly */}
    </Helmet>
  );
};

export default SEO;
