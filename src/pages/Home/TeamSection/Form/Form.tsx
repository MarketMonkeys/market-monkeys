import Input from "@/components/Input/Input";
import styles from "./Form.module.css";
import UserIcon from "@/components/Icons/UserIcon";

const Form = () => {
  return (
    <div style={{ padding: "0 0 120px 88px" }}>
      <h2 className={styles.heading}>get in touch</h2>
      <form>
        <Input placeholder="Name" type="text" name="name" Icon={UserIcon} />
      </form>
    </div>
  );
};

export default Form;
