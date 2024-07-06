export const inputs = [
  {
    label: "Başlık",
    name: "name",
    placeholder: "başlık giriniz..",
  },
  {
    label: "Lokasyon",
    name: "location",
    placeholder: "lokasyon giriniz..",
  },
  {
    label: "Adres",
    name: "address",
    placeholder: "adres giriniz..",
  },
  {
    label: "Açıklama",
    name: "description",
    placeholder: "açıklama giriniz..",
    isTextarea: true,
  },
  {
    label: "Özellikler (, ile ayırınız)",
    name: "amenities",
    placeholder: "özellikleri giriniz..",
    isTextarea: true,
  },
  {
    label: "Rating",
    name: "rating",
    placeholder: "rating giriniz..",
    type: "number",
    min: 1,
    max: 5,
  },
  {
    label: "Gecelik Fiyat",
    name: "price_per_night",
    placeholder: "ücreti giriniz..",
    type: "number",
    min: 20,
    max: 9999,
  },
  {
    label: "Müsait mi?",
    name: "availability",
    type: "checkbox",
    required: false,
  },
];
