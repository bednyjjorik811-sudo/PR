import styles from "./Header.module.css";

const nav = ["Men", "Women", "Kids", "Beauty"];
const topLinks = ["Download App", "Track Order", "Help"];

const actions = [
  {
    label: "Search",
    icon: (
      <>
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </>
    ),
  },
  {
    label: "Login",
    icon: (
      <>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </>
    ),
  },
  {
    label: "Wishlist",
    icon: (
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    ),
  },
  {
    label: "Cart (0)",
    icon: (
      <>
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </>
    ),
  },
];

export default function Header() {
  return (
    <>
      <div className={styles.topbar}>
        <span>Free delivery on orders above ₹999</span>
        <ul className={styles.topLinks}>
          {topLinks.map((link) => (
            <li key={link}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          {nav.map((item) => (
            <a key={item} href="#products">
              {item}
            </a>
          ))}
        </nav>
        <a href="#" className={styles.logo}>
          GAZU
        </a>
        <ul className={styles.actions}>
          {actions.map((action) => (
            <li key={action.label}>
              <a href="#" className={styles.action}>
                <svg
                  className={styles.icon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {action.icon}
                </svg>
                <span className={styles.actionLabel}>{action.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </header>
    </>
  );
}
