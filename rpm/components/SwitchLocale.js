import { useMemo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";

const localesMapping = {
  fr: { title: "En", newLocale: "en" },
  en: { title: "Fr", newLocale: "fr" },
};
const useStyles = makeStyles((theme) => ({
 

  link: {
    margin: theme.spacing(1, 1.5),
    color: "#FFF5EE",
    fontSize: "16px",
    textDecoration:"none",
    fontWeight:"bold",

    "&:hover": {
      color: "lightgrey",
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
}));

export default function SwitchLocale() {

  const classes= useStyles();
  const { locale, pathname, query } = useRouter();
  const { title, newLocale } = useMemo(() => localesMapping[locale], [locale]);

  return (
    <Link  href={{ pathname, query }} locale={newLocale}>
      <a className={classes.link}>
      {title}
      </a>
    </Link>
  );
}
