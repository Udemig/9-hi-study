const InputField = ({
  label,
  name,
  placeholder,
  type = "text",
  isTextarea,
  required = true,
  min,
  max,
}) => {
  return (
    <div className="flex flex-col gap-3">
      <label className="font-bold">{label}</label>
      {isTextarea ? (
        <textarea
          placeholder={placeholder}
          className="py-1 px-4 border rounded-md shadow"
          name={name}
          type={type}
          required={required}
        />
      ) : (
        <input
          placeholder={placeholder}
          className="py-1 px-4 border rounded-md shadow"
          name={name}
          type={type}
          min={min}
          max={max}
          required={required}
          step={type === "number" && "0.1"}
        />
      )}
    </div>
  );
};

export default InputField;
