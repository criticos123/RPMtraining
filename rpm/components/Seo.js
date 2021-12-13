import { NextSeo } from "next-seo";

import useTranslations from "../hooks/use-translations";

export default function Seo({ children, translationKey }) {
  const { getTranslations } = useTranslations();

  const title = getTranslations(`seo.title.${translationKey}`);
  const description = getTranslations(`seo.description.${translationKey}`);

  return (
    <>
      <NextSeo title={`RPM | ${title}`} description={description} />
      {children}
    </>
  );
}
