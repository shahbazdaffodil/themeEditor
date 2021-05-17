import React, { useEffect } from "react";
import { makeStyles, Slider as MuiSlider } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  value: {
    marginLeft: "16px",
  },
}));

function Slider(props) {
  const { defaultValue, name, value = 0, onChange, ...fieldProps } = props;
  const classes = useStyles();

  useEffect(() => {
    if (!value) {
      onChange && onChange({ name, value: defaultValue });
    }
  }, []);

  return (
    <div className={classes.root}>
      <MuiSlider
        value={value}
        onChange={(evt, value) => onChange && onChange({ name, value })}
        {...fieldProps}
      />
      <span className={classes.value}>{value}px</span>
    </div>
  );
}

export default Slider;
