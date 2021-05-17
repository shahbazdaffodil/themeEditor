import React from "react";
import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 320,
    height: 460,
    paddingTop: "32px",
    boxShadow: "0px 0px 18px 6px rgba(0,0,0,0.08)",
  },
  subTitle: {
    color: "#c4c5cb",
    marginBottom: "32px",
  },
});

function UploadCard(props) {
  const { title = "", subTitle = "", children, styles = {} } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root} style={styles.root}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography
          className={classes.subTitle}
          variant="subtitle2"
          gutterBottom
        >
          {subTitle}
        </Typography>
        {children}
      </CardContent>
    </Card>
  );
}

export default UploadCard;
