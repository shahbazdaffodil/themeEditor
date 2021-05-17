import { Route, Switch } from "react-router-dom";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import routes from "./routes";

function App() {
  return (
    <ScopedCssBaseline>
      <Switch>
        {routes.map(({ component: Component, ...route }, index) => (
          <Route key={route.path || index} {...route}>
            <Component />
          </Route>
        ))}
      </Switch>
    </ScopedCssBaseline>
  );
}

export default App;
