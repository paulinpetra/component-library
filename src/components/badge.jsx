const Badge = ({ color = "cyan", size = "sm", children, icon: Icon }) => {
  const colorClasses = {
    cyan: "bg-cyan-200 text-cyan-900",
    fuchsia: "bg-fuchsia-200 text-fuchsia-900",
    orange: "bg-orange-200 text-orange-900",
  };

  const colorClass = colorClasses[color];

  const sizeClasses = {
    sm: "px-2 py-1",
    xs: "px-1 py-0.5",
  };

  const sizeClass = sizeClasses[size];

  return (
    <div
      className={`rounded ml-4 ${colorClass} ${sizeClass} max-w-fit inline-block`}
    >
      <div className="flex items-center">
        <span>{Icon && <Icon className="mr-2" />}</span>
        <span>{children}</span>
      </div>
    </div>
  );
};

export default Badge;
