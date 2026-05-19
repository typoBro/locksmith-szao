import { siteConfig } from "@/data/site";

export const heroContent = {
  badge: "Москва, СЗАО · частный мастер",
  title: "Аварийное вскрытие замков в СЗАО",
  description: "Двери, авто, гаражи, сейфы. Цена и право доступа — до начала работы.",
  primaryCta: "Позвонить мастеру",
  secondaryCta: "Смотреть Avito",
  secondaryCtaShort: "Профиль Avito",
  proofChips: [`Avito ${siteConfig.proof.rating}`, siteConfig.proof.reviews, siteConfig.proof.since.replace("на Avito ", "")],
  mediaChips: [`Avito ${siteConfig.proof.rating}`, siteConfig.proof.reviews, "СЗАО"],
  mediaCaption: "Фото с выезда",
  trustItems: ["с 2017 года", "доступ проверяем", "цена до начала"],
};

export const servicesContent = {
  label: "Услуги",
  title: "Что нужно открыть",
  description: "Выберите ситуацию — цену уточним по телефону до начала работы.",
  fullListLabel: "Все услуги",
};

export const areasContent = {
  label: "Зона",
  mapLabel: "Москва · СЗАО",
  mapTitle: "СЗАО",
  districtsLabel: "Районы выезда",
  description: "Районы можно быстро проверить по списку или открыть в Яндекс.Картах.",
  mapAriaLabel: "Открыть зону в Яндекс Картах",
  yandexMapsButton: "Открыть Яндекс-Карты",
  mapPreviewTitle: "Карта СЗАО",
  mapPreviewDescription: "Карта открывается по кнопке; список районов доступен сразу.",
};

export const avitoProfileContent = {
  label: "Профиль Avito",
  title: "Сергей — мастер по замкам",
  status: "Частный исполнитель с Avito",
  description:
    "Выездной мастер по СЗАО. Работает без офиса и приёма клиентов. Детали вызова удобнее уточнять по телефону.",
  imageAlt: "Сергей - мастер по замкам из Avito",
  callCta: "Позвонить",
  avitoCta: "Смотреть профиль Avito",
  facts: [
    { label: "Статус", value: siteConfig.masterStatus },
    { label: "Локация", value: siteConfig.avitoLocation },
    { label: "Метро", value: siteConfig.metro.join(" · ") },
    { label: "Зона", value: "Москва, СЗАО и соседние районы" },
  ],
};

export const prepareCallContent = {
  label: "Перед звонком",
  title: "Что подготовить",
  description: "Достаточно 4 деталей — мастер быстрее назовёт ориентир.",
  photoHint: "Фото замка можно описать по телефону, если оно перед глазами.",
  cta: "Позвонить",
};

export const faqContent = {
  label: "FAQ",
  title: "Частые вопросы",
  description: "Цена, документы, ночной выезд и аккуратное открытие.",
};

export const finalCtaContent = {
  title: "Нужно открыть замок?",
  description: "Позвоните Сергею: мастер уточнит ситуацию и ориентир по цене.",
  cta: "Позвонить мастеру",
};

export const smartCallFabContent = {
  ariaLabel: "Позвонить мастеру",
  label: "Позвонить",
};

export const footerContent = {
  copyright: `© 2026 ${siteConfig.name}. Выездной сервис по СЗАО.`,
};

export const seoContent = {
  defaultTitle: "Аварийное вскрытие замков в СЗАО Москвы — вызвать мастера",
  defaultDescription:
    "Вскрытие дверных, автомобильных, гаражных замков и сейфов в СЗАО Москвы. Частный мастер, проверка права доступа, стоимость до начала работ.",
  localBusinessDescription:
    "Вскрытие дверных, автомобильных, гаражных замков и сейфов в СЗАО Москвы.",
  breadcrumbHome: "Главная",
  breadcrumbCurrent: "Аварийное вскрытие замков в СЗАО",
  ogArea: "Москва · СЗАО",
  ogTitle: "Аварийное вскрытие замков",
  ogDescription: "Двери, авто, гаражи и сейфы. Проверка права доступа. Цена до начала работ.",
  ogImageAlt: "Аварийное вскрытие замков в СЗАО Москвы",
};

export const mapContent = {
  areaLabel: "Яндекс-карта с выделенными районами работы",
  districtBalloonSuffix: "Ориентировочная зона выезда",
  loading: "Открываем карту районов…",
  errorTitle: "Карта временно недоступна",
  errorDescription: "Район можно проверить по телефону.",
};
