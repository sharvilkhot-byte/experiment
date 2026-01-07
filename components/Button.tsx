
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'yellow' | 'red';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-black rounded-2xl transition-all press-effect uppercase tracking-widest active:translate-y-1";
  
  const variants = {
    primary: "bg-duo-green text-white shadow-duo-green hover:bg-opacity-90",
    secondary: "bg-duo-blue text-white shadow-duo-blue hover:bg-opacity-90",
    yellow: "bg-duo-yellow text-white shadow-duo-yellow hover:bg-opacity-90",
    red: "bg-duo-red text-white shadow-duo-red hover:bg-opacity-90",
    ghost: "bg-transparent text-duo-blue border-none shadow-none hover:bg-gray-100 dark:hover:bg-gray-800",
    outline: "bg-white dark:bg-gray-800 text-gray-400 border-2 border-duo-border dark:border-gray-700 shadow-duo-white dark:shadow-duo-dark hover:bg-gray-50 dark:hover:bg-gray-700"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
