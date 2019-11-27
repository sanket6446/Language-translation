import React from "react";

// the hoc
import { withTranslation } from "react-i18next";

function MyComponent({ t }) {
  return <h1>{t("Welcome to React")}</h1>;
}

export default withTranslation()(MyComponent);
