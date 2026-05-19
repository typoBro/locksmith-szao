import { siteConfig } from "@/data/site";

export const reviewsSummary = {
  title: "Отзывы на Avito",
  rating: siteConfig.proof.rating,
  count: siteConfig.proof.reviews,
  href: siteConfig.avitoUrl,
};

export const reviews: Array<{
  text: string;
  source: string;
  area?: string;
}> = [];

