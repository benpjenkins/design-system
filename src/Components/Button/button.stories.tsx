import React from "react";
import { Button } from "./index";

export default { title: "Button" };

export const withText = (): React.FC => {
  return <Button>Hello World</Button>;
};
