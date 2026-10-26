import styles from "./Features.module.css";

const features = [
  { title: "Быстро", text: "Описание первого преимущества." },
  { title: "Надёжно", text: "Описание второго преимущества." },
  { title: "Удобно", text: "Описание третьего преимущества." },
];

export default function Features() {
  return (
    <section id="features" className={styles.features}>
      <h2 className={styles.title}>Возможности</h2>
      <ul className={styles.grid}>
        {features.map((feature) => (
          <li key={feature.title} className={styles.card}>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
