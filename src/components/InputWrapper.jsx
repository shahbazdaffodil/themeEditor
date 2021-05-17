import { makeStyles, Typography } from "@material-ui/core";
import { fieldComponents } from "../views/ThemeEditor/menuConfig";

const useStyles = makeStyles((theme) => ({
  inputWrapperContainer: {
    padding: "8px 16px",
  },
}));

function NullComp() {
  return null;
}

function InputWrapper(props) {
  const { title, subTitle, type, ...fieldProps } = props;
  const classes = useStyles();

  const FieldComponent = fieldComponents[type] || NullComp;

  return (
    <div className={classes.inputWrapperContainer}>
      <Typography variant="button" display="block">
        {title}
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        {subTitle}
      </Typography>
      <FieldComponent {...fieldProps} />
    </div>
  );
}

export default InputWrapper;
