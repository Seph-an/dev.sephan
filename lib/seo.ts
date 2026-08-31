import { siteMetadata } from "@/lib/siteMetadata";

export const defaultSocialImage = {
  url: `${siteMetadata.siteUrl}${siteMetadata.defaultSocialImage}`,
  width: 1200,
  height: 1200,
  alt: "Sephan, e-commerce automation and integration engineer",
};

type SocialMetadataInput = { title: string; description: string; path: string; image?: string };

export function socialMetadata({ title, description, path, image }: SocialMetadataInput) {
  const imageUrl = image
    ? image.startsWith("http") ? image : `${siteMetadata.siteUrl}${image}`
    : defaultSocialImage.url;

  return {
    openGraph: {
      title,
      description,
      url: `${siteMetadata.siteUrl}${path === "/" ? "" : path}`,
      siteName: siteMetadata.siteName,
      locale: "en_KE",
      type: "website" as const,
      images: image ? [{ url: imageUrl, alt: title }] : [defaultSocialImage],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [imageUrl],
    },
  };
}
