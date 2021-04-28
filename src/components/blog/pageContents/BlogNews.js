import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Container } from "@material-ui/core";
import HotNews from "../sections/home/HotNews";
import SearchBlogs from "../sections/home/SearchBlogs";

const useStyles = makeStyles((theme) => ({
  blogNews: {
    paddingTop: "10px",
    paddingBottom: "477px",
    transition: "all .3s ease-in-out",
    backgroundColor:"#F5F5F6",

    [theme.breakpoints.up("sm")]: {
      paddingBottom: "230px",
    },
    [theme.breakpoints.up("md")]: {
      paddingBottom: "233px",
    },
    "@media screen and (max-width: 356px)": {
      paddingBottom: "496px",
    },
  },
  container: {
    "@media screen and (max-width: 767px)": {
      paddingLeft: "0px",
      paddingRight: "0px",
    },
  },
}));

export default function BlogNews({ data }) {
  const classes = useStyles();
  const desktopViewport = useMediaQuery("(min-width:768px)");
  return desktopViewport ? (
    <div className={classes.blogNews}>
      <Container className={classes.container}>
        <HotNews data={data} />
        <SearchBlogs data={data.slice(3)} />
      </Container>
    </div>
  ) : (
    <div className={classes.blogNews}>
      <Container className={classes.container}>
        <SearchBlogs data={data} />
      </Container>
    </div>
  );
}
