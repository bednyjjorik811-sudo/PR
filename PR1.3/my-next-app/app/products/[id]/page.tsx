import AddToCartButton from "./add-to-cart-button";

// Server Component: получает данные
async function getProduct(id: string) {
  // Имитация запроса к БД
  const products: Record<string, { name: string; price: number }> = {
    "1": { name: "Ноутбук", price: 75000 },
    "2": { name: "Мышь", price: 1500 },
  };

  return products[id] || null;
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return <h1>Товар не найден</h1>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Цена: {product.price} ₽</p>
      <AddToCartButton />
    </div>
  );
}
