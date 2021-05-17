import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import routePaths from "../routes/routePaths";

function Root() {
  const history = useHistory();

  useEffect(() => {
    history.push(routePaths.themes.edit);
  }, [history]);

  return null;
}

export default Root;
