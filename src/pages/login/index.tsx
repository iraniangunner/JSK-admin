import { AuthPage } from "@refinedev/antd";
import { ThemedTitleV2 } from "@refinedev/antd";

export const Login = () => {
  return (
    <AuthPage
      type="login"
      // title="JSK_Admin"
      formProps={{
        initialValues: { email: "demo@refine.dev", password: "demodemo" },
      }}
    />
  );
};
