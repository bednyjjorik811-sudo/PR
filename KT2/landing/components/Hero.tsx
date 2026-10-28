import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <p className={styles.tagline}>
        Fashion
        <br />
        that moves
        <br />
        with you.
      </p>
      <h1 className={styles.title}>GAZU</h1>
      <Image
        className={styles.model}
        src="/hero-model.png"
        alt=""
        width={805}
        height={1603}
        priority
      />
      <div className={styles.actions}>
        <a href="#products" className={styles.cta}>
          Shop now
        </a>
        <a href="#products" className={styles.link}>
          Explore new in
        </a>
      </div>
      <p className={styles.collection}>
        New
        <br />
        Collection
        <br />
        2024
      </p>
    </section>
  );
}
