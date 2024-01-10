const Card = ({ href, imgAlt, imgSrc, children }) => {
  return (
    <a href={href} className="no-underline">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden m-4 hover:shadow-lg transition duration-500 ease-in-out">
        <div className="flex">
          <div className="flex-shrink-0">
            <img
              className="h-48 w-full object-cover"
              src={imgSrc}
              alt={imgAlt}
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {children}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
