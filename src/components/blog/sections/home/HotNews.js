import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import HotCardLeft from "./HotCardLeft";
import HotCardRight from "./HotCardRight";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  hotNews: {
    paddingRight: "5%",
    paddingLeft: "5%",
    paddingBottom: "50px",
    position: "relative",
    "&:before": {
      content: `''`,
      width: "90%",
      bottom: "20px",
      height: "4px",
      position: "absolute",
      backgroundColor: "#acdefa",
    },
  },
  title: {
    backgroundColor: "#fde314",
    color: "#ffffff",
    padding: "3px 0px 1px 60px",
    fontSize: "45px",
    marginBottom: "20px",
    position: "relative",
    "&:before": {
      content: `''`,
      position: "absolute",
      right: "-1px",
      top: "-1px",
      width: "70%",
      borderTop: "53px solid #F5F5F6",
      borderLeft: "53px solid transparent",
      "@media screen and (max-width: 1280px)": {
        width: "65%",
        borderTop: "53px solid #F5F5F6",
        borderLeft: "53px solid transparent",
      },
      "@media screen and (max-width: 1025px)": {
        width: "65%",
        borderTop: "43px solid #F5F5F6",
        borderLeft: "43px solid transparent",
      },
    },
    "@media screen and (max-width: 1025px)": {
      fontSize: "35px",
    },
  },
  hotNewsLeft: {
    position: "relative",
    "&:before": {
      content: `''`,
      width: "2px",
      right: "0px",
      height: "calc(100% - 80px)",
      position: "absolute",
      backgroundColor: "#7f61618a",
    },
  },
}));
export default function HotNews({ data }) {
  const classes = useStyles();
  return (
    <Container className={classes.hotNews}>
      <Typography variant="h1" component="h1" className={classes.title}>
        Tin nổi bật
      </Typography>
      <Grid container spacing={10}>
        <Grid item xs={12} sm={8} className={classes.hotNewsLeft}>
          <HotCardLeft data={data[0]} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <HotCardRight data={data[1]} />
          <HotCardRight data={data[2]} />
        </Grid>
      </Grid>
    </Container>
  );
}
