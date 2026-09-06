import { urlLastMod } from "@/data/urlLastMod";

export const dynamic = "force-static";
const base_url = "https://matshwao.pages.dev"

export default function sitemap() {
  return Object.entries(urlLastMod).map(([suffix_url, lastModified]) => ({
    url: `${base_url}${suffix_url}`,
    lastModified: new Date(lastModified).toLocaleDateString(),
  }));
}
