import Form from "@/components/Form/Form";
import Image from "next/image";
import styles from "./FormSection.module.css";

const FormSection = () => {
  return (
    <section className={styles.wrapper}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex" }}>
          <Image
            src="/images/digital-marketing-phone.svg"
            alt="Digital Marketong Phone"
            draggable={false}
            width={320}
            height={488}
          />
          <Form />
        </div>
      </div>
    </section>
  );
};

export default FormSection;
