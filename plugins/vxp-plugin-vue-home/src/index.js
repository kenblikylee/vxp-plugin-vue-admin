import { VxpPlugin } from "vxp";

export default class extends VxpPlugin {
  apply(vxp) {
    console.log("home", vxp);
  }
}
