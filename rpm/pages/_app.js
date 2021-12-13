import { useEffect } from "react";
import { ThemeProvider } from "@material-ui/core";
import styled from "styled-components";

import theme from "../styles/theme";

import Navbar from "../components/Navbar";
import Title from "../components/Title";
import CssBaseline from "@material-ui/core/CssBaseline";

const style = {
  backgroundColor:"black",
  height:"120vh",
};

function Meldev({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <main style={style}>
        <Title />
        <Navbar />
        <CssBaseline />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}



export default Meldev;
