import { Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  button: {
    marginBottom: "16px",
  },
}));

function ModalButton(props) {
  const {
    buttonVariant = "outlined",
    fullWidth = true,
    primaryColor,
    secondaryColor,
    children,
  } = props;
  const classes = useStyles();

  const variantStyles = {
    outlined: {
      border: `2px solid ${secondaryColor}`,
      color: secondaryColor,
    },
    contained: {
      color: "white",
      backgroundColor: primaryColor,
    },
    text: {
      color: secondaryColor,
    },
  };

  return (
    <Button
      className={classes.button}
      variant={buttonVariant}
      fullWidth={fullWidth}
      style={variantStyles[buttonVariant] || {}}
    >
      {children}
    </Button>
  );
}

export default ModalButton;
