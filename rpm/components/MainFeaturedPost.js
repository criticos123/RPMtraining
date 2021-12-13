import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import styled from "styled-components"
import useTranslations from "../hooks/use-translations";


const backgroundstyles={

  height: '35vh',
  border:"2px solid #FFFAF0",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundImage:`linear-gradient(rgba(0.1,0.1,0.1,0.3), rgba(0.1,0.1,0.1,0.2)),url(https://media1.popsugar-assets.com/files/thumbor/7NvXrUxR1XBjpYeKPhI-ywNH63g/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/05/14/030/n/1922729/6978f89d348efe66_ClassPass_Zoom-background_4/i/Weightlifting-Gym-Zoom-Background.jpg)`,

};

const textstyles={

    color: "#FFFAF0",
    fontWeight: "bold",
    textShadow: "black 4px 4px 4px ",
    marginBottom:"10px",
    padding:"10px",

};

export default function MainFeaturedPost() {

  const { getTranslations } = useTranslations();

  return (
    <Grid>
      <Card style={backgroundstyles} >
        <CardContent sx={{ flex: 2 }}>
          <Typography style={textstyles} component="h2" variant="h4">
            {getTranslations("homepage.header")}
          </Typography>
          <Typography style={textstyles} variant="subtitle1" paragraph>
            {getTranslations("homepage.body")}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
