import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Image from "../../common/Image";
import Alink from "../../../common/ALink";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    border: "none",
    overflow: "unset",
    backgroundColor: "#F5F5F6",
    "&:nth-child(1)": {
      marginBottom: "50px",
    },
  },
  img: {
    width: "100%",
    height: "210px",
    objectFit: "cover",
    "@media screen and (max-width: 1280px)": {
      height: "180px",
    },
    "@media screen and (max-width: 1150px)": {
      height: "160px",
    },
    "@media screen and (max-width: 920px)": {
      height: "150px",
    },
    "@media screen and (max-width: 870px)": {
      height: "120px",
    },
  },
  titleLink: {
    textDecoration: "none",
  },
  newsTitle: {
    fontWeight: "bold",
    color:"#1E88E5",
    display: "-webkit-box",
    boxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitLineClamp: "3",
    fontWeight:600,
    "&:hover": {
      color: "#1f65b7",
    },
    "@media screen and (max-width: 768px)": {
      fontSize:"16px",
    },
    "@media screen and (min-width: 1024px)": {
      fontSize:"18px",
      fontWeight:"700",
    },
  },
});

export default function HotCardRight(data) {
  const classes = useStyles();
  return (
    <Card className={classes.root} elevation={0} variant="outlined">
      <Alink to={`/blog/${data.data.id}`} className={classes.titleLink}>
        <Image
          className={classes.img}
          src={data.data.img.src}
          alt={data.data.img.alt}
        />
        <Typography
          className={classes.newsTitle}
          variant="body2"
          color="primary"
          component="h5"
        >
          {data.data.news}
        </Typography>
      </Alink>
    </Card>
  );
}
