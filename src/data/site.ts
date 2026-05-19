export const siteConfig = {
  name: "Сергей - мастер по замкам",
  shortName: "Замки СЗАО",
  masterLabel: "Сергей · мастер по СЗАО",
  statusLabel: "частный исполнитель · Avito 5,0",
  avitoUrl:
    "https://www.avito.ru/moskva/predlozheniya_uslug/vskrytie_zamkovavtomobileyseyfov_8172959479",
  avitoProfile: "Сергей - мастер по замкам",
  avitoProfileLabel: "Сергей - мастер по замкам",
  masterRating: "5,0",
  masterReviews: "6 отзывов",
  masterSince: "на Avito с 2017 года",
  masterStatus: "частный исполнитель",
  proof: {
    rating: "5,0",
    reviews: "6 отзывов",
    since: "на Avito с 2017 года",
  },
  realBusinessStatus: "частный исполнитель",
  avitoLocation: "Москва, ул. Свободы, 13/2с1А",
  metro: ["Тушинская 11–15 мин.", "Спартак 21–30 мин.", "Щукинская от 31 мин."],
  heroImage: "/images/avito/master-photo.jpg",
  profileImage: "/images/avito/listing-main.jpg",
  url: "https://locksmith-szao-niat.vercel.app",
  // TODO: заменить на реальный номер мастера.
  phone: "",
  phoneHref: "tel:+79990000000",
  phoneLabel: "Позвонить мастеру",
  email: "",
  address: "Москва, ул. Свободы, 13/2с1А · СЗАО",
  hours: "",
  openingHours: undefined,
  yandexBusinessHref: "https://yandex.ru/maps/",
  metrikaGoalCall: "call_click",
  metrikaGoalAvito: "avito_click",
  metrikaGoalMap: "map_click",
  features: {
    smartCallFab: false,
  },
};

export const navItems = [
  { label: "Сергей", href: "#avito" },
  { label: "Услуги", href: "#services" },
  { label: "Фото", href: "#cases" },
  { label: "FAQ", href: "#faq" },
];

export const mobileNavItems = [
  { label: "Сергей", href: "#avito", description: "профиль, рейтинг и данные мастера" },
  { label: "Услуги", href: "#services", description: "дверь, авто, гараж, сейф" },
  { label: "Стоимость", href: "#prices", description: "ориентир и правила расчёта" },
  { label: "Фото работ", href: "#cases", description: "фото работ и диагностика" },
  { label: "Зона", href: "#areas", description: "районы СЗАО и проверка адреса" },
  { label: "FAQ", href: "#faq", description: "цена, документы, повреждения" },
];
