import React, { SyntheticEvent } from "react";

import { Input } from "../Input";
import { Button } from "../Button";

interface FormProps {
  fields: Array<string>;
  primaryText: string;
  primaryCallback: () => any;
  secondaryText: string;
  secondaryCallback: () => any;
}

export const Form = (props: FormProps): JSX.Element => {
  const {
    fields,
    primaryText,
    primaryCallback,
    secondaryText,
    secondaryCallback,
  } = props;
  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {fields.map((field) => {
          return (
            <Input
              label={field}
              onChange={(e: SyntheticEvent) => console.log(e)}
              key={field}
            />
          );
        })}
        <div className="flex items-center justify-between">
          <Button onClick={primaryCallback}>{primaryText}</Button>
          <a
            onClick={secondaryCallback}
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            {secondaryText}
          </a>
        </div>
      </form>
    </div>
  );
};
