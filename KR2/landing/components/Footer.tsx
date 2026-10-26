import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="contacts" className={styles.footer}>
      <p>© 2026 Landing</p>
      <ul className={styles.links}>
        <li>
          <a href="#">Политика конфиденциальности</a>
        </li>
        <li>
          <a href="mailto:hello@example.com">hello@example.com</a>
        </li>
      </ul>
    </footer>
  );
}
