import Link from "next/link";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import useTranslations from "../hooks/use-translations";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: "60px",
  },

  buttons: {
    textDecoration: "underline",
    color: "#fff",
  },
}));
const cardstyle = {
  backgroundColor:"black",
  height:"100%",
  color:"#FFF5EE",
  border:"10px solid #FFF5EE",

};

const textstyle={
  fontWeight:"bold",
};

export default function Cards() {
  const classes = useStyles();

  const { getTranslations } = useTranslations();
  /* eslint-disable */
  return (
    <div>
      {getTranslations("homepage.cards").map(
        ({ title, href, linkText }, index) => (
          <Card
            key={`card-${title}-${index}`}
            className={classes.main}
            sx={{ maxWidth: 345 }}
            style={cardstyle}
          >
            <CardContent>
              <Typography style={textstyle} gutterBottom variant="h5" component="div">
                {title}
              </Typography>
            </CardContent>
            <CardActions>
              <Link href={href} >
                <Button color="primary" className={classes.buttons}>{linkText}</Button>
              </Link>
            </CardActions>
          </Card>
        )
      )}
    </div>
  );
}

/* eslint-enable */
