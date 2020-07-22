import React, { SyntheticEvent } from "react";

import { Input } from "./index";

const handleChange = (e: SyntheticEvent) => console.log(e.target);

export default { title: "Input" };

export const test = (): React.ReactNode => {
  return <Input label="Test" onChange={handleChange} />;
};
