import { useCallback, useEffect, useState, useMemo } from "react";
import { useRouter } from "next/router";

import en from "..//translations/en.json";
import fr from "..//translations/fr.json";

const LANGUAGES = {
  en,
  fr,
};

const objectPath = (path, object) =>
  path.reduce((reducedObject, pathname) => reducedObject[pathname], object);

const TEMPLATE_STRING_MATCH = /<%= (.*?) %>/g;

const templateString = (string, variables) =>
  string.replace(
    TEMPLATE_STRING_MATCH,
    (match) => variables[match.replace(/<%= /g, "").replace(/ %>/g, "")] || ""
  );

export default function useTranslations() {
  const { locale } = useRouter();

  const selectedLanguage = useMemo(() => LANGUAGES[locale], [locale]);

  const getTranslations = useCallback(
    (path, variables) => {
      const translation = objectPath(path.split("."), selectedLanguage);

      if (!translation) {
        throw new Error(`Translation at path ${path} not found`);
      }

      const hasTemplate = TEMPLATE_STRING_MATCH.test(translation);
      if (hasTemplate && !variables) {
        throw new Error("Translation template string has missing variables");
      }
      if (variables) {
        return templateString(translation, variables);
      }

      return translation;
    },
    [selectedLanguage]
  );

  return { getTranslations };
}
