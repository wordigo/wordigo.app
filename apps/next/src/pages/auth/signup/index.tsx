import AuthLayout from "@/components/Auth/Layout/AuthLayout";
import SocialProviders from "@/components/Auth/SocialProviders";

import AuthSıgnupForm from "./signup-form";

const SignUp = () => {
  return (
    <AuthLayout>
      <AuthLayout.Title>Welcome</AuthLayout.Title>
      <AuthLayout.Description>Enter your email and username below to create your account</AuthLayout.Description>
      <AuthSıgnupForm />
      <SocialProviders />
      <AuthLayout.Footer url="/auth/signin">Already have an account? Sign In</AuthLayout.Footer>
    </AuthLayout>
  );
};

export default SignUp;
