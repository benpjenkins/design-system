import React from "react";

import { Button } from "./index";

export default { title: "Button" };

export const primaryDefault = (): React.ReactNode => {
  return (
    <Button variant="primary" onClick={() => console.log("clicked")}>
      Primary/Default
    </Button>
  );
};

export const secondary = (): React.ReactNode => {
  return (
    <Button variant="secondary" onClick={() => console.log("clicked")}>
      Secondary
    </Button>
  );
};

export const success = (): React.ReactNode => {
  return (
    <Button variant="success" onClick={() => console.log("clicked")}>
      Success
    </Button>
  );
};

export const warning = (): React.ReactNode => {
  return (
    <Button variant="warning" onClick={() => console.log("clicked")}>
      Warning
    </Button>
  );
};

export const danger = (): React.ReactNode => {
  return (
    <Button variant="danger" onClick={() => console.log("clicked")}>
      Danger
    </Button>
  );
};
// export const disabled = (): React.ReactNode => {
//   return <Button>Disabled</Button>;
// };
