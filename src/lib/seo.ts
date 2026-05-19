import { siteConfig } from "@/data/site";
import { seoContent } from "@/data/content";

export const defaultTitle = seoContent.defaultTitle;

export const defaultDescription = seoContent.defaultDescription;

export function absoluteUrl(path = "") {
  return `${siteConfig.url}${path}`;
}
