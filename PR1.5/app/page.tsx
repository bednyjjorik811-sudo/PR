import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function Home() {
  return (
    <main className="mx-auto my-0 max-w-7xl bg-blush px-4 py-5 sm:my-8 sm:px-6 sm:py-6 lg:my-12 lg:w-[calc(100%-4rem)]">
      <h1 className="sr-only">Коллекция керамики</h1>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {products.map((product) => (
          <li key={product.id} className="min-w-0">
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
      <div className="mt-8 flex justify-center sm:mt-9">
        <button
          type="button"
          className="w-full cursor-pointer rounded-full bg-ocean px-8 py-3 text-xs font-semibold tracking-wide text-white uppercase transition-colors duration-200 hover:bg-ocean-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean sm:w-auto sm:px-10"
        >
          Смотреть всю коллекцию
        </button>
      </div>
    </main>
  );
}
