import React from "react";
import { toMarkdown } from "./markdownHelper";
import { makeStyles } from "@material-ui/core/styles";
import { getImg } from "./Image";

const useStyles = makeStyles((theme) => ({
  markdownViewer: {
    fontSize: "14px",
    textAlign: "justify",
    "@media screen and (min-width: 768px)": {
      fontSize: "16px",
    },
    "@media screen and (min-width: 1024px)": {
      fontSize: "18px",
    },
    "& h2": {
      color: "#1E88E5",
      padding: "0 2%",
      fontSize: "16px",
      "@media screen and (min-width: 768px)": {
        fontSize: "20px",
        padding: "0 1rem",
      },
      "@media screen and (min-width: 1024px)": {
        fontSize: "22px",
      },
    },
    "& p": {
      padding: "0 2%",
      lineHeight: 1.5,
      margin: "0 0 0.5rem",
      "@media screen and (min-width: 768px)": {
        padding: "0 1rem",
      },
      "@media screen and (min-width: 1024px)": {
        padding: "0 1rem",
      },
    },
    "& img": {
      width: "100%",
      display: "block",
      margin: "0 auto",
    },
    "& ul": {
      paddingLeft: "10px",
    },
    "& ul li": {
      paddingRight: "2%",
    },
    "& blockquote": {
      margin: "0 0 0 20px",
      "@media screen and (min-width: 768px)": {
        margin: "0 0 0 40px",
      },
    },
  },
}));

let marked = require("marked");

const imgTagOccurence = `<img src="`;

// function replaceTag(htmlData) {
//     return htmlData.replace(/</g, '&#60;').replace(/>/g, '&#62;');
// }
function getImgPath(src) {
  // const results = src.split("/");
  // const imgFileName = results[results.length - 1];
  const correctPath = getImg(src);
  // const correctDefaultPath = require("../../media/" + imgFileName).default;

  // return typeof correctPath === "string" ? correctPath : (typeof correctDefaultPath === "string" ? correctDefaultPath : null);

  return typeof correctPath === "string" ? correctPath : null;
}

function correctImagePaths(htmlData) {
  if (!htmlData) {
    return;
  }

  if (htmlData.indexOf(imgTagOccurence) === -1) {
    return htmlData;
  }

  const noneImgArr = htmlData.split(imgTagOccurence);

  const output = noneImgArr.map((item) => {
    if (htmlData.indexOf(imgTagOccurence + item) === -1) {
      return item;
    }

    const imgSrc = item.split(`"`)[0];
    const remaining = item.replace(imgSrc, "");

    return [imgTagOccurence, getImgPath(imgSrc), remaining].join("");
  });

  return output.join("");
}

const MarkdownViewer = (props) => {
  const classes = useStyles();
  return props.data ? (
    <div
      {...props}
      dangerouslySetInnerHTML={{
        __html: correctImagePaths(marked(toMarkdown(props.data))),
      }}
      className={classes.markdownViewer}
    ></div>
  ) : null;
};

export default MarkdownViewer;
