import Image from "next/image";
import styles from "./page.module.css";
import BlueBlock from "@/pages/About/BlueBlock/BlueBlock";

export default function About() {
  return (
    <section>
      <div
        style={{
          width: "100%",
          height: "770px",
          position: "absolute",
          top: "0",
          left: "0",
        }}
      >
        <Image
          src="/images/about-bg-1200.png"
          alt="About bg"
          className={styles.imgSmall}
          priority={true}
          fill={true}
        />
        <Image
          src="/images/about-bg-1920.png"
          alt="About bg"
          className={styles.imgLarge}
          priority={true}
          fill={true}
        />
      </div>
      <div className={styles.contentImgWrapper}>
        <h1>About</h1>
      </div>
      <BlueBlock />
    </section>
  );
}
