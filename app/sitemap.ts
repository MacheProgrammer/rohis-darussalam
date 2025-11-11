import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rohis.mache.id";

  const routes = [
    "",
    "/tentang",
    "/divisi/pengurus-harian",
    "/divisi/kaderisasi",
    "/divisi/hamas",
    "/divisi/keakhwatan",
    "/divisi/dakwah",
    "/divisi/gaza",
    "/divisi/tarbiyah",
    "/divisi/media",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
