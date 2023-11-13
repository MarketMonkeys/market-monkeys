'use client';
import Link from 'next/link';
import styles from './NavBar.module.css';
import { navigationLinks } from '@/common/mocks/navbar';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className={styles.navbarList}>
        {navigationLinks.map(({ title, link }) => (
          <li key={link}>
            <Link
              className={`${styles.link} ${
                pathname === link && styles.activeLink
              }`}
              href={link}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
