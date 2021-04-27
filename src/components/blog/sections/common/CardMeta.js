import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { FacebookShareButton } from "react-share";
import ShareIcon from "@material-ui/icons/Share";
// import FavoriteButton from "./FavoriteButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Typography } from "@material-ui/core";
//import { getViewCountByBlogNewsId } from "../../../../api/blog.service";

const useStyles = makeStyles((theme) => ({
  listMeta: {
    position: "relative",
    height: "4rem",
    padding: theme.spacing(0, 1, 0, 1),

    "&:before": {
      content: `''`,
      width: "calc(100% - 24px)",
      top: "0px",
      left: "12px",
      height: "1px",
      position: "absolute",
      backgroundColor: "#DEDEDE",
    },
  },
  meta: {
    display: "flex",
    alignItems: "center",
    color: "#488BE9",
    fontSize: "15px",
    fontWeight: "bold",
    textTransform: "none",
    marginRight: theme.spacing(1),
  },
  icon: {
    marginLeft: theme.spacing(0.5),
  },
  favorites: {
    marginLeft: "auto",
  },
}));
export default function CardMeta(props) {
  const classes = useStyles();
  const [viewCount, setViewCount] = useState();
  // useEffect(() => {
  //   // Loading basic user information
  //   if (props.newCount) {
  //     setViewCount(props.newCount);
  //   } else {
  //     if (props.id) {
  //       getViewCountByBlogNewsId(props.id).then((result) => {
  //         setViewCount(result.count);
  //       });
  //     }
  //   }
  // }, [props.id, props.newCount]);
  return (
    <CardActions disableSpacing className={classes.listMeta}>
      <FacebookShareButton
        url={`https://it-dojo.world-works.co.jp/blog/${props.id}`}
        quote={"Học lập trình tại World IT Dojo  "}
        hashtag={"#WorldITDojo"}
        description={"Học lập trình tại World IT Dojo"}
      >
        <Button className={classes.meta} aria-label="share">
          Share <ShareIcon className={classes.icon} />
        </Button>
      </FacebookShareButton>

      {/* <Typography className={classes.meta}>
        {viewCount} <VisibilityIcon className={classes.icon} />
      </Typography>

      <div className={classes.favorites}>
        <FavoriteButton id={props.id} news={props.news} />
      </div> */}
    </CardActions>
  );
}
