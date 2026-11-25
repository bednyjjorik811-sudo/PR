export interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}

export const products: Product[] = [
  {
    id: 1,
    image: '/images/plate-deep.jpg',
    title: 'тарелка глубокая',
    description: 'тарелка диаметром 30 см с высокими бортиками',
    price: 2500,
  },
  {
    id: 2,
    image: '/images/mug.jpg',
    title: 'кружка',
    description: 'кружка объёмом 350 мл для самого вкусного кофе',
    price: 2000,
  },
  {
    id: 3,
    image: '/images/vase.jpg',
    title: 'ваза',
    description: 'ваза объёмом 2 литра для ваших ярких букетов',
    price: 4000,
  },
  {
    id: 4,
    image: '/images/plate-flower.jpg',
    title: 'тарелка объемная',
    description: 'блюдце диаметром 20 см под разные вкусности',
    price: 3500,
  },
];
