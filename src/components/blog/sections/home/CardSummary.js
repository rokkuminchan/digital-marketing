import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import PersonIcon from "@material-ui/icons/Person";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import ALink from "../../../common/ALink";
import MarkdownViewer from "../../common/MarkdownViewer";
import LeftTime from "../../common/LeftTime";

const useStyles = makeStyles({
  actionArea: {
    "&:hover $focusHighlight": {
      opacity: 0,
    },
  },
  focusHighlight: {},
  img: {
    width: "100%",
  },
  cardContent: {
    paddingLeft: "0",
    paddingRight: "0",
    "&:last-child": {
      paddingBottom: "16px",
    },
  },
  titleLink: {
    textDecoration: "none",
  },
  title: {
    marginBottom: "10px",
    textAlign: "justify",
    fontWeight:　700,
    color:"#1E88E5",
    "&:hover": {
      color: "#1f65b7",
    },
    "@media screen and (min-width: 768px)":{
   fontSize: "22px",
},
    "@media screen and (min-width: 1024px)": {
      fontSize:"25px",
      fontWeight:"700",
    },
  },
  newsInfo: {
    display: "flex",
    alignItems: "center",
    color: "#0000008a",
    marginBottom: "0.8rem",
    fontWeight:700,


  },
  Icon:{
    width:"1em",
    height:"1em",
    fontSize:"20px",
  },
  author: {
    paddingTop: "5px",
    marginLeft: "0.8rem",
    marginRight: "3rem",
    fontWeight:700,
    fontSize: "18px",
  },
  date: {
    fontWeight:　700,
    fontSize: "18px",
    paddingTop: "4px",
    marginLeft: "0.8rem",
    fontStyle: "blod",
  },
  summary: {
    display: "-webkit-box",
    boxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitLineClamp: "3",
    fontWeight:600,

    "& div": {
      padding: "0px",
      "& p": {
        padding: "0px",
        fontSize: "16px",
        color: "#0000008a",
        marginBottom: "0px",
      },
    },
  },

});

export default function CardSummary(data) {
  const classes = useStyles();
  return (
    <CardContent className={classes.cardContent}>
      <ALink to={`/blog/${data.data.id}`} className={classes.titleLink}>
        <Typography
          className={classes.title}
          variant="h5"
          color="primary"
          component="h5"
        >
          {data.data.news}
        </Typography>
      </ALink>
      <div className={classes.newsInfo}>
        <PersonIcon className={classes.Icon}/>
        <Typography className={classes.author}>
          {data.data.author}
        </Typography>
        <AccessTimeIcon className={classes.Icon}/>
        <Typography className={classes.date}>
          <LeftTime time={data.data.date} />
        </Typography>
      </div>
      <Typography variant="h5" align="justify" className={classes.summary}>
        <MarkdownViewer data={data.data.summary} />
      </Typography>
    </CardContent>
  );
}
