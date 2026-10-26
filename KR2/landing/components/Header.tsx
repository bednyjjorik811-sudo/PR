import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.logo}>Landing</span>
      <nav className={styles.nav}>
        <a href="#features">Возможности</a>
        <a href="#contacts">Контакты</a>
      </nav>
    </header>
  );
}
