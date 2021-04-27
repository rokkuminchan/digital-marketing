import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Image from "../../common/Image";
import CardSummary from "./CardSummary";
import CardMeta from "../common/CardMeta";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Alink from "../../../common/ALink";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginTop: "25px",
    borderBottom: "solid 1px #DEDEDE ",
  },
  left: {
    marginBottom: "15px",
    "@media screen and (max-width: 767px)": {
      marginBottom: "-30px",
    },
  },
  right: {
    paddingBottom: "15px",
    "@media screen and (max-width: 767px)": {
      marginBottom: "0px",
    },
  },
  img: {
    width: "100%",
    objectFit: "cover",
    height: "275px",
    "@media screen and (max-width: 767px)": {
      height: "375px",
    },
    "@media screen and (max-width: 570px)": {
      height: "320px",
    },
    "@media screen and (max-width: 490px)": {
      height: "280px",
    },
    "@media screen and (max-width: 420px)": {
      height: "250px",
    },
    "@media screen and (max-width: 320px)": {
      height: "190px",
    },
    "@media screen and (min-width: 768px)": {
      paddingTop: "15%",
      paddingBottom: "15%",
    },
    "@media screen and (min-width: 900px)": {
      paddingTop: "5%",
      paddingBottom: "5%",
    },
    "@media screen and (min-width: 1280px)": {
      paddingTop: "0px",
      paddingBottom: "0px",
    },
  },
  grid: {
    "@media screen and (max-width: 767px)": {
      maxWidth: "none",
    },
  },
  titleLink: {
    textDecoration: "none",
    display: "block",
  },
  title: {
    color: "#1f65b7",
    fontSize: "18px",
    textAlign: "justify",
  },
  iconButton: {
    "@media screen and (max-width: 767px)": {
      "& > div": {
        "&:before": {
          display: "none",
        },
      },
    },
  },
}));
export default function ListNewsElement({ data }) {
  const classes = useStyles();
  const desktopViewport = useMediaQuery("(min-width:768px)");
  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={5} container classes={{ item: classes.left }}>
          <Alink to={`/blog/${data.id}`} className={classes.titleLink}>
            <Image
              className={classes.img}
              src={data.img.src}
              alt={data.img.alt}
            />
          </Alink>
        </Grid>
        <Grid item xs={12} sm={7} container classes={{ item: classes.right }}>
          <Grid
            item
            xs
            container
            direction="column"
            spacing={2}
            className={classes.grid}
          >
            <Grid item xs>
              {desktopViewport ? (
                <CardSummary data={data} />
              ) : (
                // <Alink to={`/blog/${data.id}`} className={classes.titleLink}>
                <Typography
                  className={classes.title}
                  variant="h5"
                  component="h5"
                >
                  {data.news}
                </Typography>
                //  </Alink>
              )}
            </Grid>
            <Grid item xs classes={{ item: classes.iconButton }}>
              <CardMeta id={data.id} news={data.news} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
