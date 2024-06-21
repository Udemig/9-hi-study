import { MouseEventHandler } from "react";

type Props = {
  title: string;
  designs?: string;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  icon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  title,
  designs,
  disabled,
  type,
  icon,
  handleClick,
}: Props) => {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      type={type}
      className={`custom-btn bg-primary-blue rounded-full hover:bg-blue-800 text-white ${designs}`}
    >
      <span className="flex-1">{title}</span>

      {icon && <img className="w-6 h-6" src={icon} alt="" />}
    </button>
  );
};

export default Button;
