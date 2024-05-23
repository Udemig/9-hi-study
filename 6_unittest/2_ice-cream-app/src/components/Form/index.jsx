import { useState } from "react";

const Form = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <form className="mb-5 d-flex jutify-content-center align-items-center gap-3">
      <input
        onChange={(e) => setIsChecked(e.target.checked)}
        id="terms"
        type="checkbox"
        className="form-check-input"
      />

      <div className="terms-wrapper">
        <p
          style={{
            visibility: isHover ? "visible" : "hidden",
          }}
        >
          Size gerçekten bir şey teslim etmeyeceğiz
        </p>
        <label htmlFor="terms">Koşulları okudum ve kabul ediyorum</label>
      </div>

      <button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        disabled={!isChecked}
        className="btn btn-primary"
      >
        Siparişi Onayla
      </button>
    </form>
  );
};

export default Form;
