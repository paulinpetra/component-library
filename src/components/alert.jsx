import { FaExclamation, FaInfo } from "react-icons/fa6";

const Alert = ({ color = "info", children, icon }) => {
  const colorClasses = {
    info: "bg-yellow-200 text-gray-900",
    warning: "bg-red-200 text-gray-900",
  };

  const colorClass = colorClasses[color];

  const iconClasses = {
    info: FaInfo,
    warning: FaExclamation,
  };

  const iconClass = color !== "warning" ? "text-gray-900" : "";

  return (
    <div className={`p-4 m-2 rounded ${colorClass} max-w-md`}>
      <div className="flex items-center">
        <span className={`fas mr-2 ${iconClass}`}>
          {icon || iconClasses[color]()}
        </span>
        <span>{children}</span>
      </div>
    </div>
  );
};

export default Alert;
