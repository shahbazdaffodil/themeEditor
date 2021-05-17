import { connect } from "react-redux";
import { setFieldValue } from "../redux/modules/themeEditor";

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...ownProps,
    ...dispatchProps,
    value: stateProps[ownProps.name],
  };
}

function fieldContainer(component) {
  return connect(
    ({ themeEditor }) => ({ ...themeEditor }),
    {
      onChange: setFieldValue,
    },
    mergeProps
  )(component);
}

export default fieldContainer;
