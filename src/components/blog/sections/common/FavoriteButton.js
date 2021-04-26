import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
// import {
//   getViewCountByBlogNewsId,
//   addOrUpdateITBlog,
// } from "../../../../api/blog.service";
import { getUser } from "../../../../utils/auth";
import LoginDialog from "../../../common/LoginDialog";

const useStyles = makeStyles((theme) => ({
  favorite: {
    position: "relative",
  },
  favoriteButton: {
    color: "#488BE9",
    fontSize: "15px",
  },
  favoriteIcon: {
    marginLeft: theme.spacing(0.7),
  },
}));

const FavoriteButton = ({ id, news }) => {
  const classes = useStyles();

  const [active, setActive] = useState();
  const [uid] = useState(getUser().uid);
  const [likeCount, setLikeCount] = useState();
  const [login, setLogin] = React.useState(false);

  const HANDLE_LIKE = Symbol("HANDLE_LIKE");
  const HANDLE_DISLIKE = Symbol("HANDLE_DISLIKE");

  // useEffect(() => {
  //   // Loading like counter
  //   getViewCountByBlogNewsId(id).then((result) => {
  //     setLikeCount(result.likeUser.length);
  //     if (uid) {
  //       if (result.likeUser.indexOf(uid) === -1) {
  //         setActive(null);
  //       } else {
  //         setActive("like");
  //       }
  //     } else {
  //       setActive(null);
  //     }
  //   });
  // }, [id, uid]);

  // const handleOnClick = (type) => {
  //   switch (type) {
  //     case HANDLE_LIKE:
  //       setActive("like");
  //       getViewCountByBlogNewsId(id).then((result) => {
  //         setLikeCount(result.likeUser.length + 1);
  //         result.likeUser.push(uid);
  //         addOrUpdateITBlog(news, id, result.count, result.likeUser);
  //       });
  //       break;
  //     case HANDLE_DISLIKE:
  //       setActive(null);
  //       getViewCountByBlogNewsId(id).then((result) => {
  //         setLikeCount(result.likeUser.length - 1);
  //         let ind = result.likeUser.indexOf(uid);
  //         result.likeUser.splice(ind, 1);
  //         addOrUpdateITBlog(news, id, result.count, result.likeUser);
  //       });
  //       break;
  //   }
  //};

  return (
    <div className={classes.favorite}>
      <Button
        aria-label="add an favorite"
        className={classes.favoriteButton}
        clas
        onClick={() =>
          uid
            ? active !== "like"
              ? handleOnClick(HANDLE_LIKE)
              : handleOnClick(HANDLE_DISLIKE)
            : setLogin(true)
        }
      >
        {likeCount}

        {active !== "like" ? (
          <ThumbUpOutlinedIcon
            fontSize="small"
            className={classes.favoriteIcon}
            style={{ color: "#BDBDBD" }}
          />
        ) : (
          <ThumbUpIcon fontSize="small" className={classes.favoriteIcon} />
        )}
      </Button>
      <LoginDialog login={login} setLogin={setLogin} />
    </div>
  );
};

export default FavoriteButton;
