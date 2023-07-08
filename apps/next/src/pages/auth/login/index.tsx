import AuthLayout from "@/components/Auth/Layout/AuthLayout";
import SocialProviders from "@/components/Auth/SocialProviders";

import AuthLoginForm from "./login-form";

const Login = () => {
  return (
    <AuthLayout>
      <AuthLayout.Title>Welcome Back</AuthLayout.Title>
      <AuthLayout.Description>Enter your email to sign in to your account</AuthLayout.Description>
      <AuthLoginForm />
      <SocialProviders />
      <AuthLayout.Footer url="/register">Don't have an account? Sign Up</AuthLayout.Footer>
    </AuthLayout>
  );
};

export default Login;
