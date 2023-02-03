import { Layout } from "ui";

export const withLayout = (component: () => React.ReactNode) => () =>
  <Layout>{component()}</Layout>;
