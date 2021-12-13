import { RENTALS } from "./rentals.groq";
import client from "../sanity-client";
import Router from "next/router";

export async function getRentals() {
  return await client.fetch(RENTALS.ALL, { lang: Router.locale });
}

export async function getRentalItem(variables) {
  return await client.fetch(RENTALS.ITEM, {
    lang: Router.locale,
    ...variables,
  });
}
