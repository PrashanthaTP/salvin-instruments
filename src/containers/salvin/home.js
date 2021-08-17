import React from "react";
import { Link } from "react-router-dom";
import { Container, Box, Typography, Button, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../assets/images/logo.PNG";
import clipPathBg from "../../assets/images/buttonClippath.svg";
import { containersRoutes } from "../../common/routes";
const homeStyles = makeStyles({
  centered: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "100%",
    minWidth: "100%",
  },
  cover: {
    height: "100%",
    width: "100%",
  },
  wordcase: {
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  uppercase: {
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  button: {
    position: "relative",
    borderRadius: "1rem",
    width: "6rem",
    overflow: "hidden",
    transition: "transform 1s ease",

    "&:hover $buttonClipPath": {
      transform: "translateY(2px)",
    },
  },
  buttonClipPath: {
    background: `url(${clipPathBg}) no-repeat`,
    position: "absolute",
    top: "0",
    width: "100%",
    height: "100%",
    transform: "translateY(-20px)",
    transition: "transform 1s ease-in",
  },
  buttonText: {
    zIndex: "2",
    // transform: "translateY(-60px)",
  },
  onHover: {
    transform: "translateY(0px)",
  },
});
const Home = () => {
  const classes = homeStyles();

  return (
    <Container className={classes.cover}>
      <Box className={classes.centered}>
        <Paper variant="outlined">
          <img src={Logo} alt="Salvin Instruments Logo" />
        </Paper>

        <Typography
          variant="h2"
          component="h2"
          display="block"
          gutterBottom
          className={classes.uppercase}
        >
          csr csi
        </Typography>
        <Typography
          variant="h4"
          component="h4"
          display="block"
          gutterBottom
          className={classes.wordcase}
        >
          user manual
        </Typography>
        <Link
          to={containersRoutes.manual.path}
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            <span className={classes.buttonClipPath}></span>
            <span className={classes.buttonText}>start</span>
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Home;
