// components/Button.tsx
const Button = ({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
