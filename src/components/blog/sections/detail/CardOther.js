import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Image from "../../../common/Image";
import CardMeta from "../common/CardMeta";
// import ALink from "../../../common/Alink";

const useStyles = makeStyles(() => ({
  bigcontent: {
    margin: "24px 10px 8px 10px",
    maxWidth: "270px",
    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    },
    "@media screen and (min-width: 1300px)": {
      maxWidth: 300,
    },
  },
  titleLink: {
    textDecoration: "none",
  },
  img: {
    height: 170,
    width: "100%",
    objectFit: "cover",
    "@media screen and (min-width: 1300px)": {
      height: 200,
    },
  },
  title: {
    display: "-webkit-box",
    boxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitLineClamp: "2",
    margin: "5%",
    fontWeight: "bold",
    "&:hover": {
      color: "#1f65b7",
    },
  },
}));
export default function CardOther({ data }) {
  const classes = useStyles();

  return (
    <Card className={classes.bigcontent}>
      {/* <ALink to={`/blog/${data.id}`} className={classes.titleLink}> */}
      <div>
        <Image className={classes.img} src={data.img.src} alt={data.img.alt} />
        <Typography
          className={classes.title}
          variant="body2"
          color="primary"
          component="h6"
        >
          {data.news}
        </Typography>
      </div>
      {/* </ALink> */}
      <CardMeta id={data.id} news={data.news} />
    </Card>
  );
}
