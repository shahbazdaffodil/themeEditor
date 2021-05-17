import { makeStyles, TextField } from "@material-ui/core";
import React, { useEffect, useRef } from "react";

const useStyles = makeStyles(() => ({
  textField: {
    pointerEvents: "none",
    textTransform: "uppercase",
  },
  container: {
    position: "relative",
    display: "flex",
  },
  colorPreviewBox: {
    border: "1px solid rgba(0, 0, 0, 0.23)",
    borderRadius: "4px",
    width: "37px",
    height: "37px",
    flexShrink: "0",
    marginRight: "8px",
  },
}));

let evtTimer;

function ColorChooser(props) {
  const {
    label,
    name,
    value,
    onChange,
    variant = "outlined",
    defaultValue,
  } = props;
  const classes = useStyles();
  const inputRef = useRef();

  useEffect(() => {
    if (!value) {
      onChange && onChange({ name, value: defaultValue });
    }
  }, []);

  return (
    <div
      className={classes.container}
      onClick={() => {
        inputRef.current.click();
      }}
    >
      <div
        className={classes.colorPreviewBox}
        style={{ backgroundColor: value }}
      ></div>
      <input
        ref={inputRef}
        type="color"
        style={{ visibility: "hidden", position: "absolute" }}
        value={value}
        onChange={(evt) => {
          clearTimeout(evtTimer);
          const { value } = evt.target;
          evtTimer = setTimeout(() => {
            onChange && onChange({ name, value });
          }, 50);
        }}
      />
      <TextField
        fullWidth
        label={label}
        variant={variant}
        value={value}
        inputProps={{ className: classes.textField }}
      />
    </div>
  );
}

export default ColorChooser;
