import { SVGProps } from "react";
import styles from "./SocialMediaButton.module.css";

interface SocialMediaButtonProps {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element | null;
}
const SocialMediaButton = ({ Icon, ...props }: SocialMediaButtonProps) => {
  return (
    <button className={styles.button} {...props}>
      <Icon className={styles.icon} />
    </button>
  );
};

export default SocialMediaButton;
