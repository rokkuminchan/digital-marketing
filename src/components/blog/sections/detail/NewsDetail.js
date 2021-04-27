import React, { useEffect, useState } from "react";
// import {
//   addOrUpdateITBlog,
//   getViewCountByBlogNewsId,
// } from "../../../../api/blog.service";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import PersonIcon from "@material-ui/icons/Person";
import LocalOfferRoundedIcon from "@material-ui/icons/LocalOfferRounded";

import ALink from "../../../common/ALink";
import MarkdownViewer from "../../common/MarkdownViewer";
import LeftTime from "../../common/LeftTime";
import CardMeta from "../common/CardMeta";

const useStyles = makeStyles((theme) => ({
  container: {
    "@media screen and (max-width: 767px)": {
      paddingLeft: "0px",
      paddingRight: "0px",
    },
  },
  allArticlesLink: {
    textDecoration: "none",
    display: "inline-block",
  },
  allArticlesDesc: {
    textTransform: "none",
    display: "flex",
    alignItems: "center",
    fontSize: "16px",
    color: "#488BE9",
    padding: "15px 0",
    "@media screen and (max-width: 767px)": {
      padding: "20px 0 10px",
    },
    transition: "all .3s linear",
    "&:hover": {
      fontWeight: "500",
    },
  },
  allArticlesLinkIcon: {
    width: "1.2em",
    height: "1.2em",
    [theme.breakpoints.down("xs")]: {
      width: "0.8em",
      height: "auto",
    },
  },
  contentDetail: {
    padding: "5%",
    [theme.breakpoints.down("xs")]: {
      boxShadow: "none",
    },
  },
  title: {
    color: "#1f65b7",
    marginBottom: "1rem",
    fontSize: "20px",
    "@media screen and (min-width: 768px)": {
      padding: "0 1rem",
      fontSize: "25px",
    },
    "@media screen and (min-width: 1024px)": {
      fontSize: "30px",
    },
  },
  newsInfo: {
    display: "flex",
    color: "#0000008a",
    marginBottom: "1rem",
    paddingLeft: "10px",
    "@media screen and (min-width: 768px)": {
      padding: "0 1rem",
    },
  },
  authorDate: {
    display: "flex",
    alignItems: "center",
    fontSize: "18px",
    paddingTop: "2px",
    marginRight: "2rem",
    fontWeight: "500",
    color: "#4a4a4a8a",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },
  content: {
    paddingBottom: "30px",
    "& img": {
      padding: "20px 0",
      width: "80%",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
  },

  tagName: {
    textDecoration: "none",
    display: "inline-block",
    padding: "4px 16px",
    backgroundColor: "#ccc",
    borderRadius: "30px",
    color: "#333",
    fontStyle: "italic",
    margin: "0 4px",
    "&:hover": {
      opacity: 0.7,
    },
  },
  tags: {
    display: "flex",
    alignItems: "center",
    padding: 0,
    color: "#488BE9",
  },
  tagIcon: {
    display: "flex",
    alignItems: "center",
    marginRight: "8px",
  },
}));

export default function NewsDetail({ data }) {
  const classes = useStyles();

  const [newCount, setNewCount] = useState();
  // useEffect(() => {
  //   getViewCountByBlogNewsId(data.id).then((result) => {
  //     addOrUpdateITBlog(data.news, data.id, result.count + 1, result.likeUser);
  //     setNewCount(result.count + 1);
  //   });
  // }, [data.id]);

  return (
    <Container className={classes.container}>
      <ALink to="/blog" className={classes.allArticlesLink}>
        <Typography className={classes.allArticlesDesc}>
          <KeyboardArrowLeftIcon className={classes.allArticlesLinkIcon} />
        Tất cả bài viết
      </Typography>
      </ALink>
      <Paper className={classes.contentDetail}>
        <div>
          <Typography className={classes.title} variant="h5" component="h2">
            {data.news}
          </Typography>
          <div className={classes.newsInfo}>
            <Typography className={classes.authorDate} variant="h5">
              <PersonIcon /> {data.author}
            </Typography>
            <Typography className={classes.authorDate} variant="h5">
              <AccessTimeIcon />
              <LeftTime time={data.date} />
            </Typography>
          </div>
          <Typography align="justify" className={classes.content}>
            <MarkdownViewer data={data.content} />
          </Typography>
        </div>

        <CardMeta id={data.id} news={data.news} newCount={newCount} />

        <div className={classes.tags}>
          <div className={classes.tagIcon}>
            <LocalOfferRoundedIcon
              className={classes.icon}
              style={{ width: "16px", height: "16px" }}
            />
            <p>Tags :</p>
          </div>
          <div>
            {data.tags.map((tag) => {
              return (
                <ALink
                  to={`/blog/tag/${tag
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .replace(/đ/g, "d")
                    .replace(/Đ/g, "D")
                    .replace(/ /g, "-")
                    .toLowerCase()}`}
                  className={classes.tagName}
                >
                  {tag}
                </ALink>
              );
            })}
          </div>
        </div>
      </Paper>
    </Container>
  );
}
