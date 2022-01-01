import { FC } from "react";

interface Props {
  placeholder: string;
  type: string;
  value: string;
  handleOnChange: (e: any) => void;
  inputName: string;
  handleOnBlur: (e: any) => void;
}

const Input: FC<Props> = ({
  placeholder,
  type,
  value,
  handleOnChange,
  inputName,
  handleOnBlur,
}) => {
  return (
    <div className="input__container">
      <label htmlFor={inputName}>{inputName}</label>
      <input
        name={inputName}
        placeholder={placeholder}
        value={value}
        type={type}
        onBlur={handleOnBlur}
        onChange={(e) => handleOnChange(e)}
      />
    </div>
  );
};

export default Input;
