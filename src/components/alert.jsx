import { FaExclamation, FaInfo } from "react-icons/fa6";

const Alert = ({ color = "info", children, icon }) => {
  const colorClasses = {
    info: "bg-yellow-200 text-gray-900",
    warning: "bg-red-200 text-gray-900",
    success: "bg-green-200 text-gray-900",
    danger: "bg-red-500 text-white",
  };

  const colorClass = colorClasses[color];

  const IconComponent =
    icon ||
    (() => {
      switch (color) {
        case "warning":
          return <FaExclamation />;
        case "success":
          return <span className="fas fa-check-circle" />;
        case "danger":
          return <span className="fas fa-bell" />;
        default:
          return <FaInfo />;
      }
    })();

  return (
    <div className={`p-4 m-2 rounded ${colorClass} max-w-md`}>
      <div className="flex items-center">
        <span className="mr-2">{IconComponent}</span>
        <span>{children}</span>
      </div>
    </div>
  );
};

export default Alert;
