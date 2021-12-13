import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";


import MainFeaturedPost from "../components/MainFeaturedPost";
import Cards from "../components/Cards";
import Seo from "../components/Seo";


const useStyles = makeStyles((theme) => ({
  bigbody: {
    marginTop: theme.spacing(2),
  },

  buttonStyle: {
    backgroundColor: "#4169E1",
    padding: "10px",
  },

  link: {
    textDecoration: "none",
    color: "#fff",
  },
}));

const mainFeaturedPost = {
  title: "Welcome to Meldev Holdings,",
  description:
    "Our Company holds on to many properties that are available to Rent. Feel free to contact us with any questions or if you want to book a tour for one our units",
  imgText: "main image description",
};

export default function Home() {
  const classes = useStyles();

  return (
    <Seo translationKey="home">
      <Container maxWidth="lg">
        <main className={classes.bigbody}>
          <MainFeaturedPost />
          <Cards />
        </main>
      </Container>
    </Seo>
  );
}
