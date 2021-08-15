import React from "react";
import { Link } from "react-router-dom";
import { Container, Box, Typography, Button, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../assets/images/logo.PNG";
import { componentsRoutes } from "../../common/routes";
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
        <Link to={componentsRoutes.home.path}>
          <Button variant="contained" color="primary">
            Start
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Home;
