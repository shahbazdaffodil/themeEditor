import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import UploadCard from "../components/UploadCard";
import { connect } from "react-redux";

const useStyles = makeStyles(() => ({
  caption: {
    marginTop: "8px",
    color: "#c4c5cb",
  },
  button: {
    backgroundColor: "#2a55b5",
  },
}));

function VerificationCard(props) {
  const { modalBackgroundColor, modalBorderRadius } = props;
  const classes = useStyles();
  return (
    <UploadCard
      title="Verify"
      subTitle="Please follow instructions to help us confirm your identity."
      styles={{
        root: {
          backgroundColor: modalBackgroundColor,
          borderRadius: modalBorderRadius,
        },
      }}
    >
      <Button
        variant="contained"
        color="primary"
        fullWidth
        className={classes.button}
      >
        Verify
      </Button>
      <Typography variant="caption" display="block" className={classes.caption}>
        by clicking above, you are agreeing to persona's{" "}
        <a href="#privacy-policy">privacy policy</a>
      </Typography>
    </UploadCard>
  );
}

export default connect(
  ({ themeEditor: { modalBackgroundColor, modalBorderRadius } }) => ({
    modalBackgroundColor,
    modalBorderRadius,
  })
)(VerificationCard);
