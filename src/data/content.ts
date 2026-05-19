import { siteConfig } from "@/data/site";

export const heroContent = {
  badge: "Москва, СЗАО · частный мастер",
  title: "Аварийное вскрытие замков в СЗАО",
  description: "Сергей открывает двери, авто, гаражи и сейфы. Цена и право доступа — до начала работы.",
  primaryCta: "Позвонить мастеру",
  secondaryCta: "Смотреть Avito",
  mediaChips: [`${siteConfig.proof.rating} на Avito`, "СЗАО"],
  mediaCaption: "Фото с выезда",
  trustLine: `${siteConfig.proof.rating} на Avito · ${siteConfig.proof.reviews} · ${siteConfig.proof.since.replace("на Avito ", "")}`,
  trustItems: ["цена до начала", "доступ проверяем", "выезд по СЗАО"],
};

export const servicesContent = {
  label: "Услуги",
  title: "Что открыть",
  description: "Скажите, что нужно открыть — цену уточнят по телефону.",
  fullListLabel: "Показать полный список работ",
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
  description: "Выезд по СЗАО. Цену Сергей называет до работы.",
  imageAlt: "Сергей - мастер по замкам из Avito",
  callCta: "Позвонить",
  avitoCta: "Профиль на Avito",
  facts: [
    { label: "Статус", value: "частный исполнитель" },
    { label: "Зона", value: "Москва, СЗАО" },
    { label: "Формат", value: "без офиса, выездной сервис" },
  ],
};

export const faqContent = {
  label: "FAQ",
  title: "Частые вопросы",
  description: "Цена, документы и аккуратное открытие.",
  callHint: "Перед звонком достаточно знать район и что нужно открыть.",
};

export const finalCtaContent = {
  title: "Нужно открыть замок?",
  description: "Позвоните Сергею: он уточнит ситуацию и цену.",
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
  loading: "",
  errorTitle: "Карта временно недоступна",
  errorDescription: "Район можно проверить по телефону.",
};
