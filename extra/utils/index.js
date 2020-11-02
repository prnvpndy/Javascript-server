// import the functions from permissions and validation files
import {hasPermission} from "./permission";
import {validateUsers} from "./validation";
import {validateEmail} from "./validation";

// now export again from utils/index
export {hasPermission};
export {validateUsers};
export {validateEmail};
