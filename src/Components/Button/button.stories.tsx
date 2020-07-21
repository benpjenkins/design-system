import React from "react";

import { Button } from "./index";

export default { title: "Button" };

export const primaryDefault = (): React.ReactNode => {
  return <Button>Primary/Default</Button>;
};

export const secondary = (): React.ReactNode => {
  return <Button>Secondary</Button>;
};

export const disabled = (): React.ReactNode => {
  return <Button disabled={true}>Disabled</Button>;
};
