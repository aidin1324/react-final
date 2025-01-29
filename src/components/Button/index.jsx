import "./index.css";

export function Button(basement) {
  const {
    className,
    variant = "primary",
    size = "md",
    type = "button",
    disabled,
    onClick,
    children,
  } = basement;
  const classes = `${className} my-button my-button--${variant} my-button--${size} my-button--${
    disabled ? "disabled" : "enabled"
  } my-button--${onClick} `;

  return (
    <button className={classes} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;