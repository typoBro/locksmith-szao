import { siteConfig } from "@/data/site";

export const proofItems = [
  {
    title: "Avito 5,0",
    description: "6 отзывов, профиль с 2017 года",
  },
  {
    title: "Доступ проверяем",
    description: "Работа только после подтверждения, что объект ваш или вы действуете законно.",
  },
  {
    title: "Цена до начала",
    description: "Ориентир по телефону, финальная сумма перед началом работы.",
  },
  {
    title: "Выезд по СЗАО",
    description: "Митино, Строгино, Щукино, Тушино, Куркино и соседние районы.",
  },
];

export const proofMetricChips = [
  `Avito ${siteConfig.proof.rating}`,
  siteConfig.proof.reviews,
  siteConfig.proof.since.replace("на Avito ", "").replace(" года", ""),
];

export const mobileProofItems = [
  {
    title: "Цена до начала",
    description: "Ориентир по телефону, финальная сумма перед работой.",
  },
  {
    title: "Доступ проверяем",
    description: "Работа только после подтверждения права доступа.",
  },
];

export const prepareCallItems = [
  "Район или адрес",
  "Что нужно открыть",
  "Что случилось",
  "Есть ли подтверждение доступа",
];
