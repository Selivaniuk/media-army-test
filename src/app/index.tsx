import { withProviders } from "./providers";
import { Routing } from "pages";
import "utils/normalize.scss";
const App = () => {
  return <Routing />;
};

export default withProviders(App);
