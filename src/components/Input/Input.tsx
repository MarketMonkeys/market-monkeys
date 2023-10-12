import { ChangeEvent, SVGProps, forwardRef, useId } from "react";
import styles from "./Input.module.css";

type InputType = "text" | "email" | "password";

interface InputProps {
  type: InputType;
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  placeholder?: string;
  errorMsg?: string;
  isDisabled?: boolean;
  Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element | null;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type,
      value,
      name,
      placeholder = "",
      errorMsg = "",
      isDisabled = false,
      onChange,
      Icon = null,
    },
    ref
  ) => {
    const inputId = useId();

    return (
      <div>
        <div className={styles.inputWrapper}>
          <input
            ref={ref}
            type={type}
            id={inputId}
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            disabled={isDisabled}
            className={`${styles.input} ${!!errorMsg && styles.inputError}`}
          />
          {Icon && (
            <Icon
              className={`${styles.icon} ${!!errorMsg && styles.iconError}`}
            />
          )}
        </div>
        {errorMsg && <p className={styles.error}>{errorMsg}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
