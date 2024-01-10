const Button = ({
  color = "blue",
  size = "small",
  disabled = false,
  children,
}) => {
  const colorClasses = {
    blue: "bg-blue-500 text-white",
    red: "bg-red-500 text-white",
    green: "bg-green-500 text-white",
  };

  const colorClass = colorClasses[color];

  const sizeClasses = {
    small: "px-2 py-1",
    medium: "px-4 py-2",
    large: "px-6 py-4",
  };

  const sizeClass = sizeClasses[size];

  const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      className={`rounded ml-4 ${colorClass} ${sizeClass} ${disabledClass}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
