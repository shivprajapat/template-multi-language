import React from "react";
import { FormattedMessage } from "react-intl";

const Section = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <h1>
        <FormattedMessage id="homeTitle" />
      </h1>
    </div>
  );
};

export default Section;
