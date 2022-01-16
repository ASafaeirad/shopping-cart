interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
}

const Input: React.FC<Props> = ({ label, ...props }) => {
  return (
    <div className="input__container">
      <label htmlFor={props.name}>{label}</label>
      <input {...props} />
    </div>
  );
};

export default Input;
