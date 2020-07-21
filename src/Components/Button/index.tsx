import React from "react";
import "../../assets/main.css";

// type Variant =
//   | "primary"
//   | "secondary"
//   | "success"
//   | "warning"
//   | "danger"
//   | "info"
//   | "dark";

// interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   size?: "small" | "medium" | "large";
//   variant?: Variant;
//   // will probably remove background color once variant functionality is fleshed out
//   backgroundColor?: string;
//   disabled?: boolean;
//   theme: any;
// }

// const buttonSizes = {
//   small: {
//     height: "40px",
//     width: "140px",
//   },
// };

interface ButtonProps {
  children: string;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {children}
    </button>
  );
};

export default Button;
