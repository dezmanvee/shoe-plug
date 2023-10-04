const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${
      backgroundColor
        ? `${backgroundColor} ${borderColor} ${textColor}`
        : "bg-coral-red text-white border-coral-red"
    }
    rounded-full`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="Arrow right icon"
          className="ml-2 w-5 h-5 rounded-full"
        />
      )}
    </button>
  );
};
export default Button;
