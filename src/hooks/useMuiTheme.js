import { createMuiTheme } from "@material-ui/core";
import { useEffect, useState } from "react";

function useMuiTheme(props) {
  const { fontFamily } = props;
  const [theme, setTheme] = useState();

  useEffect(() => {
    const fontTheme = createMuiTheme({
      typography: {
        fontFamily,
      },
    });
    setTheme(fontTheme);
  }, [fontFamily]);

  return theme;
}

export default useMuiTheme;
