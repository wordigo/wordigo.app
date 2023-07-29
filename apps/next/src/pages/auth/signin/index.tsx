import AuthLayout from "@/components/Auth/Layout/AuthLayout";
import SocialProviders from "@/components/Auth/SocialProviders";
import { getSession } from "next-auth/react";

import AuthSıgnInForm from "./signin-form";

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

const SıgnIn = () => {
  return (
    <AuthLayout>
      <AuthLayout.Title>Welcome Back</AuthLayout.Title>
      <AuthLayout.Description>Enter your email to sign in to your account.</AuthLayout.Description>
      <AuthSıgnInForm />
      <SocialProviders />
      <AuthLayout.Footer url="/auth/signup">
        Don’t have an account? <span className="text-foreground font-semibold">Sign up</span>
      </AuthLayout.Footer>
    </AuthLayout>
  );
};

export default SıgnIn;
