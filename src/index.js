import Vxp, { VueAdapter } from "vxp";
import Login from "vxp-plugin-vue-login";
import Home from "vxp-plugin-vue-home";

const viewAdapter = new VueAdapter();
const plugins = [new Login(), new Home()];

new Vxp(viewAdapter).use(plugins).render("#app");
