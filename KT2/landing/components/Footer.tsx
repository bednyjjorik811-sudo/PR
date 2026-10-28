import styles from "./Footer.module.css";

const links = ["Help", "Track Order", "Download App"];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.logo}>GAZU</span>
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
      <p className={styles.copy}>© 2026 GAZU</p>
    </footer>
  );
}
