import Image from "next/image";
import styles from "./Products.module.css";

const products = [
  { name: "Heavyweight Sweatshirt", price: "₹2,499", image: "/product-1.jpg" },
  { name: "Graphic Tee", price: "₹1,299", image: "/product-2.jpg" },
  { name: "Essential Black Tee", price: "₹999", image: "/product-3.jpg" },
  { name: "Oversized Cream Tee", price: "₹1,199", image: "/product-4.jpg" },
];

export default function Products() {
  return (
    <section id="products" className={styles.products}>
      <div className={styles.head}>
        <h2 className={styles.title}>Best of GAZU</h2>
        <a href="#" className={styles.all}>
          View all
        </a>
      </div>
      <ul className={styles.grid}>
        {products.map((product) => (
          <li key={product.name}>
            <Image
              className={styles.image}
              src={product.image}
              alt={product.name}
              width={600}
              height={540}
            />
            <h3 className={styles.name}>{product.name}</h3>
            <p className={styles.price}>{product.price}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
