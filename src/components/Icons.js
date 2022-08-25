import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

export const Icons = () => (
  <div>
    <FontAwesomeIcon icon="user" />
    <FontAwesomeIcon icon="bag-shopping" />
    
  </div>
);

export default Icons;
