const InputField = ({ formik, label, name, type = 'text' }) => {
  return (
    <div>
      <label className="form-label">{label}</label>
      <input
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        className={`form-control ${
          formik.errors[name] && formik.touched[name] && 'is-invalid'
        }`}
        type={type}
        name={name}
      />
      <div className="feedback">{formik.errors[name]} &nbsp;</div>
    </div>
  );
};

export default InputField;
