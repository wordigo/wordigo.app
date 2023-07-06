import MainLayout from "@/components/Layout/MainLayout";
import { api } from "@/libs/trpc";

export default function page() {
  const deneme = api.auth;
  console.log(deneme);
  return <MainLayout>Note Page</MainLayout>;
}
