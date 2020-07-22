import React from "react";
import defaultTheme from "../../constants";

interface AlertProps {
  title: string;
  message: string;
  variant?: string;
}

export const Alert = (props: AlertProps): JSX.Element => {
  const { title, message, variant } = props;
  return (
    <div
      className={`bg-${
        variant ? defaultTheme[variant] : "blue"
      }-100 border-l-4 border-${
        variant ? defaultTheme[variant] : "blue"
      }-500 text-${variant ? defaultTheme[variant] : "blue"}-700 p-4`}
      role="alert"
    >
      <p className="font-bold">{title}</p>
      <p>{message}</p>
    </div>
  );
};
