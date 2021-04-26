import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import SearchBlogs from "../sections/home/SearchBlogs";

const useStyles = makeStyles((theme) => ({
  tagPage: {
    paddingTop: "10px",
    paddingBottom: "477px",
    transition: "all .3s ease-in-out",
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
  tagName: {
    backgroundColor: "#CCC",
    display: "inline-block",
    borderRadius: "50px",
    padding: "8px 24px",
    marginTop: "12px",
    fontStyle: "italic",
    fontWeight: 400,
    cursor: "pointer",

    "@media screen and (max-width: 767px)": {
      marginLeft: theme.spacing(1),
    },
  },
  showInfo: {
    textAlign: "center",
    fontSize: "25px",
    margin: "70px 0",
  },
}));
function TagsPage({ data, tags }) {
  const classes = useStyles();
  return (
    <div className={classes.tagPage}>
      <Container className={classes.container}>
        <Typography variant="h5" component="h1" className={classes.tagName}>
          {tags}
        </Typography>
        {data.length === 0 ? (
          <div className={classes.showInfo}>
            Không tìm thấy bài viết tương ứng
          </div>
        ) : (
          <SearchBlogs data={data} />
        )}
      </Container>
    </div>
  );
}

export default TagsPage;
