import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://tyshawn-allison.vercel.app";
  return [
    { url: base, lastModified: new Date(), priority: 1 },
    { url: `${base}/publication`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/modeling`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/digitals`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/content-creation`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), priority: 0.7 },
  ];
}
