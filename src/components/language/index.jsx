import { FormattedMessage } from "react-intl";
import React, { useContext, useState } from "react";
import { LanguageContext } from "../../context/languageContext";

const Language = () => {
  const { locale, selectLanguage } = useContext(LanguageContext);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div dir={locale === "ar" ? "rtl" : "ltr"}>
      <div>
        <select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={locale}
          onChange={selectLanguage}
          defaultValue={locale}
          
        >
          <option value="en">
            <FormattedMessage id="en" />
          </option>
          <option value="ar">
            <FormattedMessage id="ar" />
          </option>
        </select>
      </div>
    </div>
  );
};

export default Language;
