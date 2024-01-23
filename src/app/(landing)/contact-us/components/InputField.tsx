interface InputFieldProps {
  name: string;
  type: string;
  required?: boolean;
  placeholder: string;
  label: string;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  type,
  required,
  placeholder,
  label,
}) => {
  return (
    <div className="relative">
      <input
        type={type}
        id={name}
        name={name}
        className="form-input peer"
        placeholder={placeholder}
        required={required}
      />
      <label className="form-label">{label}</label>
    </div>
  );
};

export default InputField;
