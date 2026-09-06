import { urlLastMod } from "@/data/urlLastMod";

export const dynamic = "force-static";

export default function sitemap() {
  return Object.entries(urlLastMod).map(([url, lastModified]) => ({
    url: `https://matshwao.pages.dev${url}`,
    lastModified: new Date(lastModified).toLocaleDateString(),
  }));
}
