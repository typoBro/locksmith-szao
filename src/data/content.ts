import { siteConfig } from "@/data/site";

export const heroContent = {
  badge: "Москва, СЗАО · частный мастер",
  title: "Аварийное вскрытие замков в СЗАО",
  description: "Двери, авто, гаражи, сейфы. Цена и право доступа — до начала работы.",
  primaryCta: "Позвонить мастеру",
  secondaryCta: "WhatsApp",
  proofChips: [`Avito ${siteConfig.proof.rating}`, siteConfig.proof.reviews, siteConfig.proof.since.replace("на Avito ", "")],
  trustItems: ["Цена до начала", "Доступ проверяем", "Выезд по СЗАО"],
};

export const servicesContent = {
  label: "Услуги",
  title: "Что нужно открыть",
  description: "Четыре основных сценария вызова: без лишней витрины и повторов.",
  fullListLabel: "Полный список работ из Avito",
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
  mapPreviewDescription: "Интерактивную карту загрузим только по запросу, чтобы мобильная страница открывалась быстрее.",
};

export const avitoProfileContent = {
  label: "Профиль Avito",
  title: "Сергей — мастер по замкам",
  status: "Частный исполнитель с Avito",
  description:
    "Выездной мастер по СЗАО. Работает без офиса и приёма клиентов. Заявку удобнее уточнять по телефону или WhatsApp.",
  imageAlt: "Сергей - мастер по замкам из Avito",
  callCta: "Позвонить",
  whatsappCta: "WhatsApp",
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
  description: "Четырёх коротких деталей достаточно, чтобы быстрее понять сложность выезда.",
  photoHint: "Можно отправить фото замка в WhatsApp.",
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

export const mobileDockContent = {
  ariaLabel: "Быстрые действия",
  callAriaLabel: "Позвонить мастеру",
  callLabel: "Позвонить",
  whatsappAriaLabel: "Написать в WhatsApp",
  whatsappLabel: "WhatsApp",
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
  loading: "Загружаем Яндекс-Карты и выделяем районы СЗАО…",
  errorTitle: "Карта временно не загрузилась",
  errorDescription: "Район можно проверить по телефону.",
};
