import compose from "compose-function";
import { withLayout } from "./with-layout";
import { withRouter } from "./with-router";

export const withProviders = compose(withRouter, withLayout);
