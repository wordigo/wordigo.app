import AuthLayout from "@/components/Auth/Layout/AuthLayout";
import SocialProviders from "@/components/Auth/SocialProviders";

import AuthSıgnInForm from "./signin-form";

const SıgnIn = () => {
  return (
    <AuthLayout>
      <AuthLayout.Title>Welcome Back</AuthLayout.Title>
      <AuthLayout.Description>Enter your email to sign in to your account</AuthLayout.Description>
      <AuthSıgnInForm />
      <SocialProviders />
      <AuthLayout.Footer url="/auth/signup">Don't have an account? Sign Up</AuthLayout.Footer>
    </AuthLayout>
  );
};

export default SıgnIn;
