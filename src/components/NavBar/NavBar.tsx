import Link from "next/link";
import styles from "./NavBar.module.css";
import { navigationLinks } from "@/common/mocks/navbar";

const NavBar = () => {
  return (
    <nav>
      <ul className={styles.navbarList}>
        {navigationLinks.map(({ title, link }) => (
          <li key={link}>
            <Link className={styles.link} href={link}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
