import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Image from "../../common/Image";
import CardSummary from "./CardSummary";
import Alink from "../../../common/ALink";

const useStyles = makeStyles({
  root: {
    border: "none",
    overflow: "unset",
    backgroundColor: "#F5F5F6",
  },
  img: {
    width: "100%",
    height: "250px",
    "@media screen and (min-width: 900px)": {
      height: "300px",
    },
    "@media screen and (min-width: 1024px)": {
      height: "350px",
    },
    "@media screen and (min-width: 1280px)": {
      height: "420px",
    },
  },
});

export default function HotCardLeft(data) {
  const classes = useStyles();
  return (
    <Card className={classes.root} elevation={0} variant="outlined">
      <Alink to={`/blog/${data.data.id}`} className={classes.titleLink}>
        <Image
          className={classes.img}
          src={data.data.img.src}
          alt={data.data.img.alt}
        />
      </Alink>
      <CardSummary data={data.data} />
    </Card>
  );
}
