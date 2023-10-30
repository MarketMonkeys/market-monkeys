import Image from "next/image";
import styles from "./Footer.module.css";
import NavBar from "../NavBar/NavBar";
import SocialMediaButton from "../SocialMediaButton/SocialMediaButton";
import InstagramIcon from "../Icons/InstagramIcon";
import TelegramIcon from "../Icons/TelegramIcon";
import FacebookIcon from "../Icons/FacebookIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import ScrollButton from "./components/ScrollButton/ScrollButton";

const HeaderLogo = () => {
  return (
    <h1 className={styles.footerLogo}>
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

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p className={styles.email}>admin@market-monkeys.com</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "320px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <HeaderLogo />
            <span className={styles.info}>©All rights reserved 2023</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              paddingTop: "20px",
            }}
          >
            <NavBar />
            <div>
              <h5 className={styles.socialTitle}>We in Social Media</h5>
              <div
                style={{
                  display: "flex",
                  width: "300px",
                  justifyContent: "space-between",
                }}
              >
                <SocialMediaButton Icon={InstagramIcon} />
                <SocialMediaButton Icon={TelegramIcon} />
                <SocialMediaButton Icon={FacebookIcon} />
                <SocialMediaButton Icon={LinkedinIcon} />
              </div>
            </div>
            <span className={styles.info}>Privacy Policy</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-end",
              paddingTop: "20px",
            }}
          >
            <div className={styles.contacts}>
              <div
                className={styles.numberContact}
                style={{ marginBottom: "20px" }}
              >
                <a href="tel:+48-511-525-892">+48 511 525 892</a>
                <span className={styles.numberContactCountry}>PL</span>
              </div>
              <div className={styles.numberContact}>
                <a href="tel:+38-099-986-72-20">+38 099 986 72 20</a>
                <span className={styles.numberContactCountry}>UA</span>
              </div>
            </div>
            <ScrollButton />
            <span className={styles.info} style={{ alignSelf: "flex-end" }}>
              Terms of Use
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
