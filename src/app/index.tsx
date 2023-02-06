import { withProviders } from "./providers";
import { Routing } from "pages";
import "utils/styles/normalize.scss";
const App = () => {
  return <Routing />;
};

export default withProviders(App);
