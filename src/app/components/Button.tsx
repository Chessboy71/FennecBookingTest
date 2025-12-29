"use client";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  price?: string;
};

const Button = ({
  children,
  variant = "primary",
  price,
  onClick,
}: ButtonProps) => {
  const primaryClasses = "bg-black text-white hover:bg-gray-900";
  const secondaryClasses =
    "bg-white/50 text-black border border-black hover:bg-white/70";

  const buttonClasses =
    variant === "primary" ? primaryClasses : secondaryClasses;

  return (
    <button
      className={`w-full flex flex-row justify-between items-center cursor-pointer py-4 px-4 rounded-full group font-medium ${buttonClasses} my-2 active:scale-95 transition-all duration-200`}
      onClick={onClick}
    >
      {variant === "primary" ? (
        <span className="flex flex-row items-center gap-2 group-hover:gap-3 transition-all duration-200">
          {children}
        </span>
      ) : (
        <div className="flex flex-row justify-between items-center w-full">
          {children}
        </div>
      )}
      <p>{price}</p>
    </button>
  );
};

export default Button;
