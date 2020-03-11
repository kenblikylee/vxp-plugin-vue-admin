import { VxpPlugin } from "vxp";

const routes = [
  {
    path: "/",
    redirect: {
      name: "login"
    }
  },
  {
    name: "login",
    path: "/login",
    component: {
      functional: true,
      render: h => <div>login rendered by jsx</div>
    }
  }
];

export default class extends VxpPlugin {
  apply(vxp) {
    const v = vxp.v;
    v.addRoutes(routes);
    console.log("login", vxp);
  }
}
