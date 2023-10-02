import Image from "next/image";
import NavBar from "../NavBar/NavBar";
import styles from "./Header.module.css";
import LinkButton from "../LinkButton/LinkButton";

const HeaderLogo = () => {
  return (
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
  );
};

const Header = () => {
  return (
    <header className={styles.header}>
      <NavBar />
      <HeaderLogo />
      <div style={{ display: "flex" }}>
        <LinkButton
          variant="secondary"
          href="/"
          style={{ marginRight: "20px" }}
        >
          En
        </LinkButton>
        <LinkButton variant="primary" href="/">
          Let&apos;s Talk
        </LinkButton>
      </div>
    </header>
  );
};

export default Header;
