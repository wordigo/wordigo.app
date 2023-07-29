import AuthLayout from "@/components/Auth/Layout/AuthLayout";
import SocialProviders from "@/components/Auth/SocialProviders";
import { getSession } from "next-auth/react";

import AuthSıgnupForm from "./signup-form";

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

const SignUp = () => {
  return (
    <AuthLayout>
      <AuthLayout.Title>Welcome</AuthLayout.Title>
      <AuthLayout.Description>Enter your email and username below to create your account.</AuthLayout.Description>
      <AuthSıgnupForm />
      <SocialProviders />
      <AuthLayout.Footer url="/auth/signin">
        Already have an account? <span className="text-foreground font-semibold">Sign in</span>
      </AuthLayout.Footer>
    </AuthLayout>
  );
};

export default SignUp;
