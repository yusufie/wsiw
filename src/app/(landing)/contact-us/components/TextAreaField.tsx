const TextAreaField: React.FC<{
  name: string;
  required?: boolean;
  placeholder?: string;
  label: string;
}> = ({ name, required, placeholder, label }) => {
  return (
    <div className="relative ">
      <textarea
        id={name}
        name={name}
        rows={5}
        className="form-input peer max-w-[450px]"
        placeholder={placeholder}
        required={required}
      />
      <label className="form-label">{label}</label>
    </div>
  );
};

export default TextAreaField;
