import Image from 'next/image';
import NavBar from '../NavBar/NavBar';
import styles from './Header.module.css';
import LinkButton from '../LinkButton/LinkButton';
import Link from 'next/link';

const HeaderLogo = () => {
  return (
    <Link href={'/'}>
      <h1 className={styles.headerLogo}>
        <span>Market</span>
        <Image
          src="/images/logo.svg"
          alt="Market Monkeys"
          width={46}
          height={60}
        />
        <span>Monkeys</span>
      </h1>
    </Link>
  );
};

const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderLogo />
      <NavBar />
      {/* <div style={{ display: 'flex' }}> */}
      {/* <LinkButton variant="main" href="/" style={{ marginRight: "20px" }}>
          En
        </LinkButton> */}
      <LinkButton
        variant="secondary"
        href="#form"
        style={{ width: '180px', textAlign: 'center' }}
      >
        Let&apos;s Talk
      </LinkButton>
      {/* </div> */}
    </header>
  );
};

export default Header;
