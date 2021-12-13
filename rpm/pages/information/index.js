import React from "react";

import Container from "@material-ui/core/Container";


import Seo from "../../components/Seo";

import useTranslations from "../../hooks/use-translations";


export default function Information() {

  const { getTranslations } = useTranslations();

  return (
    <Seo translationKey="information">
      <Container maxWidth="xs">
      
      </Container>
    </Seo>
  );
}
