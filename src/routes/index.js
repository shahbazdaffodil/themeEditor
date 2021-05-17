import routePaths from "./routePaths";
import Root from "../views/Root";
import ThemeEditor from "../views/ThemeEditor";

const routes = [
  {
    path: routePaths.root,
    exact: true,
    component: Root,
  },
  {
    path: routePaths.themes.edit,
    exact: true,
    component: ThemeEditor,
  },
  {
    component: () => "Page not found",
  },
];

export default routes;
