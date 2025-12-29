const Button = ({
  children,
  type = "primary",
  price,
}: {
  children: React.ReactNode;
  type?: "primary" | "secondary";
  price?: string;
}) => {
  const primaryClasses = "bg-black text-white hover:bg-gray-900";
  const secondaryClasses = "bg-gray-200 text-black";

  const buttonClasses = type === "primary" ? primaryClasses : secondaryClasses;

  return (
    <button
      className={`w-full flex flex-row justify-between cursor-pointer py-4 px-6 rounded-full group font-medium ${buttonClasses} my-2`}
    >
      <span className="flex flex-row gap-2 group-hover:gap-3 transition-all duration-200">
        {children}
      </span>
      <p>{price}</p>
    </button>
  );
};

export default Button;
