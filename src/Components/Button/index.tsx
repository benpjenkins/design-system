import React from "react";

import "../../assets/main.css";
import defaultTheme from "../../constants";

interface ButtonProps {
  children?: string;
  variant?: string;
  disabled?: boolean;
  onClick: () => any;
}

export const Button = (props: ButtonProps): JSX.Element => {
  const { children, variant, onClick } = props;
  return (
    <button
      onClick={onClick}
      className={`bg-${defaultTheme[variant] || "blue"}-500 hover:bg-${
        defaultTheme[variant] || "blue"
      }-700 text-white font-bold py-2 px-4 rounded`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
