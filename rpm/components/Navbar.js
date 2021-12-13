import React from "react";
import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";

import SwitchLocale from "./SwitchLocale";
import useTranslations from "../hooks/use-translations";
import { getDisplayName } from "next/dist/shared/lib/utils";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },

  appBar: {
    backgroundColor:"green",
    height: "85px;",
    padding: theme.spacing(2, 2),
  },

  toolbar: {
    flexWrap: "wrap",
  },

  toolbarTitle: {
    flexGrow: 1,
    fontSize: "60px",
    color: " #006400",
    textDecoration: "none",
    fontFamily: "Arial, sans-serif",
    fontWeight: "bold",
  },

  link: {
    margin: theme.spacing(1, 1.5),
    color: " #FFF5EE",
    textDecoration: "none",
    fontSize: "20px",
    fontWeight:"bold",

    "&:hover": {
      color: "lightgrey",
      textDecoration: "underline",
      cursor: "pointer",
    },
  },

  navbar:{
    display:"flex",
    width: "100%",
    justifyContent:"space-between",
    alignItems: "center"

  }
}));

export default function Navbar() {
  const classes = useStyles();

  const { getTranslations } = useTranslations();

  return (
    <React.Fragment>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <>
          <nav className={classes.navbar}>
            <div>
            {getTranslations("navbar.navlinks").map(({ href, text }, index) => (
              <Link key={`navlink-${text}-${index}`} href={href}>
                <a className={classes.link}>{text}</a>
              </Link>
            ))}
            </div>
            <SwitchLocale />
          </nav>
          </>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
