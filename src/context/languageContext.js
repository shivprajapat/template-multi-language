import React, { createContext, useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import Arabic from "../lang/ar.json";
import English from "../lang/en.json";

export const LanguageContext = createContext();

const preferredLanguage = sessionStorage.getItem("preferredLanguage");

const userLocale = preferredLanguage || "en";

let lang;
if (userLocale === "en") {
  lang = English;
} else if (userLocale === "ar") {
  lang = Arabic;
}

export const LanguageContextWrapper = (props) => {
  const [locale, setLocale] = useState(userLocale);
  const [messages, setMessages] = useState(lang);

  useEffect(() => {
    if (locale === "ar") {
      document.dir = "rtl";
    } else {
      document.dir = "ltr";
    }
  }, [locale]);

  function selectLanguage(e) {
    const newLocale = e.target.value;
    setLocale(newLocale);
    if (newLocale === "en") {
      sessionStorage.setItem("preferredLanguage", newLocale);
      setMessages(English);
      document.dir = "ltr";
    } else if (newLocale === "ar") {
      sessionStorage.setItem("preferredLanguage", newLocale);
      setMessages(Arabic);
      document.dir = "rtl";
    }
  }

  return (
    <LanguageContext.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={messages} locale={locale} defaultLocale="en">
        {props.children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};
