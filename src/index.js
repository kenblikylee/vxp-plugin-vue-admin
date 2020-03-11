import Vxp, { VueAdapter } from "vxp";
import login from "vxp-plugin-vue-login";
import home from "vxp-plugin-vue-home";

const viewAdapter = new VueAdapter();
const plugins = [login, home];

new Vxp(viewAdapter).use(plugins).render("#app");
