import React from "react";

import { Button } from "./index";

export default { title: "Button" };

export const withText = (): React.FC => {
  return <Button>Hello World</Button>;
};

export const disabled = (): React.FC => {
  return <Button disabled={true}>Disabled</Button>;
};
