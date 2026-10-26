import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Ваш продукт здесь</h1>
      <p>Краткое описание преимуществ</p>
      <button className={styles.cta}>Попробовать</button>
    </section>
  );
}
