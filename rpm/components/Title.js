import React from "react";
import Link from "next/link";

import { makeStyles } from "@material-ui/core/styles";
import Box from '@mui/material/Box';

import Logo from "../assets/logo.jpeg"

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },

  link: {
    margin: theme.spacing(3, 3, 3, 3),

    "&:hover": {
      opacity:"0.2",
      cursor: "pointer",
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Link  passHref href="/">
      <Box
        className={classes.link}
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 300, md: 250 },
          borderRadius:70,
          margin:2,
        }}
        alt="logo"
        src="https://s.tmimgcdn.com/scr/800x500/119200/gym-logo-template_119261-original.jpg"
      />
      </Link>
    </React.Fragment>
  );
}
