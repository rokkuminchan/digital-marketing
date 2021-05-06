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
  root1: {
    "@media screen and (min-width: 768px)": {
      display: "grid",
      flexDirection: "row",
      gridTemplateColumns: "1fr 2fr",
    },
  },
  left: {
    marginBottom: "15px",
    "@media screen and (max-width: 767px)": {
      marginBottom: "-30px",
    },
  },
  right: {
    padding: "0 0 15px 15px",
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
    "@media screen and (min-width: 768px)": {
      padding: "0 15px 15px 15px",
    },
  },
  titleLink: {
    textDecoration: "none",
    display: "block",
  },
  title: {
    color: "#1E88E5",
    textAlign: "justify",
    fontFamily:"'Roboto', sans-serif",
    "@media screen and (max-width: 767px)": {
      fontSize: "18px",
      fontWeight: 700,
      paddingTop:"1em",
    },
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
      <div className={classes.root1}>
        <div classes={classes.left}>
          <Alink to={`/blog/${data.id}`} className={classes.titleLink}>
            <Image
              className={classes.img}
              src={data.img.src}
              alt={data.img.alt}
            />
          </Alink>
        </div>
        <div classes={classes.right}>
          <div className={classes.grid}>
            <div>
              {desktopViewport ? (
                <CardSummary data={data} />
              ) : (
                <Alink to={`/blog/${data.id}`} className={classes.titleLink}>
                  <Typography className={classes.title}>{data.news}</Typography>
                </Alink>
              )}
            </div>
            <div classes={{ item: classes.iconButton }}>
              <CardMeta id={data.id} news={data.news} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
