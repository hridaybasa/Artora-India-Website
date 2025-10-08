interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "font-semibold transition-all duration-300 hover:scale-105 active:scale-95";

  const variantStyles = {
    primary:
      "bg-purple-400 text-black hover:bg-purple-300 shadow-lg hover:shadow-purple-400/50",
    secondary: "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm",
    outline:
      "border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-lg",
    lg: "px-8 py-4 text-lg rounded-xl",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
}
