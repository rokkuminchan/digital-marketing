import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import CardOther from "./CardOther";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "40px",
  },
  title: {
    backgroundColor: "#61A0FF",
    color: "#ffffff",
    padding: "6px 0px 4px 10px",
    position: "relative",
    fontSize: "18px",
    "@media screen and (min-width: 768px)": {
      fontSize: "28px",
      padding: "3px 0px 1px 40px",
    },
    "&:before": {
      content: `''`,
      position: "absolute",
      right: "-1px",
      top: "-1px",
      width: "50%",
      borderTop: "36px solid #EAEAEA",
      borderLeft: "36px solid transparent",
      "@media screen and (min-width: 450px)": {
        width: "60%",
      },
      "@media screen and (min-width: 525px)": {
        width: "70%",
      },
      "@media screen and (min-width: 768px)": {
        width: "60%",
        borderTop: "46px solid #EAEAEA",
        borderLeft: "46px solid transparent",
      },
      "@media screen and (min-width: 987px)": {
        width: "67%",
      },
    },
  },
  container1: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    "&:last-child": {
      paddingBottom: theme.spacing(2),
      "@media screen and (min-width: 768px)": {
        paddingBottom: theme.spacing(3),
      },
    },
  },
  button: {
    textAlign: "center",
  },
  buttonchill: {
    height: "42px",
    width: "150px",
    fontSize: "18px",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    "@media screen and (min-width: 768px)": {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      fontSize: "14px",
      margin: "16px 0px 0px",
      height: "38px",
      width: "120px",
    },
  },
}));

export default function OtherNews({ data, needsReload, onAfterDataReloaded }) {
  const classes = useStyles();
  const [visibleSize, setVisibleSize] = useState(3);

  const ShowMoreItems = () => {
    setVisibleSize((preValue) => preValue + 3);
  };

  useEffect(() => {
    if (needsReload) {
      setVisibleSize(3);
      onAfterDataReloaded && onAfterDataReloaded();
    }
  }, [needsReload]);

  return (
    <Container className={classes.container}>
      {data.length > 0 && <Typography variant="h6" component="h1" className={classes.title}>
        Bài viết liên quan
        </Typography>
      }
      <div className={classes.container1}>
        {data.slice(0, visibleSize).map((news, id) => {
          return <CardOther key={id} data={news} />;
        })}
      </div>
      {visibleSize < data.length ? (
        <div div className={classes.button}>
          <Button
            variant="contained"
            color="primary"
            onClick={ShowMoreItems}
            className={classes.buttonchill}
          >
            Read more
          </Button>
        </div>
      ) : null}
    </Container>
  );
}
