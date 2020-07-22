import React from "react";

import { Form } from "./index";

export default { title: "Form" };

export const Test = (): React.ReactNode => {
  return (
    <Form
      fields={["Username", "Password"]}
      primaryText="Login"
      primaryCallback={() => console.log("primary callback")}
      secondaryText="Forgot Password"
      secondaryCallback={() => console.log("secondary callback")}
    />
  );
};
