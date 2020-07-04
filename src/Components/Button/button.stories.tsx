import React from "react";

import { Button } from "./index";

export default { title: "Button" };

export const withText = (): React.ReactNode => {
  return <Button>Hello World</Button>;
};

export const disabled = (): React.ReactNode => {
  return <Button disabled={true}>Disabled</Button>;
};
