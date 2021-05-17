import { useEffect } from "react";
import { FormControl, makeStyles, MenuItem, Select } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  formControl: {
    width: "100%",
  },
}));

function Dropdown(props) {
  const {
    name,
    value,
    onChange,
    options = [{}],
    variant = "outlined",
    label,
  } = props;
  const classes = useStyles();

  useEffect(() => {
    if (!value) {
      onChange && onChange({ name, value: options[0].value });
    }
  }, []);

  const handleChange = (evt) => {
    const { value } = evt.target;
    onChange && onChange({ name, value });
  };

  return (
    <FormControl variant={variant} className={classes.formControl}>
      <Select value={value} onChange={handleChange} label={label}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Dropdown;
