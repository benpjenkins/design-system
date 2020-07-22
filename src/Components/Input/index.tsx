import React, { SyntheticEvent } from "react";

interface InputProps {
  label: string;
  onChange: (event: SyntheticEvent) => void;
}

export const Input = (props: InputProps): JSX.Element => {
  const { label, onChange } = props;
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={label.toLowerCase()}
        type="text"
        placeholder={label}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
