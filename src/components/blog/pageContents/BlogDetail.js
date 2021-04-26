import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import OtherNews from "../sections/detail/OtherNews";
import NewsDetail from "../sections/detail/NewsDetail";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "#EAEAEA",
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
  paper1: {
    backgroundColor: "#EAEAEA",
    "@media screen and (min-width: 1025px)": {
      width: "85%",
      margin: "0 auto",
    },
  },
}));

export default function BlogDetail({ data, otherNews }) {
  const [isRouteChanged, setIsRouteChanged] = useState(false);
  const classes = useStyles();

  // Reset list of other news when navigating using same component
  function handleOnAfterDataReloaded() {
    setIsRouteChanged(false);
  }

  return (
    <Paper className={classes.paper}>
      <Paper elevation="0" className={classes.paper1}>
        <NewsDetail data={data} />
        <OtherNews
          onAfterDataReloaded={handleOnAfterDataReloaded}
          needsReload={isRouteChanged}
          data={otherNews}
        />
      </Paper>
    </Paper>
  );
}
