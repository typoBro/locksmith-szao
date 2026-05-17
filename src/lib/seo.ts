import { siteConfig } from "@/data/site";

export const defaultTitle = "Аварийное вскрытие замков в СЗАО Москвы — вызвать мастера";

export const defaultDescription =
  "Вскрытие дверных, автомобильных, гаражных замков и сейфов в СЗАО Москвы. Частный мастер, проверка права доступа, стоимость до начала работ.";

export function absoluteUrl(path = "") {
  return `${siteConfig.url}${path}`;
}
