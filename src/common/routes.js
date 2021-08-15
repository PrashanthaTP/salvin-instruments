import Components from "../components";
import containers from "../containers/salvin";
export const componentsRoutes = {
  home: { path: "/home", component: Components.Home },
  // installation: { path: "/installation", component: Components.Installation },
  // maintainance: { path: "/maintainance", component: Components.Maintainance },
  // operation: { path: "/operation", component: Components.Operation },
  // overview: { path: "/home", component: Components.Home },
  // safety: { path: "/safety", component: Components.Safety },
  // specification: {
  // path: "/specification",
  // Component: Components.Specification,
  // },
};
export const containerRoutes = {
  home: { path: "/", component: containers.Home, exact: true },
  installation: { path: "/manual", component: containers.Manual },
};
