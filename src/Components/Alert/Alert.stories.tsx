import React from "react";

import { Alert } from "./index";

export default { title: "Alert" };

export const primary = (): React.ReactNode => {
  return (
    <Alert
      title="Primary"
      message="This is a primary alert"
      variant="primary"
    />
  );
};

export const secondary = (): React.ReactNode => {
  return (
    <Alert
      title="Secondary"
      message="This is a secondary alert"
      variant="secondary"
    />
  );
};

export const success = (): React.ReactNode => {
  return (
    <Alert
      title="Success"
      message="This is a success alert"
      variant="success"
    />
  );
};

export const warning = (): React.ReactNode => {
  return (
    <Alert
      title="Warning"
      message="This is a warning alert"
      variant="warning"
    />
  );
};

export const danger = (): React.ReactNode => {
  return (
    <Alert title="Danger" message="This is a danger alert" variant="danger" />
  );
};
