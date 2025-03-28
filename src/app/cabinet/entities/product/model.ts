import { Product } from "./types";

const STATIC_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Торговый стеллаж, металлический, 2000мм, красный",
    price: 40744,
    status: "В наличии",
    date: "06.02.2025",
    category: "Торговое",
    image:
      "https://idiamarket.kz/_next/image?url=%2Fapi%2Fwatermark%3Fimage%3Dhttps%253A%252F%252Ffirebasestorage.googleapis.com%252Fv0%252Fb%252Fidiamarket-25d84.appspot.com%252Fo%252Fproducts%25252Ftorgovyj-stellazh-metallicheskij-2000mm-krasnyj-010106%25252Ftorgovyj-stellazh-metallicheskij-2000mm-krasnyj-010106-1.webp%253Falt%253Dmedia%2526token%253D9f031ae5-5a73-440d-9d91-79de8ec1ed8c&w=640&q=75",
  },
  {
    id: 2,
    name: "Торговый стеллаж, металлический, 1500мм, синий",
    price: 31500,
    status: "Нет в наличии",
    date: "05.02.2025",
    category: "Холодильное",
    image:
      "https://idiamarket.kz/_next/image?url=%2Fapi%2Fwatermark%3Fimage%3Dhttps%253A%252F%252Ffirebasestorage.googleapis.com%252Fv0%252Fb%252Fidiamarket-25d84.appspot.com%252Fo%252Fproducts%25252Ftorgovyj-stellazh-metallicheskij-1500mm-antracitovo-seryj-010104%25252Ftorgovyj-stellazh-metallicheskij-1500mm-antracitovo-seryj-010104-1.webp%253Falt%253Dmedia%2526token%253D5e347c02-07af-4acb-9fbf-32a253fbfe99&w=640&q=75",
  },
  {
    id: 3,
    name: "Стеллаж складской, алюминиевый, 2500мм, белый",
    price: 45999,
    status: "Под заказ",
    date: "01.02.2025",
    category: "Складское",
    image:
      "https://idiamarket.kz/_next/image?url=%2Fapi%2Fwatermark%3Fimage%3Dhttps%253A%252F%252Ffirebasestorage.googleapis.com%252Fv0%252Fb%252Fidiamarket-25d84.appspot.com%252Fo%252Fproducts%25252Ftorgovyj-stellazh-metallicheskij-1500mm-zheltyj-010103%25252Ftorgovyj-stellazh-metallicheskij-1500mm-zheltyj-010103-1.webp%253Falt%253Dmedia%2526token%253D88b5172e-700a-48aa-a4e2-7f2b01283de7&w=640&q=75",
  },
];

export function getStaticProducts(): Product[] {
  return STATIC_PRODUCTS;
}

export function removeStaticProduct(id: number): Product[] {
  return STATIC_PRODUCTS.filter((product) => product.id !== id);
}
