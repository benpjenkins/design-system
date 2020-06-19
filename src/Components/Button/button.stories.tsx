import React from "react";
import { Button } from "./index";

export default { title: "Button" };

export const withText = (): any => {
  return <Button>Hello World</Button>;
};

export const disabled = (): any => {
  return <Button disabled={true}>Disabled</Button>;
};
