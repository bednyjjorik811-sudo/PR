import Image from 'next/image';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

const priceFormatter = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  maximumFractionDigits: 0,
});

export default function ProductCard({ product }: ProductCardProps) {
  const { image, title, description, price } = product;

  return (
    <article className="flex h-full w-full flex-col rounded-3xl bg-white p-4 shadow-sm">
      <div className="aspect-square overflow-hidden rounded-2xl bg-porcelain">
        <Image
          src={image}
          alt={title}
          width={800}
          height={800}
          sizes="(min-width: 1280px) 249px, (min-width: 1024px) 22vw, (min-width: 640px) 47vw, 100vw"
          className="h-full w-full object-contain"
        />
      </div>
      <h2 className="mt-4 text-xl leading-tight font-bold">{title}</h2>
      <p className="mt-2 mb-2 text-sm leading-snug text-gray-600">{description}</p>
      <p className="mt-auto text-sm">{priceFormatter.format(price)}</p>
      <button
        type="button"
        aria-label={`в корзину: ${title}`}
        className="mt-4 w-full cursor-pointer rounded-full bg-ocean px-6 py-2.5 text-xs font-semibold tracking-wide text-white uppercase transition-colors duration-200 hover:bg-ocean-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean sm:w-auto sm:self-start"
      >
        в корзину
      </button>
    </article>
  );
}
